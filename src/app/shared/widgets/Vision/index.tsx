'use client';
import { Button } from 'antd';
import styles from './styles.module.scss';
import { useInView } from 'react-intersection-observer';
function Vision() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: '-400px 0px',
  });
  return (
    <div className={styles.vision + ` w-full ${inView ? ` ${styles.animation}` : ` ${styles.animationOut}`}`} ref={ref}>
      <div className={styles.text}>
        <div className={styles.title}>
          <h2 className={styles.firstTitle}>GROWING TOGETHER</h2>
          <h2 className={styles.secondTitle}>ก้าวไกล ไปกับคุณ</h2>
        </div>
        <div className={styles.content}>
          มุ่งมั่นพัฒนาศักยภาพของบุคลากร และสร้างการบริการที่มีคุณค่า เพื่อสนับสนุนการเติบโต และความมั่งคั่งแก่ลูกค้า
          สร้างคุณภาพที่ดีขึ้นแก่สังคม และสร้างผลตอบแทนที่ดีอย่างยั่งยืนแก่ผู้ถือหุ้น
        </div>
        <Button className={styles.btnAboutCompany} ghost>
          เกี่ยวกับบริษัท
        </Button>
      </div>
      {/* <Image src="/assets/images/vision-left.png" width={500} height={500} alt="Picture of the author" />
      <Image src="/assets/images/vision-right.png" width={500} height={500} alt="Picture of the author" />
      <Image src="/assets/images/Vector 5.png" width={500} height={500} alt="Picture of the author" /> */}

      <div className={styles.visionBackgroundLeft}></div>
      <div className={styles.visionBackgroundRight}></div>
    </div>
  );
}

export default Vision;
