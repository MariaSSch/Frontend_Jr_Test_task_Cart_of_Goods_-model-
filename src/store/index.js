import { createStore, combineReducers } from "redux";
import {routerReducer} from "react-router-redux";

import { alreadyInCartreducer } from "./alreadyInCart";
import {cartReducer} from "./cartReducer";
import {currentProdReducer} from "./currentProdReducer"
import { priceReducer } from "./priceReducer";

const rootReducer = combineReducers({
    routing: routerReducer,
    cart: cartReducer,
    currentProd: currentProdReducer,
    price: priceReducer,
    inCart: alreadyInCartreducer,
});

export const store = createStore(rootReducer);

/*
store.subscribe(()=>{
    console.log("subscribe", store.getState());
})*/