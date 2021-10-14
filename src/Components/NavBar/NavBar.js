import React from 'react';
import styled from 'styled-components';
import { Button, Input } from 'antd';
import { ReactComponent as LoopbyLogoComponent } from '../../assets/loopby_logo.svg';
import { ReactComponent as CartIcon } from '../../assets/cart-icon.svg';
import { ReactComponent as HeartIcon } from '../../assets/heart-icon.svg';
import { ReactComponent as SearchIcon } from '../../assets/search-icon.svg';

const NavBarContainer = styled(({ className, children }) => (
  <nav className={className}>{children}</nav>
))`
  display: flex;
  position: sticky;
  align-items: center;
  justify-content: space-around;
  height: 90px;
  width: 100%;
  box-shadow: 0 1px 20px #adacaa;
`;

const Section = ({ className, children, width }) => {
  return (
    <div className={className} style={{ width }}>
      {children}
    </div>
  );
};

const StyledSection = styled(Section)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LoopbyLogo = styled(({ className }) => <LoopbyLogoComponent className={className} />)`
  width: 107px;
  height: 45px;
`;

const StyledSearch = styled(({ className, ...props }) => (
  // eslint-disable jsx-props-no-spreading
  <Input className={className} placeholder="ค้นหาสินค้า" {...props} />
))`
  width: 255px;
`;

const iconButtonStyle = { width: '24px', height: '24px' };
const textButtonStyle = { fontSize: 18 };

// const StyledButton = styled(({ className, children, ...props }) => (
//   <Button className={className} type="text" size="small" {...props}>
//     {children}
//   </Button>
// ))`
//   .ant-btn-text:hover,
//   .ant-btn-text:focus {
//     background: red;
//     border-color: transparent;
//   }
// `;

const NavBar = () => {
  return (
    <>
      <NavBarContainer>
        <StyledSection width="400px">
          <LoopbyLogo />
          <Button type="text" style={textButtonStyle}>
            ผู้หญิง
          </Button>
          <Button type="text" style={textButtonStyle}>
            ผู้ชาย
          </Button>
        </StyledSection>
        <StyledSection width="400px">
          <StyledSearch prefix={<SearchIcon />} />
          <Button type="text" size="small" style={iconButtonStyle}>
            <HeartIcon style={iconButtonStyle} />
          </Button>
          <Button type="text" size="small" style={iconButtonStyle}>
            <CartIcon style={iconButtonStyle} />
          </Button>
        </StyledSection>
      </NavBarContainer>
    </>
  );
};

export default NavBar;
