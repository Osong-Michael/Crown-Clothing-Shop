import { useContext } from 'react';
import CheckoutItem from '../../Components/CheckoutItem';
import { CartContext } from '../../Context/cartContext';

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './index.styles';


const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
  
    return (
      <CheckoutContainer>
        <CheckoutHeader>
          <HeaderBlock>
            <span>Product</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Description</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Quantity</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Price</span>
          </HeaderBlock>
          <HeaderBlock>
            <span>Remove</span>
          </HeaderBlock>
        </CheckoutHeader>
        {cartItems.map((cartItem) => (
          <CheckoutItem key={cartItem.id} cartItem={cartItem} />
        ))}
        <Total>TOTAL: ${cartTotal}</Total>
      </CheckoutContainer>
    );
};
  
export default Checkout;