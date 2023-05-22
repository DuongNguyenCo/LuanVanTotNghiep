import axios from "axios";
// import { LoginBusiness } from "~/redux/businessSlice";
const instance = axios.create({
    baseURL: "http://localhost:9000",
});

// Add a request interceptor
instance.interceptors.request.use(
    function (config) {
        // Do something before request is sent
        // gắn token vào header
        // let token =
        //     window.localStorage.getItem("persist:auth") &&
        //     JSON.parse(
        //         window.localStorage.getItem("persist:auth")
        //     )?.token?.slice(1, -1);
        // config.headers = {
        //     authorization: token ? `Bearer ${token}` : null,
        // };
        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

// Add a response interceptor
instance.interceptors.response.use(
    function (response) {
        if (response.data.status === 0 && response.data.isBusiness === 1) {
            window.localStorage.setItem(
                "refreshTokenBusiness",
                response.data.tokenRefresh
            );
            window.localStorage.setItem(
                "isBusiness",
                JSON.stringify(response.data.data)
            );
            return response.data;
        }
        if (response.data.status === 0 && response.data.isBusiness === 0) {
            window.localStorage.setItem(
                "refreshTokenCandidate",
                response.data.tokenRefresh
            );
            return response.data;
        }
        // refresh token
        return response.data;
    },
    function (error) {
        return Promise.reject(error);
    }
);

export default instance;
