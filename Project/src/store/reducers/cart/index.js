const initialState = {
  cart: {},
};

function cartReducer(state = initialState, action) {
  const { value } = action;

  // console.log("Cart Reducer", action.type);
  switch (action?.type) {
    case "UPDATE_CART": {
      const oldState = { ...state };
      oldState.cart = { ...oldState.cart };

      const key = value["href"];

      if (oldState?.cart[key]?.count) {
        oldState.cart[key].count += 1;
      } else {
        oldState.cart[key] = {};
        oldState.cart[key].count = 1;
        oldState.cart[key].value = value;
      }

      return oldState;
    }

    case "REMOVE_CART": {
      const oldState = { ...state };
      const oldCart = { ...oldState.cart };
      delete oldCart[value];

      oldState.cart = { ...oldCart };

      return oldState;
    }

    default:
      return state;
  }
}

export default cartReducer;

export const getCartSelector = (state) => {
  return state.cart.cart;
};
