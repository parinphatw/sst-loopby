import React from 'react';
import styled from 'styled-components';

const FormSection = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  flex-direction: column;
  margin-top: 45px;
  width: 650px;
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

const OrderFormContent = styled(({ className }) => (
  <div className={className}>
    <div style={{ marginTop: '10px' }}>รายการสั่งซื้อ</div>
    <OrderCard />
  </div>
))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 40px;
`;

// copy from ProductDetailBox.js
const OrderCard = styled(({ className }) => (
  <div className={className}>
    <img
      src="https://t4.ftcdn.net/jpg/02/95/32/11/360_F_295321140_nelA17QB0OAVEZuNHrIkiNq9PqwljRqM.jpg"
      width="60px"
      alt="good bye"
    />
    <div style={{ display: 'flex', flexDirection: 'column', width: '260px' }}>
      <div>เสื้อผู้หญิง คอกลม แขนตุ๊กตา ผ้าลินิน เรียบง่าย สไตล์มินิมอล</div>
      <div>ไซส์ : L</div>
    </div>
    <div style={{ color: '#C53735', fontWeight: 'bold', fontSize: '16px' }}>400฿</div>
  </div>
))`
  display: flex;
  align-items: center;
  justify-content: space-between;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;

const FakeDropDown = styled(({ className, children }) => (
  <div className={className}>
    <div>{children}</div>
    <div style={{ fontSize: '25px' }}>+</div>
  </div>
))`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 0.8px solid #d7d7d7;
`;

const SuccessSummaryDetialSection = () => (
  <FormSection>
    <FormSectionTitle title="สรุปคำสั่งซื้อ" />
    <OrderFormContent />
    <div style={{ marginTop: '40px', borderBottom: '1px solid #D7D7D7' }} />
    <FakeDropDown>รายละเอียดเพิ่มเติม</FakeDropDown>
  </FormSection>
);

export default SuccessSummaryDetialSection;
