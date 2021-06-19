// All reducers are pure functions - i.e. just return data.
// Cannot - Async Operations, setInterval, serTimeout, Promise, Http.
// These are referred to as Side Effects and handled by middlewares.

const initialState = {
  products: [],
};

export default function Products(state = initialState, action) {
  console.log("IN REDUCER - Products Reducer");
  return state;
}
