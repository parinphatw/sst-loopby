import React from 'react';
import styled from 'styled-components';
import ImageSlider from '../Components/ImageSlider/ImageSlider';
import ProductDetailBox from '../Components/ProductDetail/ProductDetailBox';
import StoreDetailBox from '../Components/ProductDetail/StoreDetailBox';
import ProductCard from '../Components/common/ProductCard';

/*  Dummy variable  */
const [productTitle, price, size, note, loved] = [
  'เสื้อผู้หญิง คอกลม แขนตุ๊กตา ผ้าลินิน เรียบง่าย สไตล์มินิมอล',
  400,
  'L',
  'A lovely clothes',
  true,
];

const images = [
  'https://rukminim1.flixcart.com/image/714/857/j15b6a80/t-shirt/e/g/b/xl-1217443-ether-original-imaesga3ddhehzwj.jpeg?q=50',
  'https://secure.ap-tescoassets.com/assets/TH/950/2502010729950/ShotType1_540x540.jpg',
  'https://sonic-sky.com/wp-content/uploads/2020/09/TW0001-002-Women-T-Shirt-Round-Neck-Black-back-scaled.jpg',
];

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

const storeProfileImg = 'https://i1.sndcdn.com/avatars-000399848019-jvvp3g-t500x500.jpg';
const storeName = 'Hello shop';
const storeRating = 4.8;
const chatResponseRate = 99;
const lastActive = '1 hour ago';

/* end of dummy var */

const ProductDetailContainer = styled(({ children, className }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 1250px;
  /* padding-left: 350px; */
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

const MiniProductContainer = styled(({ className, title, products, backgroundColor }) => (
  <div className={className} style={{ backgroundColor: backgroundColor ?? 'inherit' }}>
    {title && <div style={{ fontSize: '30px', marginTop: '20px' }}>{title}</div>}
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
  width: 1225px;
  margin-top: 30px;
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
    <MiniProductContainer title="คุณอาจจะชอบ" products={products} />
  </ProductDetailContainer>
);

export default ProductDetail;
