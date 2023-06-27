'use client';
import styles from './style.module.css';
import { Row, Col } from 'antd';

const itemList = [
  {
    label: 'ประกันภัย',
    imageUrl: '/assets/images/ourServices_1.png',
  },
  {
    label: 'ต่อภาษี',
    imageUrl: '/assets/images/ourServices_1.png',
  },
  {
    label: 'โอนกรรมสิทธิ์',
    imageUrl: '/assets/images/ourServices_1.png',
  },
  {
    label: 'โปรโมชั่น',
    imageUrl: '/assets/images/ourServices_1.png',
  },
];

function OurServices() {
  return (
    <div className={styles.ourServices}>
      <div className={styles.title}>บริการของเรา</div>
      <Row className={styles.itemList}>
        {itemList.map((item, index) => {
          return (
            <Col key={index} sm={24} md={5} className={styles.items}>
              <div className={styles.itemLabel}>{item.label}</div>
              <img src={item.imageUrl} alt="" className={styles.itemImage} />
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default OurServices;
