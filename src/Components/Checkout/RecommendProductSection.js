import { Button } from 'antd';
import React from 'react';
import styled from 'styled-components';

import ProductCardSection from '../common/ProductCardSection';

const RecommendProductSection = styled(({ className, title, products }) => {
  return (
    <div className={className}>
      <div style={{ fontSize: '20px' }}>{title}</div>
      <ProductCardSection products={products} />
      <Button
        type="primary"
        style={{
          background: '#C53735',
          border: 'none',
          marginTop: '25px',
          width: '240px',
          height: '50px',
          alignSelf: 'center',
        }}
      >
        ดูเพิ่มเติม
      </Button>
    </div>
  );
})`
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  width: 1085px;
`;

export default RecommendProductSection;
