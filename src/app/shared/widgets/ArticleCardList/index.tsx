'use client';
import CardItem from '@/uikit/atoms/CardItem';
import { Button } from 'antd';
import styles from './styles.module.css';
import '../../../assets/css/slick.css';
import '../../../assets/css/slick-theme.css';
import {useCallback, useEffect, useState} from "react";
import {getArticles} from "@/app/shared/modules/article/repo";
import Loader from "@/uikit/atoms/Loader";
import {getStrapiMedia} from "@/app/shared/utils/api-helper";
//import {itemList} from "@/app/shared/modules/article/mock";


/**
 *  Section UI
 */
const ArticleCardList = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const ARTICLE_LIMIT = 4;

  const fetchArtilePress = useCallback(async () => {
    setLoading(true);
    try {
      const filters = {
        'type': 'press',
      }
      const articles = await getArticles(filters, 0, ARTICLE_LIMIT);
      //const dtoArticles = mapDto(articles)
      setData(articles);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }, []);

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

  useEffect(()=> {
    fetchArtilePress();
  }, [])

  if (isLoading) return <Loader />;

  return (
    <div className={styles.article}>
        <div className={styles.header}>
          <div className={styles.title}>บทความ</div>
          <Button style={{ color: '#0080BD' }} onClick={() => {}}>
            ดูทั้งหมด
          </Button>
        </div>
          <div className={styles.allItems}>
            {data.map((press, index) => {
              const seoImgUrl = getStrapiMedia(
                press.attributes.feature_image?.data?.attributes?.url
              )
              return (
                <div className={styles.newDetail} key={index}>
                  <CardItem
                    imageUrl={seoImgUrl}
                    tag={press.attributes.type}
                    description={press.attributes.description}
                  />
                </div>
              )
            })}
          </div>
      </div>
  );
}
export default ArticleCardList;
