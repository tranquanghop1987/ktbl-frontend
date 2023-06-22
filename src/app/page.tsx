import Navbar from '@/app/shared/widgets/Navbar';
import News from '@/app/shared/widgets/News';
import HomeProduct from '@/app/shared/widgets/Product';
import ScrollDown from '@/app/shared/widgets/ScrollDown';
import OurServices from '@/app/shared/widgets/Services';
import Vision from '@/app/shared/widgets/Vision';

const Home = () => {
  return (
    <main style={{ position: 'relative' }}>
      <div className="banner">
        <Navbar />
        <ScrollDown />
      </div>
      <div>
        <HomeProduct />
      </div>
      <div>
        <OurServices />
      </div>
      <div>
        <Vision />
      </div>
      <div>
        <News />
      </div>
    </main>
  );
};

export default Home;
