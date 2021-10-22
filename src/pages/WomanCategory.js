import React from 'react';
import styled from 'styled-components';

import AdvancedFilter from '../Components/WomanCategory/AdvancedFilter';
import ProductCardContainer from '../Components/WomanCategory/ProductCardContainer';

const products = [
  {
    imgSrc:
      'https://www.greenqueen.com.hk/wp-content/uploads/2021/07/Rental-Fashion-Causes-More-Emissions-Than-Throwing-Clothes-Away.jpg',
    productTitle: 'เสื้อมือสอง',
    price: 400,
  },
  {
    imgSrc:
      'https://www.greenqueen.com.hk/wp-content/uploads/2021/07/Rental-Fashion-Causes-More-Emissions-Than-Throwing-Clothes-Away.jpg',
    productTitle: 'เสื้อมือสอง',
    price: 400,
  },
  {
    imgSrc:
      'https://www.greenqueen.com.hk/wp-content/uploads/2021/07/Rental-Fashion-Causes-More-Emissions-Than-Throwing-Clothes-Away.jpg',
    productTitle: 'เสื้อมือสอง',
    price: 400,
  },
  {
    imgSrc:
      'https://www.greenqueen.com.hk/wp-content/uploads/2021/07/Rental-Fashion-Causes-More-Emissions-Than-Throwing-Clothes-Away.jpg',
    productTitle: 'เสื้อมือสอง',
    price: 400,
  },
  {
    imgSrc:
      'https://www.greenqueen.com.hk/wp-content/uploads/2021/07/Rental-Fashion-Causes-More-Emissions-Than-Throwing-Clothes-Away.jpg',
    productTitle: 'เสื้อมือสอง',
    price: 400,
  },
  {
    imgSrc:
      'https://www.greenqueen.com.hk/wp-content/uploads/2021/07/Rental-Fashion-Causes-More-Emissions-Than-Throwing-Clothes-Away.jpg',
    productTitle: 'เสื้อมือสอง',
    price: 400,
  },
  {
    imgSrc:
      'https://www.greenqueen.com.hk/wp-content/uploads/2021/07/Rental-Fashion-Causes-More-Emissions-Than-Throwing-Clothes-Away.jpg',
    productTitle: 'เสื้อมือสอง',
    price: 400,
  },
  {
    imgSrc:
      'https://www.greenqueen.com.hk/wp-content/uploads/2021/07/Rental-Fashion-Causes-More-Emissions-Than-Throwing-Clothes-Away.jpg',
    productTitle: 'เสื้อมือสอง',
    price: 400,
  },
  {
    imgSrc:
      'https://www.greenqueen.com.hk/wp-content/uploads/2021/07/Rental-Fashion-Causes-More-Emissions-Than-Throwing-Clothes-Away.jpg',
    productTitle: 'เสื้อมือสอง',
    price: 400,
  },
];

const WomanCategory = styled(({ className }) => {
  return (
    <div className={className}>
      <AdvancedFilter />
      <ProductCardContainer products={products} />
    </div>
  );
})`
  display: flex;
  padding: 60px 275px;
  justify-content: center;
`;

export default WomanCategory;
