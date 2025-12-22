import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // array of product ids
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    addToWishlist(state, action) {
      const product = action.payload;
      if (!state.items.find((p) => p.id === product.id))
        state.items.push(product);
    },
    removeFromWishlist(state, action) {
      const id = action.payload;
      state.items = state.items.filter((p) => p.id !== id);
    },
  },
});

export const { addToWishlist, removeFromWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;
