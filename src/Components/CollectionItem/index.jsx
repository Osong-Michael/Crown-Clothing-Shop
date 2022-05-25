import React, { useContext } from 'react';
import { CartContext } from '../../Context/cartContext';
import CustomButton, { BUTTON_TYPES } from '../CustomButton';
import { CollectionItemContainer, CollectionFooter, BackgroundImage } from './index.styles';

const CollectionItem = ({ product }) => {
    const { name, price, imageUrl } = product;
    
    const { addItemsToCart } = useContext(CartContext);

    const addProductToCart = () => addItemsToCart(product);

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