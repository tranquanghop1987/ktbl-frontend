"use client";

import { Breadcrumb, Col, Row, Typography } from "antd";
import styles from "./styles.module.css";
import Button from "../Button";
const { Title, Link } = Typography;
function ProductBaner() {
  return (
    <Row
      className={styles.bnProduct + " flex-column"}
      style={{ margin: "0" }}
      gutter={12}
    >
      <div>
        <Breadcrumb
          className={styles.breadcrumb}
          items={[
            {
              title: "หน้าแรก",
            },
            {
              title: "รถกระบะและรถยนต์นั่ง 4 ล้อทุกประเภท",
            },
          ]}
        />
      </div>
      <div className={styles.header}>บริการเช่าแบบลีสซิ่ง</div>
      <div>
        <Typography.Title level={2}>รถยนต์นั่ง 4 ล้อทุกประเภท</Typography.Title>
      </div>
      <div className={styles.description}>
        ผลิตภัณฑ์สินเชื่อเช่ารถกระบะ หรือรถยนต์นั่ง 4
        ล้อทุกประเภทแบบลีสซิ่งเพื่อธุรกิจมีให้เลือกทั้ง รถใหม่และรถใช้แล้ว
      </div>
      <div className={`flex align-baseline gap-20 ${styles.item}`}>
        <div className="logo ">
          <img src="assets/icons/new-car.svg" alt="" />
        </div>
        <div>
          <ul>
            <li className={styles.itemTitle}>
              ทรัพย์สินใหม่ <Link>New Car </Link>
            </li>
            <li>1. ทรัพย์สินใหม่ที่ยังไม่ผ่านการใช้งาน</li>
            <li>
              2. ทรัพย์สินที่เคยมีการจดทะเบียนครั้งแรกมาแล้วไม่เกิน 6 เดือน
            </li>
          </ul>
        </div>
      </div>
      <div className={`flex align-baseline gap-20 ${styles.item}`}>
        <div className="logo">
          <img src="assets/icons/new-car4.svg" alt="" />
        </div>
        <div>
          <ul>
            <li className={styles.itemTitle}>
              ทรัพย์สินใช้แล้ว <Link>Used Car</Link>{" "}
            </li>
            <li>อายุรถไม่เกิน 9 ปี</li>
          </ul>
        </div>
      </div>
      <div>
        <Button text="สมัครผลิตภัณฑ์" className={styles.button} />
      </div>
    </Row>
  );
}
export default ProductBaner;
