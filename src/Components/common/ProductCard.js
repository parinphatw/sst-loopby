/* eslint-disable prefer-template */
import { Card } from 'antd';
import React from 'react';
import styled from 'styled-components';

const ProductCard = styled(({ className, imgSrc, productTitle, price, badge }) => {
  return (
    <Card
      className={className}
      bordered={false}
      hoverable
      style={{ width: '260px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      cover={<img src={imgSrc} alt={productTitle} style={{ height: '320px' }} />}
    >
      <div style={{ fontSize: '16px' }}>{productTitle}</div>
      <div style={{ color: '#C53735', fontSize: '20px', fontWeight: 'bold' }}>{'฿' + price}</div>
    </Card>
  );
})`
  width: 260px;
  display: flex;
  align-items: center;
  .ant-card-body {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export default ProductCard;
