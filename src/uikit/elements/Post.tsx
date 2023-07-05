import { getBackendSeoMedia } from '@/lib/api-helper';
import Image from 'next/image';
import { formatDate } from '@/app/shared/utils/date';
import {articleRenderer} from "@/app/shared/utils/article-renderer";

interface Article {
  id: number;
  attributes: {
    title: string;
    description: string;
    slug: string;
    cover: any;
    authorsBio: any;
    blocks: any[];
    publishedAt: string;
  };
}

const Post = ({ data }: { data: Article }) => {
  const { title, description, publishedAt, cover, authorsBio } = data.attributes;
  const author = authorsBio.data?.attributes;
  const imageUrl = getBackendSeoMedia(cover.data?.attributes.url);
  const authorImgUrl = getBackendSeoMedia(authorsBio.data?.attributes.avatar.data.attributes.url);

  return (
    <article className="space-y-8 dark:bg-black dark:text-gray-50">
      {imageUrl && (
        <Image
          src={imageUrl}
          alt="article cover image"
          width={400}
          height={400}
          className="w-full h-96 object-cover rounded-lg"
        />
      )}
      <div className="space-y-6">
        <h1 className="leading-tight text-5xl font-bold ">{title}</h1>
        <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center dark:text-gray-400">
          <div className="flex items-center md:space-x-2">
            {authorImgUrl && (
              <Image
                src={authorImgUrl}
                alt="article cover image"
                width={400}
                height={400}
                className="w-14 h-14 border rounded-full dark:bg-gray-500 dark:border-gray-700"
              />
            )}
            <p className="text-md dark:text-violet-400">
              {author && author.name} • {formatDate(publishedAt)}
            </p>
          </div>
        </div>
      </div>

      <div className="dark:text-gray-100">
        <p>{description}</p>

        {data.attributes.blocks.map((section: any, index: number) => articleRenderer(section, index))}
      </div>
    </article>
  );
};

export default Post;
