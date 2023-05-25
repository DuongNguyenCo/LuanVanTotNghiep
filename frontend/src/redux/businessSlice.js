import { createSlice } from "@reduxjs/toolkit";

export const businessSlice = createSlice({
    name: "business",
    initialState: {
        businesses: [],
        loginBusiness: {},
    },
    reducers: {
        getBusiness: (state, action) => {
            state.businesses = action.payload;
        },

        LoginBusiness: (state, action) => {
            state.loginBusiness = action.payload;
        },
    },
});

export const { getBusiness, LoginBusiness } = businessSlice.actions;
export default businessSlice.reducer;
