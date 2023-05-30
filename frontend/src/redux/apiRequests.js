import axios from "~/axios/customAxios";
import axiosDefault from "axios";
import { getPostHot, postChooseBusiness } from "./postSlice";
import { getBusiness, LoginBusiness } from "./businessSlice";
import { loginCandidate } from "./candidateSlice";
import { path } from "~/routes/path";

// /api/v2/business/signUp
export const signInBusiness = async (data, dispatch, navigate) => {
    try {
        const business = await axios({
            method: "POST",
            url: "/api/v2/business/signIn",
            data: data,
        });
        if (business.status === 0) {
            dispatch(LoginBusiness(business.data));
            navigate(path.BHOME);
        }
    } catch (e) {
        return e;
    }
};
export const signUpBusiness = async (data, dispatch, navigate) => {
    try {
        const business = await axios({
            method: "POST",
            url: "/api/v2/business/signUp",
            data: data,
        });
        if (business.status === 0) {
            dispatch(LoginBusiness(business.data));
            navigate(path.BHOME);
        }
    } catch (e) {
        return e;
    }
};
export const signInCandidate = async (data, dispatch, navigate) => {
    try {
        const candidate = await axios({
            method: "POST",
            url: "/api/v2/candidate/signIn",
            data: data,
        });
        if (candidate.status === 0) {
            dispatch(loginCandidate(candidate.data));
            navigate(path.CHOME);
        }
    } catch (e) {
        return e;
    }
};

export const getAPIPostHot = async (dispatch) => {
    try {
        const dataP = await axios({
            method: "GET",
            url: "/api/v2/post/getall",
        });
        dispatch(getPostHot(dataP.data));
    } catch (e) {
        return e;
    }
};

export const getAPIBusiness = async (dispatch) => {
    try {
        const dataB = await axios({
            method: "GET",
            url: "/api/v2/business/getall",
        });
        dispatch(getBusiness(dataB.data));
    } catch (e) {
        return e;
    }
};

export const getAPIBusinessID = async (name, setData) => {
    try {
        const data = await axios({
            method: "GET",
            url: `/api/v2/business/getById/${name}`,
        });
        if (data.status === 0) {
            setData(data.data);
        }
    } catch (e) {
        return e;
    }
};

export const getAPIJobID = async (name, setPost, setPostRelate) => {
    try {
        const data = await axios({
            method: "GET",
            url: `/api/v2/post/getById/${name}`,
        });
        const language = data.data.job.languages.map((e) => {
            return e.id;
        });
        const dataRelate = await axios({
            method: "GET",
            url: `/api/v2/post/getRelate?relate=${language}`,
        });
        if (data.status === 0 && dataRelate.status === 0) {
            setPost(data.data);
            setPostRelate(dataRelate.data);
        }
    } catch (e) {
        return e;
    }
};

export const getAPIJobIdApply = async (name, setPost) => {
    try {
        const data = await axios({
            method: "GET",
            url: `/api/v2/post/getById/${name}`,
        });

        if (data.status === 0) {
            setPost(data.data);
        }
    } catch (e) {
        return e;
    }
};

export const getAPITypeJob = async (setTypejob) => {
    try {
        const data = await axios({
            method: "GET",
            url: "/api/v2/typejob/gettall",
        });
        if (data.status === 0) {
            setTypejob(
                data.data.map((e) => {
                    return { value: e.id, label: e.name };
                })
            );
        }
    } catch (e) {
        return e;
    }
};

export const getAPILanguage = async (setLanguage) => {
    try {
        const data = await axios({
            method: "GET",
            url: "/api/v2/language/gettall",
        });
        if (data.status === 0) {
            setLanguage(
                data.data.map((e) => {
                    return { value: e.id, label: e.name };
                })
            );
        }
    } catch (e) {
        return e;
    }
};

export const getAPIAddress = async (setAddress, id) => {
    try {
        const data = await axios({
            method: "GET",
            url: `/api/v2/address/gettall/${id}`,
        });
        if (data.status === 0) {
            setAddress(
                data.data.map((e, index) => {
                    return {
                        index: index,
                        indexChoose: -1,
                        value: e.id,
                        label: e.street + ", " + e.ward + ", " + e.district + ", " + e.city,
                        isDisable: false,
                    };
                })
            );
        }
    } catch (e) {
        return e;
    }
};

export const getAPIPostBusiness = async (id_business, setPost) => {
    try {
        const data = await axios({
            method: "GET",
            url: `/api/v2/post/getAllByIdBusiness/${id_business}`,
        });
        if (data.status === 0) {
            setPost(data.data);
        }
    } catch (e) {
        return e;
    }
};
export const getAPIPostExpireBusiness = async (id_business, setPost) => {
    try {
        const data = await axios({
            method: "GET",
            url: `/api/v2/post/getAllExpire/${id_business}`,
        });
        if (data.status === 0) {
            setPost(data.data);
        }
    } catch (e) {
        return e;
    }
};
export const getAPIPostHiddenBusiness = async (id_business, setPost) => {
    try {
        const data = await axios({
            method: "GET",
            url: `/api/v2/post/getAllHidden/${id_business}`,
        });
        console.log("data: ", data);
        if (data.status === 0) {
            setPost(data.data);
        }
    } catch (e) {
        return e;
    }
};

export const getAPICandidateAllPost = async (id_business, setPost) => {
    try {
        const data = await axios({
            method: "GET",
            url: `/api/v2/post/getAllPostByID/${id_business}`,
        });
        if (data.status === 0) {
            setPost(
                data.data.map((e) => {
                    return {
                        value: e.id,
                        label: e.job.name,
                        time: e.createdAt,
                    };
                })
            );
        }
    } catch (e) {
        return e;
    }
};
export const getAPICandidateByPost = async (id_post, setCandidate) => {
    try {
        const data = await axios({
            method: "GET",
            url: `/api/v2/post/getAllCandidateByIdPost/${id_post}`,
        });
        if (data.status === 0) {
            setCandidate(data.data);
        }
    } catch (e) {
        return e;
    }
};

export const getAPIEmailTamplate = async (id_business, setEmaiil) => {
    try {
        const data = await axios({
            method: "GET",
            url: `/api/v2/email/getByIdBusiness/${id_business}`,
        });
        if (data.status === 0) {
            const listEmail = data.data.map((e) => {
                return {
                    value: e.id,
                    label: e.name,
                };
            });
            setEmaiil([{ value: 0, label: "Không gửi email" }].concat(listEmail));
        }
    } catch (e) {
        return e;
    }
};

export const getAPIServiceBusiness = async (id_business, setService) => {
    try {
        const data = await axios({
            method: "GET",
            url: `/api/v2/service/getByIdBusiness/${id_business}`,
        });
        if (data.status === 0) {
            setService(
                data.data.map((e) => {
                    return { value: e.id, label: e.name, type: e.type_service };
                })
            );
        }
    } catch (e) {
        return e;
    }
};

export const submitStepOne = async (job, id_business, dispatch) => {
    try {
        const data = await axios({
            method: "POST",
            url: "/api/v2/job/create",
            data: { job, id_business },
        });
        dispatch(postChooseBusiness(data.data));
        return data.status;
    } catch (e) {
        return e;
    }
};

export const submitStepTwo = async (step, id_post) => {
    try {
        const data = await axios({
            method: "PUT",
            url: "/api/v2/post/updateStep",
            data: { step, id_post },
        });
        return data.status;
    } catch (e) {
        return e;
    }
};

export const submitStepThree = async (service, id_post, navigate) => {
    try {
        const data = await axios({
            method: "PUT",
            url: "/api/v2/post/updateService",
            data: { service, id_post },
        });
        console.log("data: ", data);

        if (data.status === 0) {
            navigate(path.BJOB);
        } else if (data.status === -1) {
            navigate(path.BJOB);
        }
    } catch (e) {
        return e;
    }
};

export const applyPost = async (apply) => {
    try {
        const data = await axios({
            method: "POST",
            url: "/api/v2/cv/apply",
            data: apply,
        });
        if (data.status === 0) {
        }
    } catch (e) {
        return e;
    }
};

export const getCity = async (setCity) => {
    try {
        const res = await axiosDefault.get("https://provinces.open-api.vn/api/p/");
        setCity(
            res.data.map((e) => {
                return { value: e.code, label: e.name };
            })
        );
    } catch (e) {
        return e;
    }
};
export const getDistrict = async (idCity, setDistrict) => {
    try {
        const res = await axiosDefault.get(`https://provinces.open-api.vn/api/p/${idCity}?depth=2`);
        setDistrict(
            res.data.districts.map((e) => {
                return { value: e.code, label: e.name };
            })
        );
    } catch (e) {
        return e;
    }
};
export const getWard = async (idDistrict, setWard) => {
    try {
        const res = await axiosDefault.get(`https://provinces.open-api.vn/api/d/${idDistrict}?depth=2`);
        setWard(
            res.data.wards.map((e) => {
                return { value: e.code, label: e.name };
            })
        );
    } catch (e) {
        return e;
    }
};

export const addNewAddress = async (address, id_business) => {
    try {
        await axios({
            method: "POST",
            url: "/api/v2/address/create",
            data: { address, id_business },
        });
    } catch (e) {
        return e;
    }
};
