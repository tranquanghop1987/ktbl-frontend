'use client';
import { useState, useEffect, useCallback } from 'react';
import PostList from '@/uikit/elements/PostList';
import { fetchAPI } from '@/app/shared/utils/fetch-api';
import Loader from '@/uikit/atoms/Loader';
import { DESCRIPTION, FEATURE_IMAGE_ALTTEXT, FEATURE_IMAGE_URL, TITLE, TYPE } from '@/app/shared/modules/article/repo';

interface Meta {
  pagination: {
    start: number;
    limit: number;
    total: number;
  };
}

export default function Profile() {
  const [meta, setMeta] = useState<Meta | undefined>();
  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(true);
  const PAGE_LIMIT = 6;

  const fetchData = useCallback(async (start: number, limit: number) => {
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
      };
      const options = { headers: { Authorization: `Bearer ${token}` } };
      const responseData = await fetchAPI(path, urlParamsObject, options);

      if (start === 0) {
        setData(responseData.data);
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
    fetchData(nextPosts, Number(PAGE_LIMIT));
  }

  useEffect(() => {
    fetchData(0, Number(PAGE_LIMIT));
  }, [fetchData]);

  if (isLoading) return <Loader />;

  return (
    <div className="p-28">
      <ol className="list-reset flex">
        <li>
          <a
            href="/"
            className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
          >
            หน้าหลัก
          </a>
        </li>
        <li>
          <span className="mx-2 text-neutral-500 dark:text-neutral-400">/</span>
        </li>
        <li className="text-neutral-500 dark:text-neutral-400">ข่าวประชาสัมพันธ์</li>
      </ol>
      <PostList data={data}>
        {meta!.pagination.start + meta!.pagination.limit < meta!.pagination.total && (
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
