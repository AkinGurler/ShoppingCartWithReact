import { data } from "../data";
import { SEPETTEN_CIKAR } from "../actions";

const INITIAL_STATE = {
  bookList: data,
  cart: []
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "SEPETE_EKLE":
      return { ...state, cart: [...state.cart, action.payload] };
    case "SEPETTEN_CIKAR":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload)
      };
    default:
      return state;
  }
};
