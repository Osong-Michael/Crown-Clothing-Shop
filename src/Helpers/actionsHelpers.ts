import { CartItem } from "../Store/Cart/cart.types";
import { CollectionItem } from "../Store/Collections/collections.types";

export const addCartItem = (cartItems: CartItem[], productToAdd: CollectionItem): CartItem[] => {
    const existingCartItem = cartItems.find(item => item.id === productToAdd.id);

    if (existingCartItem) {
       return cartItems.map(item => item.id === productToAdd.id ? { ...item, quantity: item.quantity + 1 } : item );
    };

    return [ ...cartItems, { ...productToAdd, quantity: 1 } ];
};

export const removeCartItem = (cartItems: CartItem[], cartItemToRemove: CartItem): CartItem[] => {
    const existingCartItem = cartItems.find(
      (cartItem) => cartItem.id === cartItemToRemove.id
    );
  
    if (existingCartItem && existingCartItem.quantity === 1) {
      return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
    }
  
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToRemove.id
        ? { ...cartItem, quantity: cartItem.quantity - 1 }
        : cartItem
    );
};

export const clearCartItem = (cartItems: CartItem[], cartItemToClear: CartItem): CartItem[] => cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);
