'use client';
import styles from './style.module.scss';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

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
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: '-300px 0px',
  });

  return (
    <div
      className={styles.ourServices + ` w-full ${inView ? ` ${styles.animation}` : ` ${styles.animationOut}`}`}
      ref={ref}
    >
      <div className={`container mx-auto`}>
        <div className={styles.title}>บริการของเรา</div>
        <div className={styles.itemList + ` grid grid-cols-1 gap-20 sm:grid-cols-2 md:grid-cols-4`}>
          {itemList.map((item, index) => {
            return (
              <div key={index} className={styles.items}>
                <Image fill objectFit={'cover'} src={item.imageUrl} alt="" />
                <div className={styles.overlay}></div>
                <div className={styles.itemLabel}>{item.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default OurServices;
