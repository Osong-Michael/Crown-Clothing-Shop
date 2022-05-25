import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../CartItem';
import { CartContext } from '../../Context/cartContext';

import CustomButton from '../CustomButton';
import { CartDropdownContainer, EmptyMessage, CartItems } from './index.styles';


const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    };

    return (
        <CartDropdownContainer>
            <CartItems>
                { cartItems.length ? (
                    cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
                ) : (
                    <EmptyMessage>Your Cart is Empty</EmptyMessage>
                )}
            </CartItems>
            <CustomButton onClick={goToCheckoutHandler}>Go to checkout</CustomButton>
        </CartDropdownContainer>
    );
};


export default CartDropdown;