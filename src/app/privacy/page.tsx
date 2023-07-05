import styles from "./styles.module.scss";
import Navbar from "@/app/shared/widgets/Navbar";
import Image from "next/image";

const PrivacyPage = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <div>
          <Navbar isHome={false}></Navbar>
        </div>

        <section className={styles.mainContent}>
          <div>
            <h1 className={styles.title}>นโยบายต่างๆ เกี่ยวกับการกำกับดูแลด้านธรรมมาภิบาล</h1>
            <p className={styles.desc}>desctiop desctiop desctiop desctiop </p>
            <ul className={styles.list}>
              <li>
                <a href="" className={styles.link}>
                  <Image src={`/assets/images/pdf.png`} alt={"pfg"} width={16} height={16} />
                  <span> File PDF 1</span>
                </a>
              </li>
            </ul>
          </div>
        </section>
      </div>

    </>
  );
};
export default PrivacyPage;
