// All reducers are pure functions - i.e. just return data.
// Cannot - Async Operations, setInterval, serTimeout, Promise, Http.
// These are referred to as Side Effects and handled by middlewares.

const initialState = {
  productsInCart: [],
};

export default function Cart(state = initialState, action) {
  return state;
}
