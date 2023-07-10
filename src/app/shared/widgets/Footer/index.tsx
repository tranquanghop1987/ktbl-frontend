import styles from './styles.module.scss';
import Link from 'next/link';
import ActiveCSS from '@/uikit/atoms/ActiveCss';
import Image from 'next/image';

const Footer = ({
  telephone = '02 407 1555',
  address = `591 อาคารสมัชชาวานิช 2 (UBCII) ชั้น 2
  ถนนสุขุมวิท แขวงคลองตันเหนือ เขตวัฒนา กรุงเทพฯ
  10110`,
  facebook_page = '@KTBL',
  copyright = '© 2566 บริษัท กรุงไทยธุรกิจลีสซิ่ง จำกัด (มหาชน)',
}: {
  telephone?: string;
  address?: string;
  facebook_page?: string;
  copyright?: string;
}) => {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.footerContent}>
          <div
            className={` container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-6 xl:md:grid-cols-6 content-center sm:gap-5 md:gap-5 xl:gap-5`}
          >
            <div className="relative">
              <h3 className={styles.footerTitlePanel}>ผลิตภัณฑ์กรุงไทยธุรกิจลีสซิ่ง</h3>
              <ActiveCSS className={styles.active} />
              <ul className={styles.footerPanel}>
                <li>
                  <Link href={'#'}>สินเชื่อรถบรรทุก รถหัวลาก และอุปกรณ์ต่อพ่ว</Link>
                </li>
                <li>
                  <Link href={'#'}>สินเชื่อเครื่องจักรก่อสร้าง (ที่จดทะเบียนกรมการขนส่ง)</Link>
                </li>

                <li>
                  <Link href={'#'}>สินเชื่อรถกระบะ และรถยนต์นั่ง 4 ล้อ ทุกประเภท</Link>
                </li>

                <li>
                  <Link href={'#'}>สินเชื่อรถยนต์มือสอง KTC พี่เบิ้ม</Link>
                </li>

                <li>
                  <Link href={'#'}>สินเชื่อรถแลกเงิน KTC พี่เบิ้ม</Link>
                </li>
              </ul>
            </div>
            <div className="relative">
              <h3 className={styles.footerTitlePanel}>บริการ</h3>
              <ActiveCSS className={styles.active} />
              <ul className={styles.footerPanel}>
                <li>
                  <Link href={'#'}>บริการด้านการประกันภัย</Link>
                </li>
                <li>
                  <Link href={'#'}>บริการด้านอื่น ๆ</Link>
                </li>
                <li>
                  <Link href={'#'}>โปรโมชั่น</Link>
                </li>
                <li>
                  <Link href={'#'}>อัตราดอกเบี้ย ค่า</Link>
                </li>
                <li>
                  <Link href={'#'}>ช่องทางการชำระเงิน</Link>
                </li>
              </ul>
            </div>
            <div className="relative">
              <h3 className={styles.footerTitlePanel}>ข่าวประชาสัมพันธ์ /บทความ</h3>
              <ActiveCSS className={styles.active} />
              <ul className={styles.footerPanel}>
                <li>
                  <Link href={'#'}>วิสัยทัศน์ / พันธกิจ</Link>
                </li>
                <li>
                  <Link href={'#'}>ความเป็นมา</Link>
                </li>
                <li>
                  <Link href={'#'}>โครงสร้างองค์กร</Link>
                </li>
                <li>
                  <Link href={'#'}>คณะกรรมการบริษัท</Link>
                </li>
                <li>
                  <Link href={'#'}>ผู้บริหารของบริษัท </Link>
                </li>
                <li>
                  <Link href={'#'}>นักลงทุนสัมพันธ์</Link>
                </li>
                <li>
                  <Link href={'#'}>การกำกับดูแลกิจการ</Link>
                </li>
                <li>
                  <Link href={'#'}>ร่วมงานกับเรา</Link>
                </li>
              </ul>
            </div>
            <div className="relative">
              <h3 className={styles.footerTitlePanel}>ผลิตภัณฑ์กรุงไทยธุรกิจลีสซิ่ง</h3>{' '}
              <ActiveCSS className={styles.active} />
              <ul className={styles.footerPanel}>
                <li>
                  <Link href={'#'}>ข่าวประชาสัมพันธ์</Link>
                </li>
                <li>
                  <Link href={'#'}>รายการทรัพย์สินรอการขาย</Link>
                </li>
                <li>
                  <Link href={'#'}>บทความ</Link>
                </li>
              </ul>
            </div>
            <div className={styles.logoFooter}>
              <Link href="/">
                <Image src="/assets/images/final-KTBL-light blue 2.png" alt="" width={280} height={100} />{' '}
              </Link>
              <div className={styles.info}>
                <h3>ติดต่อเรา </h3>
                <div className={`block sm:block md:hidden xl:hidden`}>
                  <div className={`flex justify-center align-center`}>
                    <img src="/assets/icons/phone.svg" alt=""></img>
                    <Link href={'#'} className={styles.phone}>
                      <span className={styles.telephone}>{telephone}</span>
                    </Link>
                    <span className={styles.divide}> &nbsp; </span>

                    <Link href={'#'}>
                      <img src="/assets/icons/facebook.svg" alt=""></img>
                    </Link>
                  </div>
                  <div className={styles.address}>
                    <Link href={'#'}>{address}</Link>
                  </div>
                </div>
                <div className={`hidden sm:hidden md:block xl:block`}>
                  <ul>
                    <li>
                      <img src="/assets/icons/phone.svg" alt=""></img>
                      <Link href={'#'} className={styles.phone}>
                        {telephone}
                      </Link>
                    </li>
                    <li>
                      <img src="/assets/icons/facebook.svg" alt=""></img>
                      <Link href={'#'}>{facebook_page}</Link>
                    </li>
                    <li>
                      <img src="/assets/icons/location.svg" alt=""></img>
                      <Link href={'#'}>{address}</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.company}>{copyright}</div>
    </>
  );
};
export default Footer;
