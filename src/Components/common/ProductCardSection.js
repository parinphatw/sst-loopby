import React from 'react';
import styled from 'styled-components';

import ProductCard from './ProductCard';

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
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 15px;
  grid-row-gap: 15px;
  margin-top: 20px;
`;

export default ProductCardSection;
