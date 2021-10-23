import React from 'react';
import styled from 'styled-components';

import { Carousel, Button } from 'antd';

import ProductCard from '../Components/common/ProductCard';
import ProductCardSection from '../Components/common/ProductCardSection';
// import RecommendProductSection from '../Components/Checkout/RecommendProductSection';

import HeadCarouselImg from '../assets/HeadCarousel.png';
import WomanCategoryImage from '../assets/WomanCategory.jpg';
import ManCategoryImage from '../assets/ManCategory.jpg';
import LoopbyMallImage from '../assets/loopby-mall.jpeg';
import RecommendProductSection from '../Components/Checkout/RecommendProductSection';

const carouselImages = [HeadCarouselImg, HeadCarouselImg, HeadCarouselImg];
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
];

const recommendationProducts = [
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

const HomeContainer = ({ children }) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>{children}</div>
);

const HeadCarousel = () => (
  <Carousel autoplay style={{ width: '100%' }}>
    {carouselImages.map((imgSrc, index) => {
      return <img key={index} src={imgSrc} alt="head carousel" />;
    })}
  </Carousel>
);

const CategoryImage = styled(({ className }) => (
  <div className={className}>
    <img src={WomanCategoryImage} alt="woman" />
    <img src={ManCategoryImage} alt="man" />
  </div>
))`
  display: flex;
  width: 1225px;
  justify-content: space-between;
  align-self: center;
  margin-top: 30px;
`;

const MiniProductContainer = styled(({ className, title, products, backgroundColor }) => (
  <div className={className} style={{ backgroundColor: backgroundColor ?? 'inherit' }}>
    {title && <div style={{ fontSize: '40px', marginTop: '20px' }}>{title}</div>}
    <div
      style={{
        width: '1225px',
        display: 'flex',
        justifyContent: 'space-between',
        marginTop: '15px',
      }}
    >
      {products &&
        products.map((product) => {
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
  </div>
))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 30px;
`;

const RecommendationProductSection = styled(({ className, title, products }) => {
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
  align-items: center;
  margin-top: 40px;
  width: 1200px;
  align-self: center;
  margin-bottom: 80px;
`;

const Home = () => (
  <HomeContainer>
    <HeadCarousel />
    <CategoryImage />
    <MiniProductContainer title="โปรโมชั่นร้อน" products={products} />
    <img
      src={LoopbyMallImage}
      alt="loopby mall"
      style={{ width: '1225px', alignSelf: 'center', marginTop: '40px' }}
    />
    <MiniProductContainer products={products} />
    <MiniProductContainer title="สินค้าแบรนด์เนม" products={products} backgroundColor="#F6EDDE" />
    <RecommendationProductSection title="แนะนำสำหรับคุณ" products={recommendationProducts} />
  </HomeContainer>
);

export default Home;
