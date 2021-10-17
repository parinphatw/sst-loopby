import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';
import PurchaseFormSection from '../Components/Checkout/PurchaseFormSection';

const CheckoutContainer = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  justify-content: center;
  height: 950px;
`;

const Checkout = () => {
  return (
    <CheckoutContainer>
      <PurchaseFormSection />
    </CheckoutContainer>
  );
};

export default Checkout;
