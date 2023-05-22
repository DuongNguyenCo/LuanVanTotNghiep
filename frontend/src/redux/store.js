import { configureStore } from "@reduxjs/toolkit";
import post from "./postSlice";
import business from "./businessSlice";
import auth from "./auth";

export default configureStore({
    reducer: {
        post: post,
        business: business,
        auth: auth,
    },
});
