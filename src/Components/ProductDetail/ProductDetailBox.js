import React from 'react';
import styled from 'styled-components';
import { Card, Statistic, Button } from 'antd';
import { ReactComponent as HeartIcon } from '../../assets/heart-icon.svg';

const ProductDetailBoxContainer = ({ children, ...props }) => (
  <Card {...props} style={{ width: '100%', height: '330px', border: '1px solid #d7d7d7' }}>
    {children}
  </Card>
);

const ButtonSection = styled(({ children, className }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 180px;
  margin-top: 20px;
`;

const ProductDetailBox = ({ productTitle, price, size, note, loved }) => {
  return (
    <ProductDetailBoxContainer>
      <h1 style={{ fontWeight: 'bold', fontSize: '20px' }}>{productTitle}</h1>
      <Statistic
        value={price}
        prefix="฿"
        valueStyle={{ color: '#C53735', fontWeight: 'bold', fontSize: '20px' }}
      />
      <Statistic
        title="ไซส์"
        value={size ?? '-'}
        valueStyle={{ color: '#7B7B7B', fontSize: '20px' }}
        style={{ marginTop: '8px' }}
      />
      <Statistic
        title="หมายเหตุ"
        value={note ?? 'ไม่มี'}
        valueStyle={{ color: '#7B7B7B', fontSize: '20px' }}
        style={{ marginTop: '8px' }}
      />
      <ButtonSection>
        <Button type="primary" style={{ background: '#C53735', border: 'none' }}>
          เพิ่มลงในตะกร้า
        </Button>
        <Button shape="circle">
          {/* <HeartIcon style={loved ? { stroke: '#C53735' } : null} /> */}
          <HeartIcon />
        </Button>
      </ButtonSection>
    </ProductDetailBoxContainer>
  );
};

export default ProductDetailBox;
