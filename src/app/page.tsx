'use client';
import Navbar from '@/app/shared/widgets/Navbar';
import ArticleCardList from '@/app/shared/widgets/ArticleCardList';
import HomeProduct from '@/app/shared/widgets/Product';
import ScrollDown from '@/app/shared/widgets/ScrollDown';
import OurServices from '@/app/shared/widgets/Services';
import Vision from '@/app/shared/widgets/Vision';
import { useInView } from 'react-intersection-observer';

const Home = () => {
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: '-300px 0px',
  });
  return (
    <main style={{ position: 'relative' }}>
      <div className={`banner  ${inView ? 'banner-animation' : 'banner-animationOut'}`} ref={ref}>
        <Navbar isHome={true} />
        <ScrollDown />
        <div className="banner-image">
          <img className="fream1" src={'/assets/images/KTBL-logo2.png'} alt="" />
        </div>
      </div>

      <HomeProduct />
      <OurServices />
      <Vision />
      <ArticleCardList articleType="news" />
      <ArticleCardList articleType="press" />
    </main>
  );
};

export default Home;
