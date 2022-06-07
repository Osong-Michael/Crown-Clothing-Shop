import { createAction } from '../../Helpers/reducerHelper';
import { addCartItem, removeCartItem, clearCartItem } from '../../Helpers/actionsHelpers';
import { CART_ACTION_TYPES } from './cart.types';

export const addItemsToCart = (cartItems, productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const removeItemFromCart =  (cartItems, cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const clearItemFromCart =  (cartItems, cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const setIsCartOpen = () => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN);