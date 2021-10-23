import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import { ReactComponent as FacebookIcon } from '../../assets/facebook-icon.svg';
import { ReactComponent as IgIcon } from '../../assets/ig-icon.svg';

const FooterContainer = styled(({ className, children }) => (
  <footer className={className}>{children}</footer>
))`
  display: flex;
  flex-direction: row;
  padding-left: 300px;
  padding-top: 50px;
  padding-bottom: 40px;
  background-color: black;
  height: 315px;
`;

const SubfooterContainer = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: inherit;
  height: 100%;
`;

const FooterContentCardContainer = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  flex-direction: row;
  background-color: inherit;
`;

const FooterContentCard = styled(({ className, children, title }) => {
  return (
    <div className={className}>
      <div style={{ fontSize: '24px', paddingBottom: '5px', fontWeight: 'bold' }}>{title}</div>
      <div style={{ fontSize: '16px', display: 'flex', flexDirection: 'column' }}>{children}</div>
    </div>
  );
})`
  &,
  div a {
    color: white;
    padding-bottom: 5px;
  }
  margin-right: 240px;
  width: 115px;
`;

const FooterContactCard = styled(({ className, children, title }) => {
  return (
    <div className={className}>
      <div style={{ fontSize: '24px', paddingBottom: '5px', fontWeight: 'bold' }}>{title}</div>
      <div style={{ fontSize: '16px', display: 'flex', flexDirection: 'row' }}>{children}</div>
    </div>
  );
})`
  &,
  div a {
    color: white;
  }
  margin-right: 190px;
  width: 115px;
`;

const FooterMiscBox = styled(({ className, children }) => {
  return <div className={className}>{children}</div>;
})`
  display: flex;
  flex-direction: row;
  div {
    color: white;
    padding-right: 20px;
  }
`;

const iconButtonStyle = { width: '24px', height: '24px', marginRight: '10px' };
const textButtonStyle = { fontSize: 18 };

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <SubfooterContainer>
          <FooterContentCardContainer>
            <FooterContentCard title="เกี่ยวกับเรา">
              <a href="#foo">About us</a>
              <a href="#foo">ติดต่อเรา</a>
              <a href="#foo">ร่วมงานกับเรา</a>
              <a href="#foo">ข้อมูลเพิ่มเติม</a>
            </FooterContentCard>
            <FooterContentCard title="ช่วยเหลือ">
              <a href="#foo">คำถามที่พบบ่อย</a>
              <a href="#foo">ขายสินค้ากับเรา</a>
              <a href="#foo">การจัดส่ง</a>
              <a href="#foo">การคืนสินค้า</a>
            </FooterContentCard>
            <FooterContactCard title="ติดตามเรา">
              <Button type="text" size="small" style={iconButtonStyle}>
                <FacebookIcon style={iconButtonStyle} />
              </Button>
              <Button type="text" size="small" style={iconButtonStyle}>
                <IgIcon style={iconButtonStyle} />
              </Button>
            </FooterContactCard>
          </FooterContentCardContainer>
          <FooterMiscBox>
            <div>Terms & Condition</div>
            <div>Privacy Policy</div>
          </FooterMiscBox>
        </SubfooterContainer>
      </FooterContainer>
    </>
  );
};

export default Footer;
