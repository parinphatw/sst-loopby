import React from 'react';
import styled from 'styled-components';
import ImageSlider from '../Components/ImageSlider/ImageSlider';
import ProductDetailBox from '../Components/ProductDetail/ProductDetailBox';
import StoreDetailBox from '../Components/ProductDetail/StoreDetailBox';

/*  Dummy variable  */
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

const storeProfileImg = 'https://i1.sndcdn.com/avatars-000399848019-jvvp3g-t500x500.jpg';
const storeName = 'Hello shop';
const storeRating = 4.8;
const chatResponseRate = 99;
const lastActive = '1 hour ago';

/* end of dummy var */

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

const ProductDetailRightSubsection = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  width: 550px;
  height: 550px;
  margin-left: 25px;
`;

const FakeDropDown = styled(({ className, children }) => (
  <div className={className}>
    <div>{children}</div>
    <div style={{ fontSize: '25px' }}>+</div>
  </div>
))`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
  border-bottom: 0.8px solid #d7d7d7;
`;

const ProductDetail = () => (
  <ProductDetailContainer>
    <ProductDetailSection>
      <ImageSlider images={images} />
      <ProductDetailRightSubsection>
        <ProductDetailBox
          productTitle={productTitle}
          price={price}
          size={size}
          note={note}
          loved={loved}
        />
        <StoreDetailBox
          storeProfileImg={storeProfileImg}
          storeName={storeName}
          storeRating={storeRating}
          chatResponseRate={chatResponseRate}
          lastActive={lastActive}
        />
        <div style={{ height: 0, borderTop: '1px solid #d7d7d7', marginTop: '10px' }} />
        <FakeDropDown style={{ paddingTop: '10px' }}>รายละเอียด</FakeDropDown>
        <FakeDropDown>ไซส์</FakeDropDown>
      </ProductDetailRightSubsection>
    </ProductDetailSection>
  </ProductDetailContainer>
);

export default ProductDetail;
