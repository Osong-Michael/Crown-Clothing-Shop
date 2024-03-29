import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemsToCart, removeItemFromCart, clearItemFromCart } from '../../Store/Cart/cart.actions';
import { selectCartItems } from '../../Store/Cart/cart.selectors';

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  RemoveButton,
  Value,
} from './index.styles';

type CheckoutItemProps = {
  cartItem: {
    id: number;
    imageUrl: string;
    price: number;
    name: string;
    quantity: number;
  }
};

const CheckoutItem: FC<CheckoutItemProps> = ({ cartItem }) => {
    const { name, imageUrl, price, quantity } = cartItem;
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
  
  
    const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, cartItem));
    const addItemHandler = () => dispatch(addItemsToCart(cartItems, cartItem));
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, cartItem));
  
    return (
      <CheckoutItemContainer>
        <ImageContainer>
          <img src={imageUrl} alt={`${name}`} />
        </ImageContainer>
        <BaseSpan> {name} </BaseSpan>
        <Quantity>
          <Arrow onClick={removeItemHandler}>
            &#10094;
          </Arrow>
          <Value>{quantity}</Value>
          <Arrow onClick={addItemHandler}>
            &#10095;
          </Arrow>
        </Quantity>
        <BaseSpan> {price}</BaseSpan>
        <RemoveButton onClick={clearItemHandler}>
          &#10005;
        </RemoveButton>
      </CheckoutItemContainer>
    );
};
  
export default CheckoutItem;