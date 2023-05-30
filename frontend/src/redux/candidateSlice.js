import { createSlice } from "@reduxjs/toolkit";

export const candidateSlice = createSlice({
    name: "candidate",
    initialState: {
        loginCandidate: null,
    },
    reducers: {
        loginCandidate: (state, action) => {
            state.loginBusiness = action.payload;
        },
    },
});

export const { loginCandidate } = candidateSlice.actions;
export default candidateSlice.reducer;
