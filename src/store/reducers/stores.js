// All reducers are pure functions - i.e. just return data.
// Cannot - Async Operations, setInterval, serTimeout, Promise, Http.
// These are referred to as Side Effects and handled by middlewares.
import { GET_STORES_ACTION } from "../action-type";

const initialState = {
  list: [
    {
      name: "Pizza Hut",
      priceRange: 3,
      desc: "Pizza, Breads, Italian",
      rating: {
        stars: 4.7,
        votes: 4500,
      },
      delivery: {
        timeRequired: 27,
        isFree: true,
      },
      id: 1,
      images: [
        "images/dummy-200x200-Spuma.jpeg",
        "images/dummy-315x560-Eggs.jpeg",
      ],
    },
  ],
};

// action > {type : STRING, payload : DATA}
export default function Stores(state = initialState, action) {
  console.log("IN REDUCER - Stores Reducer");

  switch (action.type) {
    case GET_STORES_ACTION:
      {
        console.log("CASE : GET_STORES_ACTION");
        const newState = { ...state };
        newState.list = action.payload;
        return newState;
      }
      break;

    default:
      {
        return state;
      }
      break;
  }

  return state;
}
