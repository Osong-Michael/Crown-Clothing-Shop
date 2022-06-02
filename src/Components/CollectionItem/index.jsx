import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addItemsToCart } from '../../Store/Cart/cart.actions';
import { selectCartItems } from '../../Store/Cart/cart.selectors';

import CustomButton, { BUTTON_TYPES } from '../CustomButton';
import { CollectionItemContainer, CollectionFooter, BackgroundImage } from './index.styles';

const CollectionItem = ({ product }) => {
    const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems);
    const { name, price, imageUrl } = product;

    const addProductToCart = () => dispatch(addItemsToCart(cartItems, product));

    return (
        <CollectionItemContainer>
            <BackgroundImage imageUrl={imageUrl} />
            <CollectionFooter>
                <span>{name}</span>
                <span>${price}</span>
            </CollectionFooter>
            <CustomButton buttonType={BUTTON_TYPES.inverted} onClick={addProductToCart}>Add to Cart</CustomButton>
        </CollectionItemContainer>
    );

};

export default CollectionItem;