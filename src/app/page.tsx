import Navbar from '@/app/shared/widgets/Navbar';
import ArticleCardList from '@/app/shared/widgets/ArticleCardList';
import ArticleCardSlide from '@/app/shared/widgets/ArticleCardSlide';
import HomeProduct from '@/app/shared/widgets/Product';
import ScrollDown from '@/app/shared/widgets/ScrollDown';
import OurServices from '@/app/shared/widgets/Services';
import Vision from '@/app/shared/widgets/Vision';
import { items } from '@/app/shared/modules/global';

const Home = () => {
  return (
    <main style={{ position: 'relative' }}>
      <div className="banner">
        <Navbar isHome={true} data={items} />
        <ScrollDown />
      </div>

      <HomeProduct />
      <OurServices />
      <Vision />
      <ArticleCardSlide />
      <ArticleCardList />
    </main>
  );
};

export default Home;
