'use client';
import CardItem from '@/uikit/atoms/CardItem';
import { Button } from 'antd';
import styles from './styles.module.css';
import '../../../assets/css/slick.css';
import '../../../assets/css/slick-theme.css';
import Loader from '@/uikit/atoms/Loader';
import { getStrapiMedia } from '@/app/shared/utils/api-helper';
import { formatDate } from '@/app/shared/utils/date';
import { useFindArticles } from '@/app/shared/modules/article/usecase';
//import {itemList} from "@/app/shared/modules/article/mock";

/**
 *  Section UI
 */
const ArticleCardList = ({articleType}:{articleType: string}) => {
  const ARTICLE_LIMIT = 4;
  const { articles, isLoading } = useFindArticles(articleType, ARTICLE_LIMIT);

  // const mapDto = (articles) => {
  //   return articles.map(article => {
  //     const featureImage = article.attributes.featureImage.data.attributes;
  //     const articleInfo = article.attributes;
  //     console.log(article)
  //
  //     return {
  //       type: 'press',
  //       description: articleInfo.description,
  //       title: articleInfo.title,
  //       featureImage: {
  //         url: featureImage.url,
  //         altText: featureImage.altText,
  //       },
  //     }
  //   })
  // };

  if (isLoading) return <Loader />;

  return (
    <div className={styles.article}>
      <div className={styles.header}>
        <div className={styles.title}>บทความ</div>
        <Button style={{ color: '#0080BD' }}>ดูทั้งหมด</Button>
      </div>
      <div className={styles.allItems}>
        {articles.map((press, index) => {
          const seoImgUrl = getStrapiMedia(press.attributes.feature_image?.data?.attributes?.url);
          const humanCreatedDate = formatDate(press.attributes.publishedAt);

          return (
            <div className={styles.newDetail} key={index}>
              <CardItem
                imageUrl={seoImgUrl}
                tag={press.attributes.type}
                description={press.attributes.description}
                createDate={humanCreatedDate}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default ArticleCardList;
