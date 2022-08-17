const INCR = "INCR";
const DECR = "DECR";

export const priceReducer = (state=[], action) => {
    if (action.type === INCR) {
        state.push(action.payload)
    } else if(action.type === DECR) {
        state.filter((prod) => prod.id !== action.payload)
    } return state;
}

export const incrCart = (payload) => ({type: INCR, payload});
export const decrCart = (payload) => ({type: DECR, payload});