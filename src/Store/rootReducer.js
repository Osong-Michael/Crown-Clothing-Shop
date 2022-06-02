import { combineReducers } from 'redux';

import { userReducer } from './User/user.reducer';
import { collectionsReducer } from './Collections/collections.reducer';
import { cartReducer } from './Cart/cart.reducer';

export const rootReducer = combineReducers({
    user: userReducer,
    collectionsStore: collectionsReducer,
    cart: cartReducer,
});