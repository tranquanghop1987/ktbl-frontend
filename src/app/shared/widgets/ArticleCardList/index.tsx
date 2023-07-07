'use client';
import CardItem from '@/uikit/atoms/CardItem';
import styles from './styles.module.scss';
import '../../../assets/css/slick.css';
import '../../../assets/css/slick-theme.css';
import { getBackendSeoMedia } from '@/lib/api-helper';
import { formatDate } from '@/app/shared/utils/date';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import Slider from 'react-slick';

const listArt = (articles: any) => {
  return articles.map((press: any, index: any) => {
    const seoImgUrl = getBackendSeoMedia(press.attributes.feature_image?.data?.attributes?.url);
    const humanCreatedDate = formatDate(press.attributes.publishedAt);

    return (
      <Link className={styles.newDetail} key={index} href={`/articles/${press.attributes.type}/${press.attributes.slug}`}>
        <CardItem
          class={'items'}
          imageUrl={seoImgUrl}
          tag={press.attributes.tag}
          description={press.attributes.description}
          createDate={humanCreatedDate}
        />
      </Link>
    );
  });
};

/**
 *  Section UI
 */
const ArticleCardList = ({
  articleType,
  articles,
  headTitle,
  hideTitle,
  hideSeeAll,
}: {
  articleType: string;
  articles: any[];
  headTitle?: string;
  hideTitle?: boolean;
  hideSeeAll?: boolean;
}) => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: '-100px 0px',
  });

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
        {hideTitle ? null : <div className={styles.title}>{headTitle}</div>}
        {hideSeeAll ? null : (
          <Link href={`articles/${articleType}`} style={{ color: '#0080BD', border: 'none' }}>
            ดูทั้งหมด
          </Link>
        )}
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
