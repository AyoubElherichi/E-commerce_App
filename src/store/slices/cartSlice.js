import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // { product, qty }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = action.payload;
      const existing = state.items.find((i) => i.product.id === product.id);
      if (existing) {
        existing.qty += 1;
      } else {
        state.items.push({ product, qty: 1 });
      }
    },
    removeFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter((i) => i.product.id !== id);
    },
    increaseQty(state, action) {
      const id = action.payload;
      const item = state.items.find((i) => i.product.id === id);
      if (item) item.qty += 1;
    },
    decreaseQty(state, action) {
      const id = action.payload;
      const item = state.items.find((i) => i.product.id === id);
      if (item) {
        item.qty -= 1;
        if (item.qty <= 0)
          state.items = state.items.filter((i) => i.product.id !== id);
      }
    },
    clearCart(state) {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increaseQty,
  decreaseQty,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
