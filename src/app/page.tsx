import Navbar from "@/widgets/Navbar";
import HomeProduct from "@/widgets/Product";
import ScrollDown from "@/widgets/ScroolDown";
import OurServices from "@/widgets/Services";
import Vision from "@/widgets/Vision";

const Home = () => {
  return (
    <main style={{ position: "relative" }}>
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
    </main>
  );
};

export default Home;
