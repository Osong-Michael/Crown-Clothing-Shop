import { useContext } from 'react';
import CartItem from '../CartItem';
import { CartContext } from '../../Context/cartContext';

import CustomButton from '../CustomButton';
import './index.scss';


const CartDropdown = () => {
    const { cartItems } = useContext(CartContext);

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map(item => <CartItem key={item.id} cartItem={item} />)}
            </div>
            <CustomButton>Go to checkout</CustomButton>
        </div>
    );
};


export default CartDropdown;