"use client";
import CardItem from "@/uikit/atoms/CardItem";
import { Button } from "antd";
import styles from "./styles.module.css";
import "../../../assets/css/slick.css";
import "../../../assets/css/slick-theme.css";
import Slider from "react-slick";
import { useEffect, useState } from "react";

const itemList = [
  {
    imageUrl: "/assets/images/new-detail-1.png",
    tag: "ข่าวบริษัท",
    createDate: "15/12/2566",
    description:
      "การเปิดเผยรายการกลางและการคำนวณราคากลางการจัดซื้อจัดจ้างซึ่งมิใช่งานก่อสร้างตารางแสดงวงเงินงบประมาณที่ได้รับจัดสรรและราคากลาง (ราคาอ้างอิง) ในการจัดซื้อจัดจ้างที่มิใช่งานก่อสร้าง",
  },
  {
    imageUrl: "assets/images/new-detail-2.png",
    tag: "ข่าวกิจกรรม",
    createDate: "15/12/2566",
    description:
      "จัดจ้างบริการด้านงานทะเบียน - บจก. กิจมงคล คาร์ แอนด์ เซอร์วิสเซส",
  },
  {
    imageUrl: "/assets/images/new-detail-1.png",
    tag: "ประกวดราคาจัดซื้อจัดจ้าง",
    createDate: "15/12/2566",
    description: "เคทีซีแถลงทิศทางการดำเนินธุรกิจปี 2566",
  },
  {
    imageUrl: "assets/images/new-detail-2.png",
    tag: "รายการทรัพย์สินรอขาย",
    createDate: "15/12/2566",
    description:
      "เคทีซีจับมือมาสเตอร์การ์ดกระตุ้นยอดใช้จ่ายช่วงปลายปี มอบโปรแรงให้สมาชิกที่เซ็นทรัลและโรบินสันทั่วประเทศ",
  },
  {
    imageUrl: "/assets/images/new-detail-1.png",
    tag: "รายการทรัพย์สินรอขาย",
    createDate: "15/12/2566",
    description:
      "เคทีซีจับมือมาสเตอร์การ์ดกระตุ้นยอดใช้จ่ายช่วงปลายปี มอบโปรแรงให้สมาชิกที่เซ็นทรัลและโรบินสันทั่วประเทศ",
  },
  {
    imageUrl: "/assets/images/new-detail-1.png",
    tag: "รายการทรัพย์สินรอขาย",
    createDate: "15/12/2566",
    description:
      "เคทีซีจับมือมาสเตอร์การ์ดกระตุ้นยอดใช้จ่ายช่วงปลายปี มอบโปรแรงให้สมาชิกที่เซ็นทรัลและโรบินสันทั่วประเทศ",
  },
  {
    imageUrl: "/assets/images/new-detail-1.png",
    tag: "รายการทรัพย์สินรอขาย",
    createDate: "15/12/2566",
    description:
      "เคทีซีจับมือมาสเตอร์การ์ดกระตุ้นยอดใช้จ่ายช่วงปลายปี มอบโปรแรงให้สมาชิกที่เซ็นทรัลและโรบินสันทั่วประเทศ",
  },
  {
    imageUrl: "/assets/images/new-detail-1.png",
    tag: "รายการทรัพย์สินรอขาย",
    createDate: "15/12/2566",
    description:
      "เคทีซีจับมือมาสเตอร์การ์ดกระตุ้นยอดใช้จ่ายช่วงปลายปี มอบโปรแรงให้สมาชิกที่เซ็นทรัลและโรบินสันทั่วประเทศ",
  },
];
const showItem = Math.round(globalThis?.window?.screen.width / 305) - 1;
const settings = {
  infinite: true,
  slidesToShow: showItem < 2 ? 1 : showItem,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
};

function News() {
  const [isSeeAll, setIsSeeAll] = useState(false);

  const handleSeeAll = () => {
    setIsSeeAll(!isSeeAll);
  };

  return (
    <div>
      <div className={styles.news}>
        <div className={styles.header}>
          <div className={styles.title}>ข่าวประชาสัมพันธ์</div>
          <Button style={{ color: "#0080BD" }} onClick={handleSeeAll}>
            ดูทั้งหมด
          </Button>
        </div>
        {!isSeeAll ? (
          <Slider {...settings}>
            {itemList.map((item, index) => (
              <div className={styles.newDetail} key={index}>
                <CardItem
                  imageUrl={item.imageUrl}
                  tag={item.tag}
                  createDate={item.createDate}
                  description={item.description}
                ></CardItem>
              </div>
            ))}
          </Slider>
        ) : (
          <div className={styles.allItems}>
            {itemList.map((item, index) => (
              <div className={styles.newDetail} key={index}>
                <CardItem
                  imageUrl={item.imageUrl}
                  tag={item.tag}
                  createDate={item.createDate}
                  description={item.description}
                ></CardItem>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className={styles.article}>
        <div className={styles.header}>
          <div className={styles.title}>บทความ</div>
          <Button style={{ color: "#0080BD" }} onClick={handleSeeAll}>
            ดูทั้งหมด
          </Button>
        </div>
        {!isSeeAll ? (
          <Slider {...settings}>
            {itemList.map((item, index) => (
              <div className={styles.newDetail} key={index}>
                <CardItem
                  imageUrl={item.imageUrl}
                  tag={item.tag}
                  createDate={item.createDate}
                  description={item.description}
                ></CardItem>
              </div>
            ))}
          </Slider>
        ) : (
          <div className={styles.allItems}>
            {itemList.map((item, index) => (
              <div className={styles.newDetail} key={index}>
                <CardItem
                  imageUrl={item.imageUrl}
                  tag={item.tag}
                  createDate={item.createDate}
                  description={item.description}
                ></CardItem>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default News;
