import { createSlice } from "@reduxjs/toolkit";

export const businessSlice = createSlice({
    name: "business",
    initialState: {
        businesses: [],
        businessChoose: {},
        loginBusiness: {},
    },
    reducers: {
        getBusiness: (state, action) => {
            state.businesses = action.payload;
        },
        businessChoose: (state, action) => {
            state.businessChoose = action.payload;
        },
        LoginBusiness: (state, action) => {
            state.loginBusiness = action.payload;
        },
    },
});

export const { getBusiness, businessChoose, LoginBusiness } =
    businessSlice.actions;
export default businessSlice.reducer;
