import styles from "./styles.module.scss";
import Image from "next/image";
import MenuItem from "@mui/material/MenuItem";
import SelectMui from "@mui/material/Select";
import * as React from "react";
import OfficeAddressMap from "@/app/shared/widgets/OfficeAddressMap";

const socialList = [
  {
    text: `Krungthai Care`,
    icon: `/assets/images/image-facebook.jpg`
  },
  {
    text: `Krungthai Care
Line Official Account`,
    icon: `/assets/images/image-ig.jpg`
  },
  {
    text: `Krungthai_Care`,
    icon: `/assets/images/image-twitter.jpg`
  },
  {
    text: `Krungthai_care`,
    icon: `/assets/images/image-line.jpg`
  },
  {
    text: `Krungthai Care`,
    icon: `/assets/images/image-youtube.jpg`
  }
];

const ContactUs = () => {
  return (
    <div className={styles.wrapper}>
      <section className={styles.banner}>
        <div className={styles.imgc}>
          <Image objectFit={"cover"} src={"/assets/images/contact-us/contact-teaser-1.jpg"} alt={"banner"} fill />
        </div>
        <div className={styles.descWrapper}>
          <div className={styles.desc}>
            <h1 className={"text-6xl"}>ติดต่อธนาคารกรุงไทย</h1>
            <p className={"text-xl mt-5"}>ธนาคารกรุงไทยยินดีให้บริการพร้อมให้คำปรึกษาและดูแลคุณ</p>
          </div>
        </div>
      </section>
      <section className={styles.contactwrapper}>
        <div className={styles.headtitle}>
          บริษัท กรุงไทยธุรกิจลีสซิ่ง จำกัด (สำนักงานใหญ่)
        </div>
        <div className={styles.infoWraper}>
          <div className={styles.block}>
            <p className={styles.title}>โทรศัพท์</p>
            <div>
              <a className="ktfast-normal" href="tel:0 2407 1500" title="ติดต่อ Krungthai Call Center">0 2407 1500</a>
              <br />
            </div>
          </div>
          <div className={styles.block}>
            <p className={styles.title}>Call Center</p>
            <div>
              <a className="ktfast-normal" href="tel:0 2407 1555" title="ติดต่อ Krungthai Call Center">0 2407 1555</a>
            </div>
          </div>
          <div className={styles.block}>
            <p className={styles.title}>Customer Service E-mail</p>
            <div>
              <a className="ktfast-normal" href="mailto:info_ktbleasing@ktbleasing.co.th"
                 title="ติดต่อ Krungthai Call Center">info_ktbleasing@ktbleasing.co.th</a>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.addressWraper}>
        <div className={styles.contentWraper}>
          <OfficeAddressMap></OfficeAddressMap>
        </div>
      </section>
      <section>

      </section>
      <section className={styles.socialBlock}>
        <p className={styles.title}>ติดตามกรุงไทยทาง Social Media</p>
        <div className={styles.socialList}>
          {
            socialList.map(item => {
              return (
                <div className={styles.item}>
                  <Image src={item.icon} alt="" width={60}
                       height={60} />
                  <p>{item.text}</p>
                </div>
              );
            })
          }
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
