import styles from './styles.module.scss';
import Image from 'next/image';
import Navbar from '@/app/shared/widgets/Navbar';

const AboutUs = () => {

  return (
    <>
      <Navbar isHome={false}></Navbar>
      <section className={styles.bannerWrapper + ' flex-column'}>
        <header className={'flex-column justify-center flex-1 flex-grow-1'}>
          <h1 className={'text-6xl mb-5'}>เกี่ยวกับบริษัท</h1>
          <p className={'text-xl'}>
            GROWING TOGETHER ก้าวไกล ไปกับคุณ <br />
            มุ่งมั่นพัฒนาศักยภาพของบุคลากรและสร้างการบริการที่มีคุณค่า สร้างคุณภาพที่ดีขึ้น แก่. <br />
            สังคม และสร้างผลตอบแทนที่ดีอย่างยั่งยืนแก่ผู้ถือหุ้น
          </p>
        </header>
        <Image fill alt={'banner'} src={'/assets/images/about-us-banner.jpg'} />
      </section>
      <section className={'container mx-auto pt-12 mt-12'}>
        <div className={' grid grid-cols-2'}>
         <div className={'pr-10'}>
           <h1 className={'text-2xl underline mb-3 color-primary'}>บริษัท กรุงไทยธุรกิจลีสซิ่ง จำกัด</h1>
           <p className={'text-justify'}>
             บริษัท กรุงไทยธุรกิจลีสซิ่ง จำกัด ก่อตั้งเมื่อเดือนตุลาคม 2548 เมื่อวันที่ 3 พฤศจิกายน 2557 มีทุนจดทะเบียน
             1,000 ล้านบาท เมื่อวันที่ 21 พฤษภาคม 2564 โครงสร้างผู้ถือหุ้นของบริษัท โดย บมจ.บัตรกรุงไทย ถือหุ้นสัดส่วน
             75.05% และ บมจ.ธนาคารกรุงไทย ถือหุ้นสัดส่วน 24.95% บริษัทมุ่งให้บริการด้านการเงิน ที่ครบวงจร
             เพื่อตอบสนองความต้องการของลูกค้ากลุ่มต่างๆ ทั้งบุคคลธรรมดาและนิติบุคคล
             การดำเนินธุรกิจให้การสนับสนุนทางการเงินประเภท บริการเช่าซื้อ (Hire Purchase) บริการเช่าแบบลีสซิ่ง (Financial
             Lease)
             ด้วยทีมงานและผู้บริหารที่พร้อมด้วยประสบการณ์ความมุ่งมั่น จริงใจ
             ยึดมั่นและมุ่งเน้นที่จะให้บริการเพื่อสนับสนุน และตอบสนองความต้องการของลูกค้าให้มีความสะดวกสบาย
             ในฐานะพันธมิตรในการดำเนินธุรกิจที่จะก้าวไกล ไปกับคุณ (GROWING TOGETHER)
           </p>
         </div>
          <div className={'relative'}>
            <Image objectFit={'cover'} fill className={'rounded-2xl'} alt={'banner'} src={'/assets/images/about-pic-1.jpg'} />
          </div>
        </div>
      </section>

      <section className={'container mx-auto pt-12 mt-12'}>
        <div className={' grid grid-cols-2'}>
          <div className={'relative'}>
            <Image objectFit={'cover'} fill className={'rounded-2xl'} alt={'banner'} src={'/assets/images/about-pic-1.jpg'} />
          </div>
          <div className={'pl-10'}>
            <h1 className={'text-2xl underline mb-3 color-primary'}>Mission</h1>
            <ul>
              <li>•   ดูแลรักษาคุณภาพสินทรัพย์และหนี้สินของบริษัท</li>
              <li>•   ให้บริการและคำแนะนำที่มีคุณค่าแก่ลูกค้า</li>
              <li>•   ดูแลรักษาผลประโยชน์ให้แก่พนักงาน</li>
              <li>•   สร้างผลตอบแทนที่ดีให้แก่ผู้ถือหุ้น</li>
            </ul>
          </div>
        </div>
      </section>

      <section className={'container mx-auto pt-12 mt-12'}>
        <div className={' grid grid-cols-2'}>
          <div className={'pr-10 text-right'}>
            <h1 className={'text-2xl underline mb-3 color-primary'}>Core Value</h1>
            <ul>
              <li>I    :  Integrity (ซื่อสัตย์)</li>
              <li>C   :  Creativity (สร้างสรรค์)</li>
              <li>E   :  Efficiency (สำเร็จ)</li>
              <li>C   :  Collaboration (ร่วมมือ)</li>
            </ul>
          </div>
          <div className={'relative'}>
            <Image objectFit={'cover'} fill className={'rounded-2xl'} alt={'banner'} src={'/assets/images/about-pic-1.jpg'} />
          </div>
        </div>
      </section>

      <div className={'pb-12'}></div>
    </>
  );
};
export default AboutUs;