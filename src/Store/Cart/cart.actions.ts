import { createAction, Action, ActionWithPayload, withMatcher } from '../../Helpers/reducerHelper';
import { addCartItem, removeCartItem, clearCartItem } from '../../Helpers/actionsHelpers';
import { CartItem, CART_ACTION_TYPES } from './cart.types';
import { CollectionItem } from '../Collections/collections.types';


export type SetIsCartOpen = Action<CART_ACTION_TYPES.SET_IS_CART_OPEN>;
export type SetCartItems = ActionWithPayload<CART_ACTION_TYPES.SET_CART_ITEMS, CartItem[]>;


export const setCartItems = withMatcher((cartItems: CartItem[]): SetCartItems => createAction(CART_ACTION_TYPES.SET_CART_ITEMS, cartItems));

export const addItemsToCart = (cartItems: CartItem[], productToAdd: CollectionItem) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    return setCartItems(newCartItems);
};

export const removeItemFromCart =  (cartItems: CartItem[], cartItemToRemove: CartItem) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    return setCartItems(newCartItems);
};

export const clearItemFromCart =  (cartItems: CartItem[], cartItemToClear: CartItem) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    return setCartItems(newCartItems);
};

export const setIsCartOpen = withMatcher((): SetIsCartOpen => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN));