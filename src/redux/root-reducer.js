// Base Reducer
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import shopReducer from "./shop/shop.reducer";
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from "./directory/directory.reducer";

// JSON Object of configuration to Storage
const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['cart'] // string name of the reducer
};

const rootReducer = combineReducers({
    user: userReducer,
    cart: cartReducer,
    directory: directoryReducer,
    shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);