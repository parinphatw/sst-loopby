import React from 'react';
import styled from 'styled-components';
import PurchaseFormSection from '../Components/Checkout/PurchaseFormSection';
import SummarySection from '../Components/Checkout/SummarySection';

const CheckoutContainer = styled(({ className, children }) => (
  <div className={className}>{children}</div>
))`
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 950px;
`;

const Checkout = () => {
  return (
    <CheckoutContainer>
      <PurchaseFormSection />
      <SummarySection />
    </CheckoutContainer>
  );
};

export default Checkout;
