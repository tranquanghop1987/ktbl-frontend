"use client";
import SelectMui, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import Image from "next/image";

const offices = [
  // {
  //   id: 1,
  //   name: `บริษัท กรุงไทยธุรกิจลีสซิ่ง จำกัด (สำนักงานใหญ่)`,
  //   address: `เลขที่ 591 อาคารสมัชชาวาณิช 2 (UBC II) ชั้น 2 ถนนสุขุมวิท แขวงคลองตันเหนือ เขตวัฒนา กรุงเทพมหานคร 10110`,
  //   tel: `0 2407 1500`,
  //   callCenter: `0 2407 1555`,
  //   email: `info_ktbleasing@ktbleasing.co.th`,
  //   image: `/assets/images/contact-us/image1.gif`
  // },
  {
    id: 1,
    name: `สาขา สุราษฎร์ธานี​`,
    address: `เลขที่ 238/105-106 หมู่ 1 ถนนชนเกษม (ในลีก) ตำบลมะขามเตี้ย อำเภอเมืองสุราษฎร์ธานี จังหวัดสุราษฎร์ธานี 84000`,
    tel: `(077)956-830`,
    callCenter: `(077)910-026`,
    image: `/assets/images/contact-us/image2.jpeg`
  },
  {
    id: 2,
    name: `สาขา พิษณุโลก`,
    address: `เลขที่ 59/18 ถนนบรมไตรโลกนารถ 2 ตำบลในเมือง อำเภอเมืองพิษณุโลก จังหวัดพิษณุโลก 65000`,
    tel: `(055)002-190`,
    callCenter: `(055)242-111`,
    image: `/assets/images/contact-us/image3.gif`
  },
  {
    id: 4,
    name: `สาขา อุบลราชธานี`,
    address: `เลขที่ 11/2 ถนนเลี่ยงเมือง ตำบลในเมือง อำเภอเมืองอุบลราชธานี จังหวัดอุบลราชธานี 34000`,
    tel: `(045)951-560`,
    callCenter: `(045)316-900`,
    image: `/assets/images/contact-us/image4.jpeg`
  },
  {
    id: 5,
    name: `สาขา ขอนแก่น​`,
    address: `เลขที่ 769/9-10 หมู่ที่ 2 ตำบลศิลา อำเภอเมืองขอนแก่น จังหวัดขอนแก่น 40000​`,
    tel: `(043)002-540`,
    callCenter: `(043)242-166-7`,
    image: `/assets/images/contact-us/image5.jpeg`
  }
];
const OfficeAddressMap = () => {

  const [office, setOffice] = React.useState(offices[0]);
  const handleChange = (idx) => {
    setOffice(offices[idx]);
  };
  return (
    <div className={"grid grid-cols-2"}>
      <div className={"text-white"}>
        <InputLabel id="demo-simple-select-helper-label" className={"text-white"}> ติดต่อ KTBL</InputLabel>
        <select className={"camil"}
                onChange={e => handleChange(e.target.value)}
        >
          {offices.map((item: any, index: number) => {
            return (
              <option value={index} key={index}>
                {item.name}
              </option>
            );
          })}
        </select>

        <div className={'mt-10'}>
          <p className={"text-4xl"}>{office?.name}</p>
          <p className={"pt-5"}>{office?.address}</p>
          <div className={'block-icon pt-2'}>
            <Image className={'icon'} alt={'tel'} src={'/assets/images/icon-tel-white.png'} width={16} height={16}></Image>
            <a href={`tel:${office?.tel}`}>{office?.tel}</a>
          </div>
          <div className={'block-icon pt-2'}>
            <Image className={'icon'} alt={'tel'} src={'/assets/images/icon-tel-white.png'} width={16} height={16}></Image>
            <a href={`tel:${office?.callCenter}`}>{office?.callCenter}</a>
          </div>
        </div>
      </div>
      <div className={"relative"} style={{ minHeight: "450px" }}>
        <Image objectFit={"cover"} src={office?.image} alt="map" fill />
      </div>
    </div>
  );
};
export default OfficeAddressMap;
