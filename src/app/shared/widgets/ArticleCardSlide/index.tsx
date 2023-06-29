'use client';
import CardItem from '@/uikit/atoms/CardItem';
import { Button } from 'antd';
import styles from './styles.module.css';
import '../../../assets/css/slick.css';
import '../../../assets/css/slick-theme.css';
import Slider from 'react-slick';
import { itemList } from '@/app/shared/modules/article/mock';
import { useCallback, useEffect, useState } from 'react';
import { getArticles } from '@/app/shared/modules/article/repo';
import Loader from '@/uikit/atoms/Loader';

// const showItem = Math.round(globalThis?.window?.screen.width / 305) - 1;
const showItem = 4;
const settings = {
  infinite: false,
  slidesToShow: showItem < 2 ? 1 : showItem,
  slidesToScroll: 1,
  autoplaySpeed: 2000,
  draggable: false,
};

/**
 *  Section UI
 */

const ArticleCardList = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);

  const fetchArtilePress = useCallback(async () => {
    setLoading(true);
    try {
      const filters = {
        type: 'news',
      };
      const articles = await getArticles(filters);
      //const dtoArticles = mapDto(articles)
      setData(articles);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
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

  useEffect(() => {
    fetchArtilePress();
  }, []);

  if (isLoading) return <Loader />;
  return (
    <div className={styles.article}>
      <div className={styles.header}>
        <div className={styles.title}>บทความ</div>
        <Button style={{ color: '#0080BD', border: 'none' }}>กด</Button>
      </div>
      <Slider {...settings}>
        {data &&
          itemList.map((article, index) => (
            <div className={styles.newDetail} key={index}>
              <CardItem
                imageUrl={article.imageUrl}
                tag={article.tag}
                createDate={article.createDate}
                description={article.description}
              />
            </div>
          ))}
      </Slider>
    </div>
  );
};
export default ArticleCardList;
