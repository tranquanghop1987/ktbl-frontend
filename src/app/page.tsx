import Navbar from '@/app/shared/widgets/Navbar';
import ArticleCardList from '@/app/shared/widgets/ArticleCardList';
import HomeProduct from '@/app/shared/widgets/Product';
import ScrollDown from '@/app/shared/widgets/ScrollDown';
import OurServices from '@/app/shared/widgets/Services';
import Vision from '@/app/shared/widgets/Vision';

const Home = () => {
  return (
    <main style={{ position: 'relative' }}>
      <div className="banner">
        <Navbar isHome={true} />
        <ScrollDown />
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
