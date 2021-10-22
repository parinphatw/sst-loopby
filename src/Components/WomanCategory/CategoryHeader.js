import React from 'react';
import styled from 'styled-components';

import { Select } from 'antd';

const { Option } = Select;

const CategoryHeaderContainer = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LeftPart = ({ title }) => (
  <div style={{ display: 'flex', alignItems: 'center', fontSize: '24px' }}>{title}</div>
);

const RightPart = styled(({ className }) => (
  <div className={className}>
    <div style={{ marginRight: '10px' }}>เรียงตาม</div>
    <Select defaultValue="สินค้าแนะนำ" style={{ width: 120 }}>
      <Option value="สินค้าแนะนำ">สินค้าแนะนำ</Option>
      <Option value="โปรโมชั่น">โปรโมชั่น</Option>
      <Option value="สินค้ามาใหม่">สินค้ามาใหม่</Option>
    </Select>
  </div>
))`
  display: flex;
  align-items: center;
`;

const CategoryHeader = () => (
  <CategoryHeaderContainer>
    <LeftPart title="ผู้หญิง" />
    <RightPart />
  </CategoryHeaderContainer>
);

export default CategoryHeader;
