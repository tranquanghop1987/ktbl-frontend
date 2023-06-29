import styles from './styles.module.scss';
import Image from 'next/image';
import Navbar from '@/app/shared/widgets/Navbar';

interface ServiceItem {
  title: string;
  image: string;
  content: string;
}

const services: ServiceItem[] = [
  {
    title: 'ประกัน',
    image: `/assets/images/about-us/insurance.png`,
    content: `เราให้บริการโซลูชันประกันที่หลากหลายเพื่อปกป้องคุณและทรัพย์สินของคุณ ตั้งแต่ประกันรถยนต์ ประกันบ้าน
              ประกันสุขภาพ ไปจนถึงประกันธุรกิจ
              เรามีแพ็คเกจประกันที่ยืดหยุ่นและเหมาะสมสำหรับทุกความต้องการของบุคคลและธุรกิจ
              ทีมงานผู้เชี่ยวชาญของเราจะให้คำปรึกษาและสนับสนุนคุณในกระบวนการเลือกและลงทะเบียนผลิตภัณฑ์ประกันที่เหมาะสม`,
  },
  {
    title: 'ภาษีบุคคล ',
    image: `/assets/images/about-us/business.png`,
    content: `บริการภาษีบุคคลของเราช่วยให้คุณดำเนินการด้านภาษีได้อย่างสะดวกและมีประสิทธิภาพ เรามีทีมงานผู้เชี่ยวชาญด้านภาษีที่มีประสบการณ์และยินดีให้คำปรึกษาและสนับสนุนในการยื่นแบบภาษี การเตรียมรายงานภาษี และการแก้ไขปัญหาที่เกี่ยวข้องกับภาษีบุคคล เรามุ่งมั่นที่จะให้ความแม่นยำและปฏิบัติตามกฎหมายภาษี`,
  },
  {
    title: 'การโอนสิทธิ์เจ้าของ',
    image: `/assets/images/about-us/transfer.png`,
    content: `บริการโอนสิทธิ์เจ้าของของเราช่วยให้คุณดำเนินการกระบวนการโอนกรรมสิทธิ์ทรัพย์สินได้อย่างสะดวกและเชื่อถือได้ เราสนับสนุนในการโอนสิทธิ์เจ้าของรถยนต์ บ้านที่ดิน และทรัพย์สินอื่น ๆ ทีมงานผู้เชี่ยวชาญของเราจะช่วยคุณในการจัดการเอกสารทางกฎหมาย กระบวนการทางธุรกิจ และให้ความมั่นใจว่ากระบวนการโอนสิทธิ์เสร็จสมบูรณ์อย่างราบรื่น`,
  },
  {
    title: 'โปรโมชั่น',
    image: `/assets/images/about-us/discount-tag.png`,
    content: `เราให้บริการโปรโมชั่นพิเศษเพื่อสร้างมูลค่าให้กับลูกค้า เช่น ส่วนลดราคา ของแถม หรือแพ็คเกจบริการพิเศษ เราอัปเดตและนำเสนอโปรโมชั่นที่น่าสนใจเพื่อให้ลูกค้าสามารถใช้ประโยชน์สูงสุดจากการใช้บริการของเรา`,
  }
]

const serviceItem = (item: ServiceItem) => {
  return (
    <div className={styles.serviceItem}>
      <Image width={75} height={75} src={item.image} alt={'img'}/>
      <h1 className="text-2xl">{item.title} </h1>
      <p>{item.content}</p>
    </div>
  )
}

const AboutUs = () => {
  return (
    <>
      <Navbar isHome={false}></Navbar>
      <section className={styles.bannerWrapper + ' flex-column'}>
        <header className={'flex-column justify-center flex-1 flex-grow-1'}>
          <h1 className={'text-6xl mb-5'}>เกี่ยวกับบริษัท</h1>
          <p className={'text-xl'}>
            GROWING TOGETHER ก้าวไกล ไปกับคุณ <br/>
            มุ่งมั่นพัฒนาศักยภาพของบุคลากรและสร้างการบริการที่มีคุณค่า สร้างคุณภาพที่ดีขึ้น แก่. <br/>
            สังคม และสร้างผลตอบแทนที่ดีอย่างยั่งยืนแก่ผู้ถือหุ้น
          </p>
        </header>
        <Image fill alt={'banner'} src={'/assets/images/about-us-banner.jpg'}/>
      </section>
      <section className={styles.serviceSection}>
        <div className={`grid gap-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-4`}>
          {
            services.map(e => serviceItem(e))
          }
        </div>
      </section>
      <section className={`${styles.historySection}`}>
        <div className={' grid grid-cols-1 ms:grid-cols-2 md:grid-cols-2 xl:grid-cols-2'}>
          <div className={styles.imageContainer}>
            <Image
              width={400}
              height={400}
              alt={'banner'}
              src={'/assets/images/about-pic-1.jpg'}
            />
          </div>
          <div className={'pr-10 p-10 flex-column justify-center'}>
            <h1 className={'text-3xl font-extrabold underline mb-3 color-primary'}>บริษัท กรุงไทยธุรกิจลีสซิ่ง
              จำกัด</h1>
            <p className={'text-justify'}>
              บริษัท กรุงไทยธุรกิจลีสซิ่ง จำกัด ก่อตั้งเมื่อเดือนตุลาคม 2548 เมื่อวันที่ 3 พฤศจิกายน 2557 มีทุนจดทะเบียน
              1,000 ล้านบาท เมื่อวันที่ 21 พฤษภาคม 2564 โครงสร้างผู้ถือหุ้นของบริษัท โดย บมจ.บัตรกรุงไทย ถือหุ้นสัดส่วน
              75.05% และ บมจ.ธนาคารกรุงไทย ถือหุ้นสัดส่วน 24.95% บริษัทมุ่งให้บริการด้านการเงิน ที่ครบวงจร
              เพื่อตอบสนองความต้องการของลูกค้ากลุ่มต่างๆ ทั้งบุคคลธรรมดาและนิติบุคคล
              การดำเนินธุรกิจให้การสนับสนุนทางการเงินประเภท บริการเช่าซื้อ (Hire Purchase) บริการเช่าแบบลีสซิ่ง
              (Financial Lease) ด้วยทีมงานและผู้บริหารที่พร้อมด้วยประสบการณ์ความมุ่งมั่น จริงใจ
              ยึดมั่นและมุ่งเน้นที่จะให้บริการเพื่อสนับสนุน และตอบสนองความต้องการของลูกค้าให้มีความสะดวกสบาย
              ในฐานะพันธมิตรในการดำเนินธุรกิจที่จะก้าวไกล ไปกับคุณ (GROWING TOGETHER)
            </p>
          </div>
        </div>
      </section>
      <section className={`${styles.missionSection}`}>
        <div className={' container mx-auto grid grid-cols-1 ms:grid-cols-2 md:grid-cols-2 xl:grid-cols-2'}>
          <div className={''}>
            <h1 className={'text-5xl font-bold underline mb-3 color-primary'}>ภารกิจ</h1>
          </div>
          <ul className={`text-2xl pb-8`}>
            <li>• ดูแลรักษาคุณภาพสินทรัพย์และหนี้สินของบริษัท</li>
            <li>• ให้บริการและคำแนะนำที่มีคุณค่าแก่ลูกค้า</li>
            <li>• ดูแลรักษาผลประโยชน์ให้แก่พนักงาน</li>
            <li>• สร้างผลตอบแทนที่ดีให้แก่ผู้ถือหุ้น</li>
          </ul>
        </div>
      </section>

      <section className={`${styles.coreValueSection}`}>
        <div className={' grid grid-cols-1'}>
          <div className={'pr-10'}>
            <h1 className={'text-4xl font-bold text-center underline mb-3 color-primary'}>ค่านิยมหลัก</h1>
            <div className={`grid grid-cols-1 ms:grid-cols-2 md:grid-cols-4 xl:grid-cols-4 pt-10`}>
              <div className={`text-center flex-column justify-center align-center`}>
                <Image
                  width={50}
                  height={50}
                  alt={'banner'}
                  src={'/assets/images/about-us/integration.png'}
                />
                <div>
                  <span className={`text-3xl`}>I</span> : <span className={`text-2xl`}>Integrity (ซื่อสัตย์)</span>
                </div>
              </div>
              <div className={`text-center flex-column justify-center align-center`}>
                <Image
                  width={50}
                  height={50}
                  alt={'banner'}
                  src={'/assets/images/about-us/creative-brain.png'}
                />
                <div><span className={`text-3xl`}>C</span> : <span className={`text-2xl`}>Creativity (สร้างสรรค์)</span>
                </div>
              </div>
              <div className={`text-center flex-column justify-center align-center`}>
                <Image
                  width={50}
                  height={50}
                  alt={'banner'}
                  src={'/assets/images/about-us/efficacy.png'}
                />
                <div><span className={`text-3xl`}>E</span> : <span className={`text-2xl`}>Efficiency (สำเร็จ)</span>
                </div>
              </div>
              <div className={`text-center flex-column justify-center align-center`}>
                <Image
                  width={50}
                  height={50}
                  alt={'banner'}
                  src={'/assets/images/about-us/partners.png'}
                />
                <div><span className={`text-3xl`}>C</span> : <span className={`text-2xl`}>Collaboration (ร่วมมือ)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={'pb-12'}></div>
    </>
  );
};
export default AboutUs;
