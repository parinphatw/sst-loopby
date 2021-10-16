import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

const StoreDetailBoxContainer = styled(({ className, children }) => {
  return <div className={className}>{children}</div>;
})`
  display: flex;
  padding: 5px;
  border: 1px solid #d7d7d7;
  margin-top: 10px;
`;

const StoreTitleSection = styled(({ className, storeName, lastActive }) => {
  return (
    <div className={className}>
      <div>{storeName}</div>
      <div>{lastActive}</div>
    </div>
  );
})`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  justify-content: center;
`;

const RatingContainer = styled(({ className, storeRating, chatResponseRate }) => {
  return (
    <div className={className}>
      <StoreRatingSection storeRating={storeRating} />
      <div style={{ borderRight: '0.5px solid lightgray', height: '40px' }} />
      <ChatResponseRateSection chatResponseRate={chatResponseRate} />
    </div>
  );
})`
  display: flex;
  margin-left: 30px;
  align-items: center;
`;

const StoreRatingSection = styled(({ className, storeRating }) => {
  return (
    <div className={className}>
      <div>{storeRating}</div>
      <div>คะแนน</div>
    </div>
  );
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const ChatResponseRateSection = styled(({ className, chatResponseRate }) => {
  return (
    <div className={className}>
      <div>{chatResponseRate}</div>
      <div>การตอบแชท</div>
    </div>
  );
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
`;

const ButtonSection = styled(({ children, className }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 140px;
  margin-left: 50px;
`;

const StoreDetailBox = ({
  storeProfileImg,
  storeName,
  storeRating,
  chatResponseRate,
  lastActive,
}) => {
  return (
    <StoreDetailBoxContainer>
      <img src={storeProfileImg} alt="shop profile img" style={{ width: '50px', height: '50px' }} />
      <StoreTitleSection storeName={storeName} lastActive={lastActive} />
      <RatingContainer storeRating={storeRating} chatResponseRate={chatResponseRate} />
      <ButtonSection>
        <Button type="primary" style={{ background: '#C53735', border: 'none' }}>
          แชท
        </Button>
        <Button style={{ borderColor: '#C53735', color: '#C53735' }}>ดูร้านค้า</Button>
      </ButtonSection>
    </StoreDetailBoxContainer>
  );
};

export default StoreDetailBox;
