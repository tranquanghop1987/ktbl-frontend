"use client";
"use client";
import styles from "./style.module.css";
import Button from "../Button";
import { useState } from "react";
import { Col, Row } from "antd";

function HomeProduct() {
  const [active, setActive] = useState<string>("");
  const items = [
    { label: "รถบรรทุกและอุปกรณ์ต่อพ่วง", key: "p1" },
    { label: "เครื่องจักรก่อสร้าง (จดทะเบียน)", key: "p2" },
    { label: "รถยนต์นั่ง 4 ล้อ", key: "p3" },
    { label: "รถยนต์นั่ง 4 ล้อ", key: "p4" },
  ];
  const handleActive = (key: string) => () => {
    setActive(key);
  };
  return (
    <div className={styles.hproduct} id="product">
      <div className="flex-column align-center">
        <div className={styles.productTitle}>ผลิตภัณฑ์สินเชื่อ</div>
        <Row className={styles.productList} style={{ margin: "8px" }}>
          {items.map((item) => {
            return (
              <div key={item.key}>
                <Col
                  sm={24}
                  onClick={handleActive(item.key)}
                  className={active === item.key ? styles.active : ""}
                >
                  {item.label}
                </Col>
              </div>
            );
          })}
          {/* <div>รถบรรทุกและอุปกรณ์ต่อพ่วง</div>
          <div>เครื่องจักรก่อสร้าง (จดทะเบียน)</div>
          <div className={styles.active}>รถยนต์นั่ง 4 ล้อ</div>
          <div>รถยนต์นั่ง 4 ล้อ</div> */}
        </Row>
      </div>
      <div className={styles.content}>
        <div className={styles.contentTitle}>ผลิตภัณฑ์รถยนต์นั่ง 4 ล้อ</div>
        <div className={styles.contentDescription + " .mt-8"}>
          รถกระบะ รถตู้ และรถยนต์นั่ง 4 ล้อทุกประเภท
        </div>
        <div className="flex justify-content-center mt-64">
          <Button text="รายละเอียดผลิตภัณฑ์"></Button>
        </div>
      </div>
    </div>
  );
}
export default HomeProduct;
