"use client";
import { CloseOutlined, PlusOutlined } from "@ant-design/icons";
import { Collapse, CollapseProps } from "antd";
import styles from "./styles.module.scss";
import type { CSSProperties } from "react";

const listItemFAQ: (panelStyle: CSSProperties) => CollapseProps["items"] = (
  panelStyle
) => [
  {
    key: 1,
    label:
      "หากต้องการแจ้งเปลี่ยนที่อยู่ในการจัดส่งเอกสารจะต้องดำเนินการอย่างไร ?",
    children: (
      <p className={styles.contentItem}>
        ส่งสำเนาบัตรประชาชน หรือสำเนาบัตรข้าราชการ
        พร้อมระบุรายละเอียดการแจ้งเปลี่ยนที่อยู่ในการจัดส่งเอกสาร และเบอร์ติดต่อ
        เซ็นสำเนาถูกต้อง ส่งเอกสารเข้ามาทางไปรษณีย์ตามที่อยู่ของบริษัท
        กรุงไทยธุรกิจ ลีสซิ่ง จำกัด (แจ้งเปลี่ยนที่อยู่ในการจัดส่งเอกสาร) เลขที่
        591 อาคารสมัชชาวานิช 2 (UBC II) ชั้น 2 ถนนสุขุมวิท แขวงคลองตันเหนือ
        เขตวัฒนา กรุงเทพฯ 10110 หรือส่งเข้ามาทางอีเมลล์
        info_ktbleasing@ktbleasing.co.th
      </p>
    ),
    style: panelStyle,
  },
  {
    key: 2,
    label: "บริการสินเชื่อเกี่ยวกับรถยนต์ของกรุงไทยธุรกิจลีสซิ่งมีอะไรบ้าง ?",
    children: (
      <p className={styles.contentItem}>
        ส่งสำเนาบัตรประชาชน หรือสำเนาบัตรข้าราชการ
        พร้อมระบุรายละเอียดการแจ้งเปลี่ยนที่อยู่ในการจัดส่งเอกสาร และเบอร์ติดต่อ
        เซ็นสำเนาถูกต้อง ส่งเอกสารเข้ามาทางไปรษณีย์ตามที่อยู่ของบริษัท
        กรุงไทยธุรกิจ ลีสซิ่ง จำกัด (แจ้งเปลี่ยนที่อยู่ในการจัดส่งเอกสาร) เลขที่
        591 อาคารสมัชชาวานิช 2 (UBC II) ชั้น 2 ถนนสุขุมวิท แขวงคลองตันเหนือ
        เขตวัฒนา กรุงเทพฯ 10110 หรือส่งเข้ามาทางอีเมลล์
        info_ktbleasing@ktbleasing.co.th
      </p>
    ),
    style: panelStyle,
  },
  {
    key: 3,
    label:
      "หากสนใจทำสินเชื่อทะเบียนรถยนต์แบบโอนเล่ม ต้องใช้เอกสารในการสมัครมีอะไรบ้าง ?",
    children: (
      <p className={styles.contentItem}>
        ส่งสำเนาบัตรประชาชน หรือสำเนาบัตรข้าราชการ
        พร้อมระบุรายละเอียดการแจ้งเปลี่ยนที่อยู่ในการจัดส่งเอกสาร และเบอร์ติดต่อ
        เซ็นสำเนาถูกต้อง ส่งเอกสารเข้ามาทางไปรษณีย์ตามที่อยู่ของบริษัท
        กรุงไทยธุรกิจ ลีสซิ่ง จำกัด (แจ้งเปลี่ยนที่อยู่ในการจัดส่งเอกสาร) เลขที่
        591 อาคารสมัชชาวานิช 2 (UBC II) ชั้น 2 ถนนสุขุมวิท แขวงคลองตันเหนือ
        เขตวัฒนา กรุงเทพฯ 10110 หรือส่งเข้ามาทางอีเมลล์
        info_ktbleasing@ktbleasing.co.th
      </p>
    ),
    style: panelStyle,
  },
  {
    key: 4,
    label:
      "สินเชื่อ Refinance รถยนต์ KTC พี่เบิ้ม ผู้สมัครต้องมีคุณสมบัติอะไรบ้าง ?",
    children: (
      <p className={styles.contentItem}>
        ส่งสำเนาบัตรประชาชน หรือสำเนาบัตรข้าราชการ
        พร้อมระบุรายละเอียดการแจ้งเปลี่ยนที่อยู่ในการจัดส่งเอกสาร และเบอร์ติดต่อ
        เซ็นสำเนาถูกต้อง ส่งเอกสารเข้ามาทางไปรษณีย์ตามที่อยู่ของบริษัท
        กรุงไทยธุรกิจ ลีสซิ่ง จำกัด (แจ้งเปลี่ยนที่อยู่ในการจัดส่งเอกสาร) เลขที่
        591 อาคารสมัชชาวานิช 2 (UBC II) ชั้น 2 ถนนสุขุมวิท แขวงคลองตันเหนือ
        เขตวัฒนา กรุงเทพฯ 10110 หรือส่งเข้ามาทางอีเมลล์
        info_ktbleasing@ktbleasing.co.th
      </p>
    ),
    style: panelStyle,
  },
];

const ProductFAQ = () => {
  const panelStyle = {
    marginBottom: 24,
  };
  return (
    <div className={styles.faq + " container mx-auto"}>
      <h2 className={`${styles.headerFQA}`}>คำถามที่พบบ่อย</h2>
      <Collapse
        collapsible="icon"
        defaultActiveKey={["1"]}
        expandIcon={({ isActive }) =>
          isActive ? (
            <CloseOutlined style={{ color: "#0B7199" }} />
          ) : (
            <PlusOutlined style={{ color: "#0B7199" }} />
          )
        }
        expandIconPosition="end"
        items={listItemFAQ(panelStyle)}
        bordered={false}
        style={{ background: "#ffffff" }}
      />
    </div>
    // <div>
    //   <Collapse
    //     size="large"
    //     items={[{ key: '1', label: 'This is large size panel header', children: <p>Describe</p> }]}
    //   />
    // </div>
  );
};

export default ProductFAQ;
