"use client";
import styles from "./style.module.css";
import Button from "../Button";
import { useState } from "react";
import { Col, Row } from "antd";
import { useRouter } from "next/navigation";

const HomeProduct = () => {
  const [active, setActive] = useState<string>("p1");
  const [page, setPage] = useState<number>(0);
  const router = useRouter();

  const items = [
    { label: "รถบรรทุกและอุปกรณ์ต่อพ่วง", key: "p1" },
    { label: "เครื่องจักรก่อสร้าง (จดทะเบียน)", key: "p2" },
    { label: "รถยนต์นั่ง 4 ล้อ", key: "p3" },
    { label: "รถยนต์นั่ง 4 ล้อ", key: "p4" },
  ];

  const productDetail = [
    {
      title: "ผลิตภัณฑ์รถยนต์นั่ง 4 ล้อ",
      description: "รถกระบะ รถตู้ และรถยนต์นั่ง 4 ล้อทุกประเภท",
      idProduct: "123",
      titleBtn: "รายละเอียดผลิตภัณฑ์",
    },
    {
      title: "2",
      description: "รถกระบะ รถตู้ และรถยนต์นั่ง 4 ล้อทุกประเภท",
      idProduct: "123",
      titleBtn: "รายละเอียดผลิตภัณฑ์",
    },
    {
      title: "3",
      description: "รถกระบะ รถตู้ และรถยนต์นั่ง 4 ล้อทุกประเภท",
      idProduct: "123",
      titleBtn: "รายละเอียดผลิตภัณฑ์",
    },
    {
      title: " 4 ",
      description: "รถกระบะ รถตู้ และรถยนต์นั่ง 4 ล้อทุกประเภท",
      idProduct: "123",
      titleBtn: "รายละเอียดผลิตภัณฑ์",
    },
  ];
  const handleActive = (key: string, pageNum: number) => () => {
    setActive(key);
    setPage(pageNum);
  };
  const gotoPage = (idProduct: string) => () => {
    router.push(`products/${idProduct}`);
  };
  return (
    <>
      <div className={styles.hproduct} id="product">
        <div className="flex-column align-center">
          <div className={styles.productTitle}>ผลิตภัณฑ์สินเชื่อ</div>
          <Row className={styles.productList} style={{ margin: "8px" }}>
            {items.map((item, index) => {
              return (
                <div key={item.key}>
                  <Col
                    sm={24}
                    onClick={handleActive(item.key, index)}
                    className={active === item.key ? styles.active : ""}
                  >
                    {item.label}
                  </Col>
                </div>
              );
            })}
          </Row>
        </div>
        <div className={styles.content}>
          <div className={styles.contentTitle}>{productDetail[page].title}</div>
          <div className={styles.contentDescription + " .mt-8"}>
            {productDetail[page].description}
          </div>
          <div className="flex justify-content-center mt-64">
            <Button
              text="รายละเอียดผลิตภัณฑ์"
              onClick={gotoPage(productDetail[page].idProduct)}
            ></Button>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomeProduct;
