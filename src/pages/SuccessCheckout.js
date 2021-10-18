import React from 'react';
import styled from 'styled-components';
import RecommendProductSection from '../Components/Checkout/RecommendProductSection';

import SuccessSection from '../Components/Checkout/SuccessSection';
import SuccessSummaryDetialSection from '../Components/Checkout/SuccessSummaryDetailSection';

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
];

const SuccessCheckoutContainer = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 1800px;
`;

const SuccessCheckout = () => {
  return (
    <SuccessCheckoutContainer>
      <SuccessSection />
      <SuccessSummaryDetialSection />
      <RecommendProductSection title="คุณน่าจะชอบ" products={products} />
    </SuccessCheckoutContainer>
  );
};

export default SuccessCheckout;
