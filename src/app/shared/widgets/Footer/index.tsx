"use client";
import { Col, Row, Typography, Layout } from "antd";
import styles from "./footer.module.css";
const { Link } = Typography;
function Footer() {
  return (
    <>
      <Row
        gutter={[24, 24]}
        className={styles.footer}
        style={{ margin: "0" }}
        align="top"
      >
        <Col md={4} sm={12} xs={24}>
          <Typography.Title level={3}>
            ผลิตภัณฑ์กรุงไทยธุรกิจลีสซิ่ง
          </Typography.Title>
          <ul>
            <li>
              <Link>สินเชื่อรถบรรทุก รถหัวลาก และอุปกรณ์ต่อพ่วง​</Link>
            </li>
            <li>
              <Link>
                สินเชื่อเครื่องจักรก่อสร้าง (ที่จดทะเบียนกรมการขนส่ง)​
              </Link>
            </li>

            <li>
              <Link>สินเชื่อรถกระบะ และรถยนต์นั่ง 4 ล้อ ทุกประเภท​</Link>
            </li>

            <li>
              <Link>สินเชื่อรถยนต์มือสอง KTC พี่เบิ้ม​</Link>
            </li>

            <li>
              <Link>สินเชื่อรถแลกเงิน KTC พี่เบิ้ม​</Link>
            </li>
          </ul>
        </Col>
        <Col md={4} sm={12} xs={24}>
          <Typography.Title level={3}>บริการ</Typography.Title>
          <ul>
            <li>
              <Link>บริการด้านการประกันภัย​</Link>
            </li>
            <li>
              <Link>บริการด้านอื่น ๆ</Link>
            </li>
            <li>
              <Link>โปรโมชั่น​</Link>
            </li>
            <li>
              <Link>อัตราดอกเบี้ย ค่า</Link>
            </li>
            <li>
              <Link>ช่องทางการชำระเงิน​​</Link>
            </li>
          </ul>
        </Col>
        <Col md={4} sm={12} xs={24}>
          <Typography.Title level={3}>
            ข่าวประชาสัมพันธ์ /บทความ​
          </Typography.Title>
          <ul>
            <li>
              <Link>วิสัยทัศน์ / พันธกิจ​ ​ </Link>
            </li>
            <li>
              <Link>ความเป็นมา​ </Link>
            </li>
            <li>
              <Link>โครงสร้างองค์กร​ </Link>
            </li>
            <li>
              <Link>คณะกรรมการบริษัท​ </Link>
            </li>
            <li>
              <Link>ผู้บริหารของบริษัท </Link>
            </li>
            <li>
              <Link>นักลงทุนสัมพันธ์​ ​ </Link>
            </li>
            <li>
              <Link>การกำกับดูแลกิจการ​ </Link>
            </li>
            <li>
              <Link>ร่วมงานกับเรา​​ </Link>
            </li>
          </ul>
        </Col>
        <Col md={4} sm={12} xs={24}>
          <Typography.Title level={3}>
            ผลิตภัณฑ์กรุงไทยธุรกิจลีสซิ่ง
          </Typography.Title>
          <ul>
            <li>
              <Link>ข่าวประชาสัมพันธ์​​ ​</Link>
            </li>
            <li>
              <Link>รายการทรัพย์สินรอการขาย​</Link>
            </li>
            <li>
              <Link>บทความ​</Link>
            </li>
          </ul>
        </Col>
        <Col md={4} sm={12} xs={24}>
          <Link href="/">
            <img src="/assets/images/logo-footer.svg" alt="" />{" "}
          </Link>
          <Typography.Title level={3}>ติดต่อเรา </Typography.Title>
          <ul>
            <li>
              <img src="/assets/icons/phone.svg" alt=""></img>
              <Link className={styles.phone}> 02 407 1555​</Link>
            </li>
            <li>
              <img src="/assets/icons/facebook.svg" alt=""></img>
              <Link>@KTBL​</Link>
            </li>
            <li>
              <img src="/assets/icons/location.svg" alt=""></img>

              <Link>
                591 อาคารสมัชชาวานิช 2 (UBCII) ชั้น 2 ถนนสุขุมวิท
                แขวงคลองตันเหนือ เขตวัฒนา กรุงเทพฯ 10110
              </Link>
            </li>
          </ul>
        </Col>
      </Row>
      <Layout.Footer style={{ textAlign: "center" }} className={styles.company}>
        © 2566 บริษัท กรุงไทยธุรกิจลีสซิ่ง จำกัด (มหาชน)
      </Layout.Footer>
    </>
  );
}
export default Footer;
