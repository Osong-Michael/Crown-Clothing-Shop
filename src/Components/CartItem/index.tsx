import { FC } from 'react';
import { CartItemContainer, ItemDetails, Name } from './index.styles';

type CartItemProps = {
  cartItem: {
    imageUrl: string;
    price: number;
    name: string;
    quantity: number;
  }
};

const CartItem: FC<CartItemProps> = ({ cartItem }) => {
  const { imageUrl, price, name, quantity } = cartItem;

  return (
    <CartItemContainer>
      <img src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <span>
          {quantity} x ${price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;