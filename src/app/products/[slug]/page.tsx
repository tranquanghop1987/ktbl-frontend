import ProductBaner from '@/app/shared/widgets/ProductBaner';
import styles from './styles.module.css';
import ProductForm from '../../shared/widgets/ProductForm';
import ProductFAQ from '@/app/shared/widgets/ProductFAQ';

const Home = () => {
  return (
    <main className={styles.pageProduct}>
      <div>
        <ProductBaner />
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
