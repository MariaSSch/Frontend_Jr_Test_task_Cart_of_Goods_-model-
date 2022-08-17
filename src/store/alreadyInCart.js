const PROD_IN_CART = "PROD_IN_CART"

const defaultState = { 
    products: [],
};


export const alreadyInCartreducer = (state=defaultState, action) => {
    if(action.type === PROD_IN_CART) {
        return {...state, products: [...state.products, action.payload]}
    } return state;
}

export const alreadyInCart = () => ({type: PROD_IN_CART});
