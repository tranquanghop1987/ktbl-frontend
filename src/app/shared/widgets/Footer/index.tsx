import styles from './styles.module.css';
import Link from 'next/link';
import ActiveCSS from '@/uikit/atoms/ActiveCss';

const Footer = ({
  telephone,
  address,
  facebook_page,
  copyright,
}: {
  telephone: string;
  address?: string;
  facebook_page?: string;
  copyright?: string;
}) => {
  return (
    <>
      <div className={styles.footer + ' mx-auto'}>
        <div className={` container grid md:grid-cols-5 content-center`}>
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
          <div className={styles.logoFooter}>
            <Link href="/">
              <img src="/assets/images/logo-footer.svg" alt="" />{' '}
            </Link>
            <h3>ติดต่อเรา </h3>
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
      <div className={styles.company}>{copyright}</div>
    </>
  );
};
export default Footer;
