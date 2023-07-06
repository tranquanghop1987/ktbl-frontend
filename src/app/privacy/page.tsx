import styles from './styles.module.scss';
import Navbar from '@/app/shared/widgets/Navbar';
import Image from 'next/image';

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
            <p className={styles.desc}>นโยบายต่างๆ เกี่ยวกับการกำกับดูแลด้ </p>
            <ul className={styles.list}>
              <li>
                <a target={'_blank'} href="https://www.africau.edu/images/default/sample.pdf" className={styles.link}>
                  <Image src={`/assets/images/pdf.png`} alt={'pfg'} width={16} height={16} />
                  <span> File PDF 1</span>
                </a>
              </li>
              <li>
                <a target={'_blank'} href="https://www.africau.edu/images/default/sample.pdf" className={styles.link}>
                  <Image src={`/assets/images/pdf.png`} alt={'pfg'} width={16} height={16} />
                  <span> File PDF 2</span>
                </a>
              </li>
              <li>
                <a target={'_blank'} href="https://www.africau.edu/images/default/sample.pdf" className={styles.link}>
                  <Image src={`/assets/images/pdf.png`} alt={'pfg'} width={16} height={16} />
                  <span> File PDF 3</span>
                </a>
              </li>
              <li>
                <a target={'_blank'} href="https://www.africau.edu/images/default/sample.pdf" className={styles.link}>
                  <Image src={`/assets/images/pdf.png`} alt={'pfg'} width={16} height={16} />
                  <span> File PDF 4</span>
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
