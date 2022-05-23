import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import CartItem from '../CartItem';
import { CartContext } from '../../Context/cartContext';

import CustomButton from '../CustomButton';
import './index.scss';


const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    };

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
            </div>
            <CustomButton onClick={goToCheckoutHandler}>Go to checkout</CustomButton>
        </div>
    );
};


export default CartDropdown;