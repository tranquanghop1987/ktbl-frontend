import Navbar from "@/app/shared/widgets/Navbar";
import ProductBaner from "@/app/shared/widgets/ProductBaner";
import styles from "./styles.module.css";
import ProductForm from "../../shared/widgets/ProductForm";
const Home = () => {
  return (
    <main className={styles.pageProduct}>
      <Navbar isHome={false} />
      <div>
        <ProductBaner />
      </div>
      <div>
        <ProductForm />
      </div>
    </main>
  );
};

export default Home;
