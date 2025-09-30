// src/store/store.js
import { configureStore } from "@reduxjs/toolkit";
import modeReducer from "./slices/modeSlice";
import nameReducer from "./slices/nameSlice";

export const store = configureStore({
    reducer: {
        mode: modeReducer,
        user: nameReducer,
    },
});
