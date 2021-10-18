/* eslint-disable prefer-template */
import React from 'react';
import styled from 'styled-components';
import { Button, Input } from 'antd';

const SummarySectionContainer = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  flex-direction: column;
  width: 420px;
  margin-left: 50px;
  margin-top: 45px;
`;
const SummaryDetial = styled(({ className }) => {
  return (
    <div className={className}>
      <h1 style={{ marginBottom: '8px;', fontSize: '24px', fontWeight: 'bold' }}>
        สรุปข้อมูลการสั่งซื้อ
      </h1>
      <SubdetailField fieldName="ยอดรวม" price={400} />
      <SubdetailField fieldName="ค่าส่ง" price={35} />
      <SubdetailField fieldName="ยอดรวมทั้งสิ้น" price={435} />
      <div style={{ height: 0, width: '100%', borderBottom: '1px solid #D7D7D7' }} />
      <Button type="primary" style={{ background: '#C53735', border: 'none' }}>
        ชำระเงิน
      </Button>
      <Button style={{ borderColor: '#C53735', color: '#C53735' }}>เลือกดูสินค้าต่อ</Button>
    </div>
  );
})`
  display: flex;
  flex-direction: column;
  * {
    margin-bottom: 4px;
  }
  button {
    margin-top: 15px;
  }
`;

const SubdetailField = styled(({ className, fieldName, price, isTotalPrice }) => (
  <div className={className}>
    <div>{fieldName}</div>
    <div>{'฿' + price}</div>
  </div>
))`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

const FormSection = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  flex-direction: column;
  margin-top: 45px;
`;

const FormSectionTitle = styled(({ className, title }) => (
  <div className={className}>
    <div style={{ fontWeight: 'bold', fontSize: '17px' }}>{title}</div>
  </div>
))`
  display: flex;
  align-items: center;
  background-color: #f4f4f4;
  width: 100%;
  height: 40px;
  padding-left: 15px;
`;

const CouponSection = styled(({ className }) => (
  <div className={className}>
    <Input placeholder="ใส่รหัสคูปองที่นี่" />
    <Button type="primary" style={{ background: '#C53735', border: 'none' }}>
      ยืนยัน
    </Button>
  </div>
))`
  display: flex;
  margin-top: 20px;
  button {
    margin-left: 10px;
  }
  padding: 0 15px;
`;

const SummarySection = () => {
  return (
    <SummarySectionContainer>
      <SummaryDetial />
      <FormSection>
        <FormSectionTitle title="คูปอง" />
        <CouponSection />
      </FormSection>
    </SummarySectionContainer>
  );
};

export default SummarySection;
