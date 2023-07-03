'use client';
import CardItem from '@/uikit/atoms/CardItem';
import styles from './styles.module.scss';
import '../../../assets/css/slick.css';
import '../../../assets/css/slick-theme.css';
import Loader from '@/uikit/atoms/Loader';
import { getBackendSeoMedia } from '@/lib/api-helper';
import { formatDate } from '@/app/shared/utils/date';
import { useFindArticles } from '@/app/shared/modules/article/usecase';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';
//import {itemList} from "@/app/shared/modules/article/mock";

const listArt = (articles: any) => {
  return articles.map((press: any, index: any) => {
    const seoImgUrl = getBackendSeoMedia(press.attributes.feature_image?.data?.attributes?.url);
    const humanCreatedDate = formatDate(press.attributes.publishedAt);

    return (
      <div className={styles.newDetail} key={index}>
        <CardItem
          class={'items'}
          imageUrl={seoImgUrl}
          tag={press.attributes.tag}
          description={press.attributes.description}
          createDate={humanCreatedDate}
        />
      </div>
    );
  });
};

/**
 *  Section UI
 */
const ArticleCardList = ({ articleType, headTitle }: { articleType: string; headTitle?: string }) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px',
  });

  const ARTICLE_LIMIT = 4;
  const { articles, isLoading } = useFindArticles(articleType, ARTICLE_LIMIT);

  if (isLoading) return <Loader />;

  const settings = {
    className: 'slideWraper',
    centerMode: true,
    infinite: false,
    slidesToShow: 1,
    speed: 500,
  };

  return (
    <div
      ref={ref}
      className={`container mx-auto ${styles.article} ${inView ? ` ${styles.animation}` : ` ${styles.animationOut}`}`}
    >
      <div className={styles.header}>
        <div className={styles.title}>{headTitle}</div>
        <Link href={'/#'} style={{ color: '#0080BD', border: 'none' }}>
          ดูทั้งหมด
        </Link>
      </div>
      <div className={`visible sm:hidden md:hidden lg:hidden xl:hidden`}>
        <Slider {...settings}>{listArt(articles)}</Slider>
      </div>
      <div className={`hidden sm:block md:block lg:block xl:block`}>
        <div className={`grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-4 `}>{listArt(articles)}</div>
      </div>
    </div>
  );
};
export default ArticleCardList;
