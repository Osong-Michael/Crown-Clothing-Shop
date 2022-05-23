import React, { useContext } from 'react';
import { CartContext } from '../../Context/cartContext';
import CustomButton from '../CustomButton';
import './index.scss';

const CollectionItem = ({ product }) => {
    const { name, price, imageUrl } = product;
    
    const { addItemsToCart } = useContext(CartContext);

    const addProductToCart = () => addItemsToCart(product);

    return (
        <div className="collection-item">
            <div
                className="image"
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className="collection-footer">
                <span className="name">{name}</span>
                <span className="price">${price}</span>
            </div>
            <CustomButton buttonType='inverted' onClick={addProductToCart}>Add to Cart</CustomButton>
        </div>
    );

};

export default CollectionItem;