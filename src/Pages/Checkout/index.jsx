import { useSelector } from 'react-redux';
import CheckoutItem from '../../Components/CheckoutItem';
import PaymentForm from '../../Components/PaymentForm';
import { selectCartItems, selectCartTotal } from '../../Store/Cart/cart.selectors';

import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from './index.styles';


const Checkout = () => {
    const cartItems = useSelector(selectCartItems);
    const cartTotal = useSelector(selectCartTotal);
  
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
        <PaymentForm />
      </CheckoutContainer>
    );
};
  
export default Checkout;