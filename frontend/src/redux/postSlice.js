import { createSlice } from "@reduxjs/toolkit";

export const postSlice = createSlice({
    name: "post",
    initialState: {
        posts: [],
        postHots: [],
        postRelate: [],
        postChoose: {},
        postChooseBusiness: {},
    },
    reducers: {
        getPost: (state, action) => {
            state.posts = action.payload;
        },
        getPostHot: (state, action) => {
            state.postHots = action.payload;
        },
        getPostRelate: (state, action) => {
            state.postRelate = action.payload;
        },
        postChoose: (state, action) => {
            state.postChoose = action.payload;
        },
        postChooseBusiness: (state, action) => {
            state.postChooseBusiness = action.payload;
        },
    },
});

export const { getPost, getPostRelate, getPostHot, postChoose, postChooseBusiness } = postSlice.actions;
export default postSlice.reducer;
