import React from 'react';
import styled from 'styled-components';
import { Button, Input, Select, Radio } from 'antd';
import { ReactComponent as BinIcon } from '../../assets/bin-icon.svg';

const iconButtonStyle = { width: '24px', height: '24px' };

const PurchaseFormSectionContainer = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  flex-direction: column;
  height: 800px;
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

const AddressFormSectionContent = styled(({ className }) => (
  <div
    style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginTop: '15px' }}
  >
    <div className={className}>
      <InputLabel label="ชื่อ-สกุล" placeholder="ชื่อ-สกุล" />
      <InputLabel label="หมายเลขโทรศัพท์" placeholder="หมายเลขโทรศัพท์" />
      <InputLabel label="ที่อยู่" placeholder="ที่อยู่ (บ้านเลขที่ ตำบล ถนน)" />
      <InputLabel label="จังหวัด" placeholder="กรุณาเลือกจังหวัด" isSelect />
      <InputLabel label="เขต/อำเภอ" placeholder="กรุณาเลือกเขต/อำเภอ" isSelect />
      <InputLabel label="รหัสไปรษณีย์" placeholder="กรุณาเลือกรหัสไปรษณีย์" isSelect />
    </div>
    <Button type="primary" style={{ background: '#C53735', border: 'none', marginTop: '25px' }}>
      บันทึก
    </Button>
  </div>
))`
  display: grid;
  width: 100%;
  padding-left: 15px;
  grid-template-columns: auto auto;
  grid-column-gap: 60px;
  grid-row-gap: 20px;
`;

const OrderAndExpressFormContent = styled(({ className }) => (
  <div className={className}>
    <div style={{ marginTop: '10px' }}>เลือกการจัดส่ง</div>
    <RadioContent />
    <div style={{ marginTop: '10px' }}>รายการสั่งซื้อ</div>
    <OrderCard />
  </div>
))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 15px;
`;

const RadioContent = () => {
  return (
    <Radio.Group defaultValue={1}>
      <Radio value={1} style={{ border: '1px solid #f4f4f4', padding: '2px' }}>
        <div>฿35</div>
        <div>ไปรษณีย์ไทย -​ ธรรมดา</div>
        <div>ใช้เวลาจัดส่ง 3 - 7 วัน</div>
      </Radio>
      <Radio value={2} style={{ border: '1px solid #f4f4f4', padding: '2px' }}>
        <div>฿55</div>
        <div>ไปรษณีย์ไทย -​ EMS</div>
        <div>ใช้เวลาจัดส่ง 1 - 3 วัน</div>
      </Radio>
      <Radio value={3} style={{ border: '1px solid #f4f4f4', padding: '2px' }}>
        <div>฿50</div>
        <div>Kerry Express</div>
        <div>ใช้เวลาจัดส่ง 1 - 3 วัน</div>
      </Radio>
    </Radio.Group>
  );
};

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
    <Button type="text" size="small" style={{ width: '30px', height: '30px' }}>
      <BinIcon style={iconButtonStyle} />
    </Button>
  </div>
))`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
  }
`;

const PaymentMethodFormContent = styled(({ className }) => (
  <div className={className}>
    <div style={{ marginTop: '15px' }}>เลือกช่องทางการชำระ</div>
    <Radio.Group defaultValue={1}>
      <Radio value={1}>เก็บเงินปลายทาง</Radio>
      <Radio value={2}>เดบิต/เครดิต</Radio>
      <Radio value={3}>Mobile banking</Radio>
      <Radio value={4}>PromptPay</Radio>
    </Radio.Group>
  </div>
))`
  display: flex;
  flex-direction: column;
  padding-left: 15px;
  div {
    margin-top: 5px;
  }
`;

const InputLabel = styled(({ className, label, placeholder, isSelect }) => (
  <div className={className}>
    <div>{label}</div>
    {isSelect ? <Select placeholder={placeholder} /> : <Input placeholder={placeholder} />}
  </div>
))`
  display: flex;
  flex-direction: column;
`;

const PurchaseFormSection = () => {
  return (
    <PurchaseFormSectionContainer>
      <FormSection>
        <FormSectionTitle title="ที่อยู่ในการจัดส่ง" />
        <AddressFormSectionContent />
      </FormSection>
      <FormSection>
        <FormSectionTitle title="รายการสั่งซื้อและการจัดส่ง" />
        <OrderAndExpressFormContent />
      </FormSection>
      <FormSection>
        <FormSectionTitle title="วิธีการชำระเงิน" />
        <PaymentMethodFormContent />
      </FormSection>
    </PurchaseFormSectionContainer>
  );
};

export default PurchaseFormSection;
