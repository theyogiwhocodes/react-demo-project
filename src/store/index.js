import { createStore, combineReducers } from "redux";
import Cart from "./reducers/cart";
import Products from "./reducers/products";
import Stores from "./reducers/stores";

// Single Reducer Implemenation
// const store = createStore();

const reducers = combineReducers({
  cart: Cart,
  products: Products,
  stores: Stores,
});

// In combined reducers A reducer can change only values of their own reducer

// Output of the stores
// {
//     cart: {}, // state - only this will be sent to cart reducer
//     products:{},
//     stores: {}
// }
//

const store = createStore(reducers);

export default store;
