import React from 'react';
import styled from 'styled-components';
import ImageSlider from '../Components/ImageSlider/ImageSlider';
import ProductDetailBox from '../Components/ProductDetailBox/ProductDetailBox';

const [productTitle, price, size, note, loved] = [
  'เสื้อผู้หญิง คอกลม แขนตุ๊กตา ผ้าลินิน เรียบง่าย สไตล์มินิมอล',
  400,
  'L',
  'A lovely clothes',
  true,
];

const images = [
  'https://img.freepik.com/free-vector/word-hello-speech-bubble-vector_53876-60258.jpg?size=626&ext=jpg',
  'http://www.hello.com/img_/hellowithwaves.png',
  'https://greedisgoods.com/wp-content/uploads/2018/09/Long-%E0%B8%84%E0%B8%B7%E0%B8%AD-Long-%E0%B8%AB%E0%B8%B8%E0%B9%89%E0%B8%99-%E0%B8%AB%E0%B8%A3%E0%B8%B7%E0%B8%AD-Long-Buy.jpg',
];

const ProductDetailContainer = styled(({ children, className }) => (
  <div className={className}>{children}</div>
))`
  height: 1250px;
  padding-left: 350px;
  padding-top: 80px;
`;

const ProductDetailSection = styled(({ children, className }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
`;

const ProductDetail = () => (
  <ProductDetailContainer>
    <ProductDetailSection>
      <ImageSlider images={images} />
      <ProductDetailBox
        productTitle={productTitle}
        price={price}
        size={size}
        note={note}
        loved={loved}
      />
    </ProductDetailSection>
  </ProductDetailContainer>
);

export default ProductDetail;
