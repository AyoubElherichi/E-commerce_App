import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlice";
import wishlistReducer from "./slices/wishlistSlice";
import uiReducer from "./slices/uiSlice";

/* 1️⃣ Load data from localStorage */
const loadFromLocalStorage = () => {
  const data = localStorage.getItem("shoptech");
  return data ? JSON.parse(data) : undefined;
};

/* 2️⃣ Save data to localStorage */
const saveToLocalStorage = (state) => {
  localStorage.setItem(
    "shoptech",
    JSON.stringify({
      cart: state.cart,
      wishlist: state.wishlist,
    })
  );
};

/* 3️⃣ Create store with saved data */
const store = configureStore({
  reducer: {
    cart: cartReducer,
    wishlist: wishlistReducer,
    ui: uiReducer,
  },
  preloadedState: loadFromLocalStorage(),
});

/* 4️⃣ Save cart & wishlist whenever state changes */
store.subscribe(() => {
  saveToLocalStorage(store.getState());
});

export default store;