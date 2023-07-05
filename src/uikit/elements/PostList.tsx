import Image from 'next/image';
import Link from 'next/link';
import { getBackendSeoMedia } from '@/lib/api-helper';
import { formatDate } from '@/app/shared/utils/date';
import styles from './styles.module.scss';

interface Article {
  id: 4;
  attributes: {
    title: string;
    description: string;
    slug: string;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    cover: any;
    category: any;
    authorsBio: any;
  };
}

const PostList = ({ data: articles, children }: { data: Article[]; children?: React.ReactNode }) => {
  return (
    <section className="container p-6 mx-auto space-y-6 sm:space-y-12">
      <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2">
        {articles.map((article) => {
          // const imageUrl = getBackendSeoMedia(article.attributes.cover?.data?.attributes.url);

          const authorsBio = article.attributes.authorsBio?.data?.attributes;
          const avatarUrl = getBackendSeoMedia(authorsBio?.avatar.data.attributes.url);

          return (
            <div
              key={article.id}
              className={`${styles.itemArticles}  g h-56 w-full  mx-auto group hover:no-underline focus:no-underline dark:bg-gray-900 rounded-2xl  shadow-lg `}
            >
              <div className="relative">
                {avatarUrl && (
                  <Image
                    alt="avatar"
                    fill
                    src={avatarUrl}
                    className="w-full h-full rounded-lg"
                    style={{ aspectRatio: 4 / 3 }}
                  />
                )}
              </div>
              <div className="p-3 overflow-hidden">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline text-sky-600">
                  <Link href={`articles/news/${article.attributes.slug}`}>{article.attributes.title}</Link>
                </h3>

                <div className="flex justify-between items-center">
                  <span className="text-xs text-slate-300 py-1">{formatDate(article.attributes.publishedAt)}</span>
                  {article.attributes.category && (
                    <span className="text-xs text-white bg-blue-300 p-2 rounded-2xl">
                      {article.attributes.category}
                    </span>
                  )}
                </div>
                <p className={`${styles.description} overflow-hidden`}>{article.attributes.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      {children && children}
    </section>
  );
};

export default PostList;
