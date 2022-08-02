import { useSelector, useDispatch } from 'react-redux';
import { selectCartCount } from '../../Store/Cart/cart.selectors';
import { setIsCartOpen } from '../../Store/Cart/cart.actions';

import { CartIconContainer, ShoppingIcon, ItemCount } from './index.styles';

const CartIcon = () => {
    const dispatch = useDispatch();
    const cartCount = useSelector(selectCartCount);

    const toggleIsCartOpen = () => dispatch(setIsCartOpen());
    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingIcon />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    );
};

export default CartIcon;