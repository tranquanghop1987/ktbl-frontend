import Navbar from '@/app/shared/widgets/Navbar';
import styles from './styles.module.scss';
import ArticleCardList from '@/app/shared/widgets/ArticleCardList';
import Breadcrumb from '@/app/shared/widgets/Breadcrumb';
import { getArticles } from '@/app/shared/modules/article/repo';
import Image from 'next/image';
import { getBackendSeoMedia } from '@/lib/api-helper';
import { Remarkable } from 'remarkable';
import React from 'react';
import ScrollToTop from '@/app/shared/widgets/ScrollToTop';

const md = new Remarkable();

function renderMarkdownToHTML(markdown: any) {
  // This is ONLY safe because the output HTML
  // is shown to the same user, and because you
  // trust this Markdown parser to not have bugs.
  const renderedHTML = md.render(markdown);
  return { __html: renderedHTML };
}

const NewDetail = async ({ params }: { params: { type: string; slug: string } }) => {
  const articles = await getArticles({ slug: params.slug }, 0, 1);
  let news: any = {};
  let markup: any = '';
  if (articles.length > 0) {
    news = articles[0];
    markup = renderMarkdownToHTML(news.attributes.content);
  }

  const relatedArticles = await getArticles({ tag: news.attributes.tag }, 0, 4);

  return (
    <>
      <ScrollToTop />
      <Navbar isHome={false}></Navbar>
      <div className={styles.newsWrapper}>
        <div className={styles.block1}>
          <Breadcrumb
            items={[
              { text: params.type == 'news' ? 'ข่าวประชาสัมพันธ์' : 'บทความ', link: `/articles/${params.type}` },
              { text: `${news.attributes.title}` },
            ]}
          ></Breadcrumb>
        </div>
        <div className={styles.block2}>
          <div className={styles.bodyWraper}>
            <h1 className={styles.newTitle}>{news.attributes.title}</h1>
            <p className={styles.createDate}>{news.attributes.createDate}</p>
            <div>
              <span className="bg-indigo-100 text-indigo-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded-full dark:bg-indigo-900 dark:text-indigo-300">
                {news.attributes.tag}
              </span>
            </div>
            <div className={styles.contentWraper}>
              <div className={styles.imgWrapper}>
                <Image
                  src={getBackendSeoMedia(news.attributes.feature_image?.data?.attributes?.url) || ''}
                  alt=""
                  fill
                />
              </div>
              <p className={styles.content} dangerouslySetInnerHTML={markup}></p>
            </div>
          </div>
        </div>
        <div className={styles.block3}>
          <div className={styles.wrapper}>
            <div className={styles.header}>แนะนำสำหรับคุณ</div>
            <div className={styles.slideWraper}>
              <ArticleCardList
                articleType={news.attributes.type}
                hideTitle={true}
                hideSeeAll={true}
                articles={relatedArticles}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewDetail;
