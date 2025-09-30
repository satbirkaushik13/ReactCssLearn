// src/store/modeSlice.js
import { createSlice } from "@reduxjs/toolkit";

const modeSlice = createSlice({
    name: "mode",
    initialState: { isNight: false },
    reducers: {
        toggleMode: (state) => {
            state.isNight = !state.isNight;
        },
    },
});

export const { toggleMode } = modeSlice.actions; //This is used while dispatching the action from components
export default modeSlice.reducer; //This is used in store.js to add this slice to the store
