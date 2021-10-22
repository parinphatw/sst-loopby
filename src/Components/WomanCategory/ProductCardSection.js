import React from 'react';
import styled from 'styled-components';

import ProductCard from '../common/ProductCard';

const ProductCardSection = styled(({ products, className }) => {
  return (
    <div className={className}>
      {products.map((product) => {
        return (
          <ProductCard
            imgSrc={product.imgSrc}
            productTitle={product.productTitle}
            price={product.price}
            badge
          />
        );
      })}
    </div>
  );
})`
  display: grid;
  width: 100%;
  grid-template-columns: auto auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  margin-top: 30px;
`;

export default ProductCardSection;
