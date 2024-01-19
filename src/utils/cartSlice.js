import { createSlice, current } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    // cart: localStorage.getItem("cart")
    //   ? JSON.parse(localStorage.getItem("cart"))
    //   : [],
    cart: [],
    totalPrice: localStorage.getItem("totalPrice")
      ? JSON.parse(localStorage.getItem("totalPrice"))
      : 0,
    totalItems: localStorage.getItem("totalItems")
      ? JSON.parse(localStorage.getItem("totalItems"))
      : 0,
  },
  reducers: {
    addCartItem: (state, action) => {
      const itemInCart = state.cart.find((it) => it.id === action.payload.id);

      if (itemInCart) {
        state.cart.find((it) => it.id === action.payload.id).quantity++;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
        localStorage.setItem("cart", JSON.stringify(state.cart));
      }
      state.totalItems++;
      state.totalPrice += action.payload.price;
      localStorage.setItem("totalPrice", JSON.stringify(state.totalPrice));
      localStorage.setItem("totalItems", JSON.stringify(state.totalItems));

      console.log(current(state.cart));
    },
    removeCartItem: () => {
      return null;
    },
  },
});

export const { addCartItem, removeCartItem } = cartSlice.actions;
export default cartSlice.reducer;
