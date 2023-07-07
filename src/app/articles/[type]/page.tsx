'use client';
import { useState, useEffect, useCallback } from 'react';
import PostList from '@/uikit/elements/PostList';
import { fetchAPI } from '@/app/shared/utils/fetch-api';
import Loader from '@/uikit/atoms/Loader';
import { DESCRIPTION, FEATURE_IMAGE_ALTTEXT, FEATURE_IMAGE_URL, TITLE, TYPE } from '@/app/shared/modules/article/repo';
import Breadcrumb from '@/app/shared/widgets/Breadcrumb';

interface Meta {
  pagination: {
    start: number;
    limit: number;
    total: number;
  };
}

export default function Profile({ params }: { params: { type: string } }) {
  const [meta, setMeta] = useState<Meta | undefined>();
  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);
  const PAGE_LIMIT = 6;

  const fetchData = useCallback(async (type: any, start: number, limit: number) => {
    setLoading(true);
    try {
      const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
      const path = `/articles`;
      const urlParamsObject = {
        sort: { publishedAt: 'desc' },
        populate: [TITLE, DESCRIPTION, TYPE, FEATURE_IMAGE_URL, FEATURE_IMAGE_ALTTEXT],
        pagination: {
          start: start,
          limit: limit,
        },
        filters: {
          type: type,
        },
      };
      const options = { headers: { Authorization: `Bearer ${token}` } };
      const responseData = await fetchAPI(path, urlParamsObject, options);

      if (start === 0) {
        setData(responseData.data ?? []);
      } else {
        setData((prevData: any[]) => [...prevData, ...responseData.data]);
      }

      setMeta(responseData.meta);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  function loadMorePosts(): void {
    const nextPosts = meta!.pagination.start + meta!.pagination.limit;
    fetchData(params.type, nextPosts, Number(PAGE_LIMIT));
  }

  useEffect(() => {
    fetchData(params.type, 0, Number(PAGE_LIMIT));
  }, [fetchData]);

  if (isLoading) return <Loader />;

  return (
    <div className="p-28">
      {/* <div className="container">
        <h1 className="text-cyan-500 text-3xl">Articles</h1>
      </div> */}

      <Breadcrumb
        items={[{ text: params.type == 'news' ? 'ข่าวประชาสัมพันธ์' : 'บทความ', link: `/products` }]}
      ></Breadcrumb>

      <PostList data={data}>
        {meta!.pagination!.start + meta!.pagination!.limit < meta!.pagination!.total && (
          <div className="flex justify-center">
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded-full"
              onClick={loadMorePosts}
            >
              โหลดเพิ่ม...
            </button>
          </div>
        )}
      </PostList>
    </div>
  );
}
