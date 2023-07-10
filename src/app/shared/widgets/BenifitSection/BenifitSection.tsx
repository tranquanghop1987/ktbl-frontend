import React from 'react';
import './styles.scss';

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
const BenifitSection = () => {
  return (
    <section className="benifit-section">
      <div className="container grid md:grid-cols-2 xs:grid-cols-1 align-center h-full">
        <div></div>
        <div className="">
          {detailList.map((item, key) => {
            return (
              <div className="flex  gap-4 box-item " key={key}>
                <img src="/assets/icons/tick.svg" alt=" " />

                <div className="item">
                  <h2>{item.title}</h2>
                  <p className="mt-1">{item.content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
export default BenifitSection;
