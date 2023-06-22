'use client';

import { Col, Row, Typography } from 'antd';
import React from 'react';
import { TextField } from '@mui/material';
import Select from '../Select';
import './style.css';
import Button from '../Button';
const ProductForm = (props: any) => {
  return (
    <div className="product-form">
      <Typography.Title level={3}>สมัครผลิตภัณฑ์</Typography.Title>
      <Row gutter={[28, 54]}>
        <Col md={12} xs={24}>
          <TextField id="outlined-basic" label="ชื่อผู้ให้ติดต่อกลับ" variant="outlined" fullWidth />
        </Col>
        <Col md={12} xs={24}>
          <TextField id="outlined-basic" label="เบอร์สำหรับติดต่อกลับ" variant="outlined" fullWidth />
        </Col>
        <Col md={12} xs={24}>
          <TextField id="outlined-basic" label="ชื่อบริษัท / ชื่อผู้สมัคร" variant="outlined" fullWidth />
        </Col>
        <Col md={12} xs={24}>
          <Select label="ประเภทธุรกิจ" />
        </Col>
        <Col md={12} xs={24}>
          <Select label="จังหวัด" />
        </Col>
        <Col md={12} xs={24}>
          <Select label="เขต / อำเภอ" />
        </Col>
        <Col md={12} xs={24}>
          <Select label="ประเภทรถที่ต้องการ" />
        </Col>
        <Col md={12} xs={24}>
          <Select label="ระยะเวลาที่ต้องการเช่า" />
        </Col>
        <Col span={24}>
          <Button text="ส่งข้อมูล" width={196} />
        </Col>
      </Row>
    </div>
  );
};

export default ProductForm;
