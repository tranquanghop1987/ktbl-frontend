'use client';

import React from 'react';
import { TextField } from '@mui/material';
import Select from '../Select';
import './style.css';
import PrimaryButton from '../Button';
import { FORM_SELECT } from '../../modules/global';
const ProductForm = () => {
  return (
    <div className="container mx-auto py-10  text-center">
      <h3 className="py-2 ">สมัครผลิตภัณฑ์</h3>
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-4 p-4">
        <div>
          <TextField id="outlined-basic" label="ชื่อผู้ให้ติดต่อกลับ" variant="outlined" fullWidth />
        </div>
        <div>
          <TextField id="outlined-basic" label="เบอร์สำหรับติดต่อกลับ" variant="outlined" fullWidth />
        </div>
        <div>
          <TextField id="outlined-basic" label="ชื่อบริษัท / ชื่อผู้สมัคร" variant="outlined" fullWidth />
        </div>
        <div>
          <Select label="ประเภทธุรกิจ" typeValue="text" options={FORM_SELECT.businessProduct} />
        </div>
        <div>
          <Select label="จังหวัด" typeValue="text" options={FORM_SELECT.province} />
        </div>
        <div>
          <Select label="เขต / อำเภอ" />
        </div>
        <div>
          <Select label="ประเภทรถที่ต้องการ" typeValue="text" options={FORM_SELECT.PreferredCarType} />
        </div>
        <div>
          <Select label="ระยะเวลาที่ต้องการเช่า" typeValue="text" options={FORM_SELECT.LengthTime} />
        </div>
      </div>
      <div className="mx-auto my-4">
        <PrimaryButton text="ส่งข้อมูล" width={196} />
      </div>
    </div>
  );
};

export default ProductForm;
