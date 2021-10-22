import React from 'react';
import styled from 'styled-components';

import CategoryHeader from './CategoryHeader';
import ProductCardSection from './ProductCardSection';

const ProductCardContainer = styled(({ className, products }) => (
  <div className={className}>
    <CategoryHeader />
    <div
      style={{ width: '100%', height: 0, borderBottom: '.5px solid #BDBDBD', marginTop: '10px' }}
    />
    <ProductCardSection products={products} />
  </div>
))`
  display: flex;
  flex-direction: column;
  width: 860px;
  margin-left: 200px;
`;

export default ProductCardContainer;
