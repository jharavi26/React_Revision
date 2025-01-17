// action creators

import * as actions from "../../constants/cart";

export const addToCart = (value) => {
  return {
    type: actions.UPDATE_CART,
    value,
  };
};

export const removeFromCart = (value) => {
  return {
    type: actions.REMOVE_CART,
    value,
  };
};
