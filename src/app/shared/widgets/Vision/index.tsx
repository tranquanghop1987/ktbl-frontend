'use client';
import { Button } from 'antd';
import styles from './styles.module.css';
function Vision() {
  return (
    <div className={styles.vision}>
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
    </div>
  );
}

export default Vision;
