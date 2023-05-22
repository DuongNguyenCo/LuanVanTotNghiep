import { createSlice } from "@reduxjs/toolkit";

export const auth = createSlice({
    name: "auth",
    initialState: {
        token: "",
        isBusiness: false,
    },
    reducers: {
        candidate: (state, action) => {
            state.token = action.payload;
            state.isBusiness = false;
        },
        business: (state, action) => {
            state.token = action.payload;
            state.isBusiness = true;
        },
    },
});

export const { candidate, business } = auth.actions;
export default auth.reducer;
