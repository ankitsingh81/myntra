import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import categorySlice from "./categorySlice";

const store = configureStore({
    reducer: {
        user: userSlice,
        categories: categorySlice
    }
});

export default store;