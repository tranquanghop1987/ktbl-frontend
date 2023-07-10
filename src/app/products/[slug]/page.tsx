import ProductBaner from '@/app/shared/widgets/ProductBaner';
import styles from './styles.module.css';
import ProductForm from '../../shared/widgets/ProductForm';
import ProductFAQ from '@/app/shared/widgets/ProductFAQ';
import AppplicationDetail from '@/app/shared/widgets/ApplicationDetail/ApplicationDetail';

const Home = () => {
  return (
    <main className={styles.pageProduct}>
      <div>
        <ProductBaner />
      </div>
      <div>
        <AppplicationDetail />
      </div>
      <div>
        <ProductForm />
      </div>
      <div>
        <ProductFAQ />
      </div>
    </main>
  );
};

export default Home;
