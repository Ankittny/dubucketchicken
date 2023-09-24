import { configureStore } from "@reduxjs/toolkit";
import cart from "./Cart";
// import compareProduct from "./compareProduct";

export default configureStore({
  reducer: {
    cart: cart,
    // compareProducts: compareProduct,
  },
});
