
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import thunk from 'redux-thunk'


import { cartReducer } from '../reducers/cart'
import { itemsReducer } from '../reducers/items'
import { reviewsReducer } from '../reducers/reviews'
import { nwStatusReducer } from '../reducers/network-status'


const composeEnhancers = composeWithDevTools({
    // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});


const rootReducer = combineReducers({
    cart: cartReducer,
    items: itemsReducer,
    reviews: reviewsReducer,
    nwStatus: nwStatusReducer
})

const intialState = {
    cart: {}
}

const middleware = [thunk]

const store = createStore(rootReducer, intialState, composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
));
export default store;