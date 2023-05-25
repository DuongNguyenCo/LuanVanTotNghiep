import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: "post",
    initialState: {
        posts: [],
        postHots: [],
        postChooseBusiness: {},
    },
    reducers: {
        getPost: (state, action) => {
            state.posts = action.payload;
        },
        getPostHot: (state, action) => {
            state.postHots = action.payload;
        },

        postChooseBusiness: (state, action) => {
            state.postChooseBusiness = action.payload;
        },
    },
});

export const { getPost, getPostHot, postChooseBusiness } = postSlice.actions;
export default postSlice.reducer;
