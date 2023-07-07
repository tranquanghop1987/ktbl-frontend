'use client';
import ArticleCardList from '@/app/shared/widgets/ArticleCardList';
import HomeProduct from '@/app/shared/widgets/Product';
import ScrollDown from '@/app/shared/widgets/ScrollDown';
import OurServices from '@/app/shared/widgets/Services';
import Vision from '@/app/shared/widgets/Vision';
import { useInView } from 'react-intersection-observer';
import { useFindArticles } from "@/app/shared/modules/article/usecase";

const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: '-300px 0px',
  });

  const ARTICLE_LIMIT = 4;
  const { articles: news  } = useFindArticles('news', ARTICLE_LIMIT);
  const { articles: presses } = useFindArticles('press', ARTICLE_LIMIT);

  return (
    <main style={{ position: 'relative', paddingBottom: '80px' }}>
      <div className={`banner  ${inView ? 'banner-animation' : 'banner-animationOut'}`} ref={ref}>
        <ScrollDown />
      </div>

      <HomeProduct />
      <OurServices />
      <Vision />
      <ArticleCardList articleType="news" headTitle={'ข่าวประชาสัมพันธ์'} articles={news} />
      <ArticleCardList articleType="press" headTitle={`บทความ`} articles={presses}/>
    </main>
  );
};

export default Home;
