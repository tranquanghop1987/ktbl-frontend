'use client';
import './styles.scss';
// import { TabsProps } from '../shared/widgets/Tabs';
import Image from 'next/image';
import Slider from 'react-slick';
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Individual = (): React.ReactNode => {
  return (
    <div>
      <h2>กรณีบุคคลธรรมดา</h2>
      <ol>
        <li>
          <Image src="/assets/icons/checked.svg" width={16} height={16} alt="" className="my-4" />
          สำเนาบัตรประชาชนหรือสำเนาบัตรข้าราชการ (ไม่หมดอายุ)
        </li>
        <li>
          <Image src="/assets/icons/checked.svg" width={16} height={16} alt="" className="my-4" />
          สำเนาทะเบียนบ้าน
        </li>
        <li>
          <Image src="/assets/icons/checked.svg" width={16} height={16} alt="" className="my-4" />
          สำเนาใบเปลี่ยนชื่อ-นามสกุล, สำเนาทะเบียนสมรส, สำเนาทะเบียนหย่า, สำเนาใบเปลี่ยนคำนำ{' '}
        </li>
        <li>
          <Image src="/assets/icons/checked.svg" width={16} height={16} alt="" className="my-4" />
          สำเนาใบเลื่อนขั้นยศข้าราชการ (ถ้ามี){' '}
        </li>
        <li>
          <Image src="/assets/icons/checked.svg" width={16} height={16} alt="" className="my-4" />
          สำเนาป้ายภาษีรถยนต์ (ไม่หมดอายุ) หรือ สำเนาใบเสร็จรับเงินจากกรมการขนส่งทางบก
          (กรณีที่ท่านต่อภาษีรถยนต์ประจำปีเอง)
        </li>
      </ol>
    </div>
  );
};
const JuristicPerson = (): React.ReactNode => {
  return (
    <div>
      <h2>กรณีนิติบุคคล </h2>

      <ol>
        <li>
          <Image src="/assets/icons/checked.svg" width={16} height={16} alt="" className="my-4" />
          สำเนาหนังสือรับรองบริษัทพร้อมหน้าวัตถุประสงค์ (อายุไม่เกิน 6 เดือน) ประทับตราบริษัท 1 ฉบับ
        </li>
        <li>
          <Image src="/assets/icons/checked.svg" width={16} height={16} alt="" className="my-4" />
          สำเนาบัตรประจำตัวประชาชนกรรมการผู้มีอำนาจลงนาม (ไม่หมดอายุ) 1 ฉบับ
        </li>
        <li>
          <Image src="/assets/icons/checked.svg" width={16} height={16} alt="" className="my-4" />
          กรณีกรรมการเป็นชาวต่างชาติ แนบสำเนา Visa, Passport (เอกสารทุกฉบับต้องไม่หมดอายุ) 1 ฉบับ{' '}
        </li>
        <li>
          <Image src="/assets/icons/checked.svg" width={16} height={16} alt="" className="my-4" />
          เนาป้ายภาษีรถยนต์ (ไม่หมดอายุ) หรือ สำเนาใบเสร็จรับเงินจากกรมการขนส่งทางบก (กรณีที่ท่านต่อภาษีรถยนต์ประจำปีเอง
          หรือกรอกข้อมูลในแบบฟอร์มข้อมูลเพื่อประกอบการรับโอนกรรมสิทธิ์)
        </li>
      </ol>
    </div>
  );
};
const TenantDeath = (): React.ReactNode => {
  return (
    <div>
      <h2>กรณีผู้เช่าซื้อเสียชีวิต </h2>
      <ol>
        <li>
          <Image src="/assets/icons/checked.svg" width={16} height={16} alt="" className="my-4" />
          สำเนาคำสั่งศาลแต่งตั้งผู้จัดการมรดก
        </li>
        <li>
          <Image src="/assets/icons/checked.svg" width={16} height={16} alt="" className="my-4" />
          สำเนาใบมรณบัตรของผู้เช่าซื้อ
        </li>
        <li>
          <Image src="/assets/icons/checked.svg" width={16} height={16} alt="" className="my-4" />
          สำเนาบัตรประชาชนของผู้จัดการมรดก (ไม่หมดอายุ) พร้อมเซ็นรับรองสำเนาถูกต้อง 1 ชุด
        </li>
        <li>
          <Image src="/assets/icons/checked.svg" width={16} height={16} alt="" className="my-4" />
          สำเนาทะเบียนบ้าน ของผู้จัดการมรดก พร้อมเซ็นรับรองสำเนาถูกต้อง 1 ชุด
        </li>
      </ol>
    </div>
  );
};
// const items: Array<TabsProps> = [
//   { label: 'กรณีบุคคลธรรมดา', key: '1', children: <Individual /> },
//   { label: 'กรณีนิติบุคคล ', key: '2', children: <JuristicPerson /> },
//   { label: 'กรณีผู้เช่าซื้อเสียชีวิต ', key: '3', children: <TenantDeath /> },
// ];
const InsuranceServices = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <main className="flex justify-center insurance ">
      <section className="banner flex justify-center">
        <div className="container bgcolor">
          <div className="content">
            <h3>ต่อภาษีรถยนต์ </h3>
            <div>
              ก่อนถึงกำหนดเสียภาษีรถยนต์ประจำปี บริษัทฯ จะจัดส่งจดหมายเตือนและซองธุรกิจ ตอบรับให้ท่านทราบ ล่วงหน้า 90
              วัน ทั้งนี้ควรชำระค่าต่อภาษีมายังบริษัทฯ อย่างน้อย 15 วันก่อนครบกำหนดชำระ เมื่อบริษัทฯ
              ได้รับชำระค่าต่อภาษี และเอกสาร แนบเรียบร้อยแล้ว ท่านจะได้รับป้ายแสดงการ เสียภาษีรถยนต์ประจำปี ภายใน 1
              สัปดาห์ กรณีที่ท่านชำระเงินไม่ทันตามกำหนดหมดอายุภาษี จะต้องเสียค่าเบี้ยปรับล่าช้าในอัตรา 1% ต่อเดือน
            </div>
            <h3>เอกสารที่ต้องนำส่ง </h3>
            <div className="baner-content">
              <ol>
                <li>
                  กรณีรถยนต์ปกติ (อายุการใช้งาน 1-7 ปี) นำส่งสำเนา พ.ร.บ.คุ้มครองผู้ประสบภัยจากรถ พ.ศ. 2535 ทางช่องทาง
                  ดังนี้
                  <ol>
                    <li>
                      ไปรษณีย์ ถึง งานทะเบียน บริษัท กรุงไทยธุรกิจลีสซิ่ง จำกัด เลขที่ 591 อาคารสมัชชาวาณิช 2 ชั้น 2
                      ถนนสุขุมวิท แขวงคลองตันเหนือ เขตวัฒนา กรุงเทพฯ 10110
                    </li>
                    <li>หมายเลขโทรศัพท์ 0 2407 1578</li>
                    <li>
                      งานทะเบียน E-mail
                      <a href={'mailto:Group_Registration@ktbleasing.co.th'}>Group_Registration@ktbleasing.co.th</a>
                    </li>
                  </ol>
                </li>
                <li>
                  สำหรับรถยนต์ที่มีการเปลี่ยนแปลงเครื่องยนต์เป็นก๊าซ NGV/CNG, LPG (ให้ส่งทางไปรษณีย์ EMS
                  หรือนำส่งด้วยตนเองที่บริษัทฯ)
                  <ol>
                    <li>สำเนา พ.ร.บ.คุ้มครองผู้ประสบภัยจากรถ พ.ศ. 2535</li>
                    <li>
                      หนังสือรับรองการตรวจ และทดสอบส่วนควบและเครื่องอุปกรณ์ของรถที่ใช้ก๊าซธรรมชาติอัดเป็นเชื้อเพลิง
                      (เฉพาะรถติดแก๊ส)
                    </li>
                  </ol>
                </li>
                <li>
                  กรณีรถยนต์ใช้งานอายุเกิน 7 ปีขึ้นไป (ให้ส่งทางไปรษณีย์ EMS หรือนำส่งด้วยตนเองที่บริษัทฯ)
                  <ol>
                    <li>สำเนา พ.ร.บ.คุ้มครองผู้ประสบภัยจากรถ พ.ศ. 2535</li>
                    <li>หนังสือรับรองการตรวจสภาพรถยนต์ (ตรอ.) ฉบับจริง</li>
                  </ol>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="ownership grid sm:grid-cols-1 md:grid-cols-2">
        <div>
          <Image src={'/assets/images/insurance/businesscontract.png'} width={550} height={550} alt="" />
        </div>
        <div className="p-8">
          <h2>โอนกรรมสิรถยนต์ทธิ์</h2>
          <h3 className="my-8">บริษัทฯ จัดส่งเอกสารไปให้ ดังนี้</h3>
          <ol>
            <li>แบบฟอร์มการชำระเงินค่าใช้จ่ายการโอนกรรมสิทธิ์ และอื่นๆ (ถ้ามี) </li>
            <li>
              แบบคำขอโอนและรับโอนกรมการขนส่งทางบก 1 ฉบับ โปรดอย่ากรอกรายละเอียดในแบบฟอร์ม (เซ็นผู้รับโอน 2 จุด
              กรณีนิติบุคคล พร้อมประทับตราบริษัท)
            </li>
            <li>
              หนังสือมอบอำนาจ 1 ฉบับ โปรดอย่ากรอกรายละเอียด ในแบบฟอร์ม กรุณาเซ็นและส่งกลับมา พร้อมชุดโอนฯ ใช้
              สำหรับมอบอำนาจให้ เจ้าหน้าที่ของบริษัทฯ ดำเนินการโอนกรรมสิทธิ์ (เซ็นที่ผู้มอบอำนาจ 1 จุด กรณีนิติบุคคล
              พร้อมประทับตราบริษัท)
            </li>
            <li>
              แบบฟอร์มข้อมูลเพื่อประกอบการรับโอนกรรมสิทธิ์ 1 ฉบับ
              แจ้งความประสงค์ใช้รถยนต์ในพื้นที่กรุงเทพมหานคร/ข้อมูลป้าย ภาษีรถยนต์/ใบแจ้งเปลี่ยนที่อยู่
            </li>
          </ol>
          <p>
            บริษัทฯจะจัดส่งเอกสารส่วนที่ 1 ให้กับท่าน 30 วันก่อนชำระค่างวด ๆ สุดท้าย
            เมื่อท่านได้รับเอกสารให้ลงนามในเอกสารให้ครบถ้วน พร้อมเซ็นรับรอง สำเนาถูกต้องในเอกสารส่วนที่ 2
            และนำส่งกลับมายังบริษัทฯ ก่อนวันครบกำหนดชำระค่างวดๆ สุดท้าย 30 วัน
            พร้อมกับชำระเงินค่าใช้จ่ายในการโอนกรรมสิทธิ์ ตามใบแจ้งการชำระเงินที่นำส่งให้ท่าน
            (ท่านสามารถขอเอกสารการโอนกรรมสิทธิ์ ได้ที่ หน้าดาวน์โหลด)
          </p>
        </div>
      </section>
      <section className=" w-full flex justify-center taps-content">
        <div className="container">
          <h3>เอกสารประกอบที่ผู้เช่าซื้อต้องเตรียมอย่างละ 1 ชุด</h3>
          <div className="w-full ">
            <Slider {...settings}>
              <Individual />

              <JuristicPerson />

              <TenantDeath />
            </Slider>
          </div>
          <div className="contac my-6 text-white">
            เอกสารประกอบการโอนกรรมสิทธิ์ บริษัทฯ ขอสงวนสิทธิ์ในการเปลี่ยนแปลงเงื่อนไขและการพิจารณา
            โดยมิต้องแจ้งให้ทราบล่วงหน้าสอบถามข้อมูลเพิ่มเติมได้ที่ เจ้าหน้าที่ งานทะเบียน โทรศัพท์ 0 2407-1578
          </div>
        </div>
      </section>
    </main>
  );
};

export default InsuranceServices;
