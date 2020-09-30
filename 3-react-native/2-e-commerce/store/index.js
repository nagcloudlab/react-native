
import { createStore, applyMiddleware, combineReducers } from 'redux';

import thunk from 'redux-thunk'

import { cartReducer } from '../reducers/cart'
import { itemsReducer } from '../reducers/items'
import { reviewsReducer } from '../reducers/reviews'
import { networkStatusReducer } from '../reducers/network-status'


const rootReducer = combineReducers({
    cart: cartReducer,
    items: itemsReducer,
    reviews: reviewsReducer,
    networkStatus: networkStatusReducer
})

const intialState = {
    cart: {},
    items: [],
    reviews: {}
}

const middleware = [thunk]


const store = createStore(rootReducer, intialState, applyMiddleware(...middleware));
export default store;