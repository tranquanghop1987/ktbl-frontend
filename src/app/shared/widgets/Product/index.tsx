'use client';
import styles from './style.module.scss';
import PrimaryButton from '../Button';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useInView } from 'react-intersection-observer';

const HomeProduct = () => {
  const [active, setActive] = useState<string>('p1');
  const [page, setPage] = useState<number>(0);
  const router = useRouter();

  const items = [
    { label: 'รถบรรทุกและอุปกรณ์ต่อพ่วง', key: 'p1' },
    { label: 'เครื่องจักรก่อสร้าง (จดทะเบียน)', key: 'p2' },
    { label: 'รถยนต์นั่ง 4 ล้อ', key: 'p3' },
    { label: 'รถยนต์มือสอง', key: 'p4' },
  ];

  const productDetail = [
    {
      title: 'สินเชื่อเช่าซื้อรถบรรทุกและอุปกรณ์ต่อพ่วง',
      description: 'รถบรรทุกใหม่ รถบรรทุกใช้แล้ว  Sales and Hire Purchase Back / Refinance',
      idProduct: '1',
      titleBtn: 'รายละเอียดผลิตภัณฑ์',
      backgroudLink: '/assets/images/product/bg_1.png',
      imaggleft: '/assets/images/product/right_1.png',
      imageRight: '/assets/images/product/left_1.png',
      stylesLeft: { transform: 'translate(-12%, -24%)' },
      stylesRight: { display: 'none' },
    },
    {
      title: 'สินเชื่อเช่าซื้อเครื่องจักร',
      description: 'รเครื่องจักรใหม เครื่องจักรใช้แล้ว  Sales and Hire Purchase Back / Refinance',
      idProduct: '2',
      titleBtn: 'รายละเอียดผลิตภัณฑ์',
      backgroudLink: '/assets/images/product/bg_2.png',
      imaggleft: '/assets/images/product/left_2.png',
      imageRight: '/assets/images/product/right_2.png',
      stylesLeft: { transform: 'translate(-27%, -52%)' },
      stylesRight: { transform: 'translate(21%, -65%)' },
    },
    {
      title: ' สินเชื่อเช่าซื้อรถกระบะ และรถยนต์นั่ง 4 ล้อ ทุกประเภท',
      description:
        'รถกระบะ และรถยนต์นั่ง 4 ล้อ ใหม่ รถกระบะ และรถยนต์นั่ง 4 ล้อ ใช้แล้ว สินเชื่อ Sales and Hire Purchase Back / Refinance',
      idProduct: '3',
      titleBtn: 'รายละเอียดผลิตภัณฑ์',
      backgroudLink: '/assets/images/product-bg.png',
      imaggleft: '/assets/images/product-info-car-1.png',
      imageRight: '/assets/images/product-info-car-2.png',
    },
    {
      title: 'สินเชื่อ KTC พี่เบิ้ม รถยนต์มือสอง',
      description: 'อนุมัติไว รับรถทันใจ ไม่ต้องมีผู้ค้ำ',
      idProduct: '4',
      titleBtn: 'รายละเอียดผลิตภัณฑ์',
      backgroudLink: '/assets/images/product/bg_4.png',
      imaggleft: '/assets/images/product/left_4.png',
      imageRight: '/assets/images/product/right_4.png',
      stylesLeft: { transform: 'translate(-25%, -35%)' },
      stylesRight: { transform: 'translate(20%, -52%)' },
    },
  ];
  const handleActive = (key: string, pageNum: number) => () => {
    setActive(key);
    setPage(pageNum);
  };
  const gotoPage = (idProduct: string) => () => {
    router.push(`products/${idProduct}`);
  };

  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: '-300px 0px',
  });

  return (
    <>
      <div
        className={styles.hproduct + ` w-full ${inView ? ` ${styles.animation}` : ` ${styles.animationOut}`}`}
        ref={ref}
        style={{ backgroundImage: `url('${productDetail[page].backgroudLink}')`, transition: 'ease 0.2' }}
        id="product"
      >
        <div className={styles.carLeft} style={productDetail[page].stylesLeft}>
          <img src={productDetail[page].imaggleft} alt="" />
        </div>
        <div className={styles.carRight} style={productDetail[page].stylesRight}>
          <img src={productDetail[page].imageRight} alt="" />
        </div>
        <div className={styles.productInfoTitle + ` flex-column align-center`}>
          <div className={styles.productTitle}>ผลิตภัณฑ์สินเชื่อ</div>
          <div className={styles.productList} style={{ margin: '8px' }}>
            {items.map((item, index) => {
              return (
                <div key={item.key}>
                  <div onClick={handleActive(item.key, index)} className={active === item.key ? styles.active : ''}>
                    {item.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={`${styles.content} text-center`}>
          <div className={styles.contentTitle}>{productDetail[page].title}</div>
          <div className={styles.contentDescription + ' .mt-8'}>{productDetail[page].description}</div>
          <div className="flex justify-content-center mt-64">
            <PrimaryButton text="รายละเอียดผลิตภัณฑ์" onClick={gotoPage(productDetail[page].idProduct)}></PrimaryButton>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeProduct;
