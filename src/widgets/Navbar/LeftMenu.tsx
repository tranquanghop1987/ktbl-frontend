import React from "react";
import { Menu, MenuProps } from "antd";

const LeftMenu = ({ mode }: { mode: any }) => {
  const items: MenuProps["items"] = [
    {
      label: "เกี่ยวกับบริษัท",
      key: "mail",
      children: [
        {
          label: "วิสัยทัศน์ / พันธกิจ",
          key: "1",
        },
        {
          label: "ความเป็นมา",
          key: "2",
        },
        {
          label: "โครงสร้างองค์กร",
          key: "3",
        },
        {
          label: "คณะกรรมการบริษัท",
          key: "4",
        },
        {
          label: "ผู้บริหารของบริษัท",
          key: "5",
        },
        {
          label: "นักลงทุนสัมพันธ์ ",
          key: "6",
        },
        {
          label: "การกำกับดูแลกิจการ",
          key: "7",
        },
        {
          label: "ร่วมงานกับเรา",
          key: "8",
        },
      ],
    },
    {
      label: "ผลิตภัณฑ์สินเชื่อ",
      key: "app",
      children: [
        {
          label: "สินเชื่อรถบรรทุก รถหัวลาก และอุปกรณ์ต่อพ่วง",
          key: "1",
        },
        {
          label: "สินเชื่อเครื่องจักรก่อสร้าง (ที่จดทะเบียนกรมการขนส่ง)",
          key: "2",
        },
        {
          label: "สินเชื่อรถกระบะ และรถยนต์นั่ง 4 ล้อ ทุกประเภท",
          key: "3",
        },
        {
          label: "สินเชื่อรถมือสอง KTC พี่เบิ้ม",
          key: "4",
        },
        {
          label: "สินเชื่อรถแลกเงิน KTC พี่เบิ้ม",
          key: "5",
        },
      ],
    },
    {
      label: "บริการลูกค้า",
      key: "SubMenu",
      children: [
        {
          label: "บริการด้านการประกันภัย",
          key: "1",
        },
        {
          label: "บริการด้านอื่นๆ",
          key: "2",
        },
        {
          label: "โปรโมชั่น",
          key: "3",
        },
        {
          label: "ช่องทางการชำระเงิน",
          key: "4",
        },
      ],
    },
    {
      label: "ข่าวประชาสัมพันธ์/บทความ",
      key: "alipay1",
      children: [
        {
          label: "ข่าวประชาสัมพันธ์",
          key: "1",
        },
        {
          label: "รายการทรัพย์สินรอการขาย",
          key: "2",
        },
        {
          label: "บทความ",
          key: "3",
        },
      ],
    },
    {
      label: "ติดต่อเรา",
      key: "alipay4",
      children: [
        { label: "02 407 1555", key: "1" },
        { label: "@KTBLEASING.CO.TH", key: "2" },
        {
          label:
            "591 อาคารสมัชชาวานิช 2 (UBCII) ชั้น 2 ถนนสุขุมวิท แขวงคลองตันเหนือ เขตวัฒนา กรุงเทพฯ 10110 ",
          key: "33",
        },
      ],
    },
  ];
  return (
    <Menu
      mode={mode}
      items={items}
      style={{ backgroundColor: "transparent", color: "#ffffff" }}
    ></Menu>
  );
};

export default LeftMenu;
