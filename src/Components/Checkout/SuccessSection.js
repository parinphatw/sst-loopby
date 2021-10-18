import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SuccessIcon } from '../../assets/success-icon.svg';

const ButtonSection = styled(({ className }) => (
  <div className={className}>
    <Button style={{ borderColor: '#C53735', color: '#C53735' }}>เลือกดูสินค้าต่อ</Button>
    <Button type="primary" style={{ background: '#C53735', border: 'none' }}>
      ดูคำสั่งซื้อ
    </Button>
  </div>
))`
  display: flex;
  justify-content: space-between;
  width: 100%;
  button {
    width: 150px;
  }
`;

const SuccessSection = styled(({ className }) => (
  <div className={className}>
    <SuccessIcon />
    <div style={{ fontSize: '30px', fontWeight: 'bold' }}>ขอบคุณสำหรับคำสั่งซื้อ</div>
    <ButtonSection />
  </div>
))`
  display: flex;
  flex-direction: column;
  width: 330px;
  height: 290px;
  justify-content: space-around;
  align-items: center;
  margin-top: 40px;
`;

export default SuccessSection;
