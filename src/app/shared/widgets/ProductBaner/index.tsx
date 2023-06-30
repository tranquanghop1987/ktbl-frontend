'use client';
import { Breadcrumb } from 'antd';
import styles from './styles.module.css';
import PrimaryButton from '../Button';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';

function ProductBaner() {
  const { ref, inView } = useInView({
    triggerOnce: false,
    rootMargin: '-300px 0px',
  });

  const detailList = [
    {
      title: 'อนุมัติง่าย รู้ผลไว ไม่ต้องค้ำประกัน',
      content:
        'เงื่อนไขของการเช่าที่สามารถยืดหยุ่นได้ตามประเภทธุรกิจ และกระบวนการในการพิจารณา รวดเร็วไม่ยุ่งยาก เป็นทางเลือกใหม่ ไม่ต้องใช้หลักทรัพย์ในการค้ำประกัน',
    },
    {
      title: 'ค่าเช่าคงที่ตลอดอายุสัญญา',
      content: 'ลดความเสี่ยงจากความผันผวนของอัตราดอกเบี้ย ช่วยเพิ่มประสิทธิภาพในการวางแผน ทางการเงินในอนาคตของกิจการ',
    },
    {
      title: 'ลดค่าใช้จ่ายภาษี',
      content: 'ผลประโยชน์ทางด้านภาษีสามารถใช้เป็นค่าใช้จ่ายในการคำนวนภาษีเงินได้นิติบุคคล (เฉพาะสัญญาเช่าดำเนินงาน)',
    },
    {
      title: 'บริหารจัดการเงินทุนง่าย',
      content:
        'เพิ่มประสิทธิ์ภาพในการบริหารเงินทุนและกระแสเงินสด เป็นทางเลือกของแหล่งเงินทุน โดยที่ผู้เช่าสามารถเลี่ยงการลงทุนที่ต้องใช้เงินทุนจำนวนมากในการได้มาซึ่งทรัพย์สิน',
    },
  ];

  return (
    <div>
      <div className={styles.bnProduct}>
        <div className={`${styles.block} relative`}>
          <div>
            <Breadcrumb
              className={styles.breadcrumb}
              items={[
                {
                  title: 'หน้าแรก',
                },
                {
                  title: 'รถกระบะและรถยนต์นั่ง 4 ล้อทุกประเภท',
                },
              ]}
            />
          </div>
          <div className={styles.header}>บริการเช่าแบบลีสซิ่ง</div>
          <div>
            <h2>รถยนต์นั่ง 4 ล้อทุกประเภท</h2>
          </div>
          <div className={styles.description}>
            ผลิตภัณฑ์สินเชื่อเช่ารถกระบะ หรือรถยนต์นั่ง 4 ล้อทุกประเภทแบบลีสซิ่งเพื่อธุรกิจมีให้เลือกทั้ง
            รถใหม่และรถใช้แล้ว
          </div>
          <div className={styles.btnMobile}>
            <PrimaryButton text="สมัครผลิตภัณฑ์" className={styles.button} />
          </div>
        </div>

        <div className={styles.btnWeb}>
          <PrimaryButton text="สมัครผลิตภัณฑ์" className={styles.button} />
        </div>

        <div className={styles.blockItem}>
          <div className={styles.titleMobile}>
            <h3>รถยนต์นั่ง 4 ล้อทุกประเภท</h3>
          </div>
          <div className={`flex align-baseline gap-20 ${styles.item}`}>
            <div className="logo ">
              <img src="/assets/icons/new-car.svg" alt="" />
            </div>
            <div>
              <ul>
                <li className={styles.itemTitle}>
                  ทรัพย์สินใหม่ <Link href={''}>New Car </Link>
                </li>
                <li>1. ทรัพย์สินใหม่ที่ยังไม่ผ่านการใช้งาน</li>
                <li>2. ทรัพย์สินที่เคยมีการจดทะเบียนครั้งแรกมาแล้วไม่เกิน 6 เดือน</li>
              </ul>
            </div>
          </div>
          <div className={`flex align-baseline gap-20 ${styles.item}`}>
            <div className="logo">
              <img src="/assets/icons/new-car4.svg" alt="" />
            </div>
            <div>
              <ul>
                <li className={styles.itemTitle}>
                  ทรัพย์สินใช้แล้ว <Link href={''}>Used Car</Link>{' '}
                </li>
                <li>อายุรถไม่เกิน 9 ปี</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center ">
        <div className="container grid md:grid-cols-2 xs:grid-cols-1">
          <div className={styles.imageLeft}>
            <img src="/assets/images/illus.png" alt="" />
          </div>
          <div className={styles.contentRight}>
            <div className={styles.content}>
              <h2 className={styles.title}>การให้บริการเช่าแบบลีสซิ่ง</h2>
              เป็นการได้มาซึ่งสังหาริมทรัพย์ที่เป็นทรัพย์สินประเภททุนเป็นสินทรัพย์ในรูปแบบการเช่า
              สำหรับการลงทุนในทรัพย์สินเพื่อการใช้งานในกิจการ โดยผู้เช่า (Lessee) เป็นผู้เลือกทรัพย์สินที่
              ต้องการจากผู้ผลิต หรือผู้ขาย ผู้ให้เช่า (Lesser) เป็นผู้ชำระค่าทรัพย์สินนั้นให้แก่ผู้ผลิต หรือผู้ขาย
              ผู้เช่าผ่อนชำระเงินค่าทรัพย์ สินให้แก่ ผู้ให้เช่าตามสัญญา (กรรมสิทธิ์ทรัพย์สินเป็นของผู้ให้เช่า)
              การให้บริการนี้ถือเป็นสินเชื่อ ระยะปานกลาง หรือระยะยาว 3-5 ปี
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.productInfo}   ${inView ? styles.inView : styles.inOut}`} ref={ref}>
        <div className={styles.carMobile}>
          <img src="/assets/images/mobie_product.png" style={{ width: '100%', height: '25vh' }} alt="" />
        </div>

        <div className={`${styles.viewCar} container`}>
          <ul className={`${styles.viewText} flex-column gap-20`}>
            {detailList.map((item, index) => (
              <li key={index} className={`${styles.itemDetail}  `}>
                <img src="/assets/icons/checked.svg" alt="" className="mr-18" />
                <div>
                  <h2 className={styles.titleProduct}>{item.title}</h2>
                  <div className={`${styles.contentProduct} mt-4`}>{item.content}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <img className={styles.car2} src="/assets/images/product_car2.png" alt="" />
        <img className={styles.car1} src="/assets/images/product_car1.png" alt="" />
      </div>
    </div>
  );
}
export default ProductBaner;
