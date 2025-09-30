import { createSlice } from "@reduxjs/toolkit";

const nameSlice = createSlice({
    name: "name",
    initialState: { name: "" },
    reducers: {
        setName: (state, action) => {
            state.name = action.payload;
        },
    },
});

export const { setName } = nameSlice.actions; //This is used while dispatching the action from components
export default nameSlice.reducer; //This is used in store.js to add this slice to the store
