import { fetchAPI } from '@/app/shared/utils/fetch-api';
import { ItemType } from 'antd/es/menu/hooks/useItems';

/**
 * get all remote variable from server
 * @author hoang.pt
 */
export const getGlobal = async (): Promise<any> => {
  const token = process.env.NEXT_PUBLIC_STRAPI_API_TOKEN;
  if (!token) throw new Error('The Strapi API Token variable is not set.');

  // build params
  const path = `/global`;
  const options = { headers: { Authorization: `Bearer ${token}` } };
  const urlParamsObject = {
    populate: 'deep',
  };

  const response = await fetchAPI(path, urlParamsObject, options);
  return response;
};

// TODO: hardcode, should get from api
export const items: ItemType[] = [
  {
    label: 'เกี่ยวกับบริษัท',
    key: 'mail',
    children: [
      {
        label: 'วิสัยทัศน์ / พันธกิจ',
        key: '1',
      },
      {
        label: 'ความเป็นมา',
        key: '2',
      },
      {
        label: 'โครงสร้างองค์กร',
        key: '3',
      },
      {
        label: 'คณะกรรมการบริษัท',
        key: '4',
      },
      {
        label: 'ผู้บริหารของบริษัท',
        key: '5',
      },
      {
        label: 'นักลงทุนสัมพันธ์ ',
        key: '6',
      },
      {
        label: 'การกำกับดูแลกิจการ',
        key: '7',
      },
      {
        label: 'ร่วมงานกับเรา',
        key: '8',
      },
    ],
  },
  {
    label: 'ผลิตภัณฑ์สินเชื่อ',
    key: 'app',
    children: [
      {
        label: 'สินเชื่อรถบรรทุก รถหัวลาก และอุปกรณ์ต่อพ่วง',
        key: '1',
      },
      {
        label: 'สินเชื่อเครื่องจักรก่อสร้าง (ที่จดทะเบียนกรมการขนส่ง)',
        key: '2',
      },
      {
        label: 'สินเชื่อรถกระบะ และรถยนต์นั่ง 4 ล้อ ทุกประเภท',
        key: '3',
      },
      {
        label: 'สินเชื่อรถมือสอง KTC พี่เบิ้ม',
        key: '4',
      },
      {
        label: 'สินเชื่อรถแลกเงิน KTC พี่เบิ้ม',
        key: '5',
      },
    ],
  },
  {
    label: 'บริการลูกค้า',
    key: 'SubMenu',
    children: [
      {
        label: 'บริการด้านการประกันภัย',
        key: '1',
      },
      {
        label: 'บริการด้านอื่นๆ',
        key: '2',
      },
      {
        label: 'โปรโมชั่น',
        key: '3',
      },
      {
        label: 'ช่องทางการชำระเงิน',
        key: '4',
      },
    ],
  },
  {
    label: 'ข่าวประชาสัมพันธ์/บทความ',
    key: 'alipay1',
    children: [
      {
        label: 'ข่าวประชาสัมพันธ์',
        key: '1',
      },
      {
        label: 'รายการทรัพย์สินรอการขาย',
        key: '2',
      },
      {
        label: 'บทความ',
        key: '3',
      },
    ],
  },
  {
    label: 'ติดต่อเรา',
    key: 'alipay4',
    // children: [
    //   { label: '02 407 1555', key: '1' },
    //   { label: '@KTBLEASING.CO.TH', key: '2' },
    //   {
    //     label: '591 อาคารสมัชชาวานิช 2 (UBCII) ชั้น 2 ถนนสุขุมวิท แขวงคลองตันเหนือ เขตวัฒนา กรุงเทพฯ 10110 ',
    //     key: '33',
    //   },
    // ],
  },
];

export const FORM_SELECT = {
  // businessType: 'Retail Loan,Commercial Loan',
  province:
    'กรุงเทพมหานคร,กระบี่,กาญจนบุรี,กาฬสินธุ์,กำแพงเพชร,ขอนแก่น,จันทบุรี,ฉะเชิงเทรา,ชลบุรี,ชัยนาท,ชัยภูมิ,ชุมพร,เชียงราย,เชียงใหม่,ตรัง,ตราด,ตาก,นครนายก,นครปฐม,นครพนม,นครราชสีมา,นครศรีธรรมราช,นครสวรรค์,นนทบุรี,นราธิวาส,น่าน,บึงกาฬ,บุรีรัมย์,ปทุมธานี,ประจวบคีรีขันธ์,ปราจีนบุรี,ปัตตานี,พระนครศรีอยุธยา,พังงา,พัทลุง,พิจิตร,พิษณุโลก,เพชรบุรี,เพชรบูรณ์,แพร่,พะเยา,ภูเก็ต,มหาสารคาม,มุกดาหาร,แม่ฮ่องสอน,ยะลา,ยโสธร,ร้อยเอ็ด,ระนอง,ระยอง,ราชบุรี,ลพบุรี,ลำปาง,ลำพูน,เลย,ศรีสะเกษ,สกลนคร,สงขลา,สตูล,สมุทรปราการ,สมุทรสงคราม,สมุทรสาคร,สระแก้ว,สระบุรี,สิงห์บุรี,สุโขทัย,สุพรรณบุรี,สุราษฎร์ธานี,สุรินทร์,หนองคาย,หนองบัวลำภู,อ่างทอง,อุดรธานี,อุทัยธานี,อุตรดิตถ์,อุบลราชธานี,อำนาจเจริญ',
  businessProduct:
    'ธุรกิจขนส่ง,ธุรกิจอื่นที่ต้องการใช้ระบบขนส่งโลจิสติกส์,ธุรกิจก่อสร้าง,ธุรกิจที่เกี่ยวเนื่องกับการก่อสร้าง (Supply Chain)',
  PreferredCarType:
    'รถเก๋ง,รถกระบะ,รถตู้,รถบรรทุกและอุปกรณ์ต่อพ่วง,รถกระบะ และรถยนต์นั่ง 4 ล้อทุกประเภท,เครื่องจักรก่อสร้างชนิดที่มีล้อเป็นส่วนประกอบ,รถขุด (Excavators),รถตัก (WHEEL LOADERS),รถดันดิน (BULLDOZER),รถขูดไสผิว (HOT & COOL),รถปูยาง (PAVER),รถบดอัด (COMPACTOR),รถเกรดดิน (MOTOR GRADER),รถขุด-เจาะชั้นดิน (DRILL),รถทาวเวอร์เครน (TOWER CRANE),รถเครน (TRUCK CRANE),รถยก (FORKLIFT)',
  LengthTime: '12 งวด,24 งวด,36 งวด,48 งวด,60 งวด,48 งวด,60 งวด,72 งวด',
};
