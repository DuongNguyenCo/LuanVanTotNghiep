import axios from '~/axios/customAxios';
import axiosDefault from 'axios';
import { getPostHot, postChooseBusiness } from './postSlice';
import { getBusiness, LoginBusiness } from './businessSlice';
import { loginCandidate } from './candidateSlice';
import { candidate as authCandidate, business as authBusiness } from './auth';
import { path } from '~/routes/path';

// /api/v2/business/signUp\\

export const updateBusiness = async (data, setBusiness, dispatch) => {
    try {
        const business = await axios({
            method: 'PUT',
            url: '/api/v2/business/update',
            data: data,
        });
        if (business.status === 0) {
            setBusiness(business.data);
            dispatch(LoginBusiness(business.data));
            localStorage.setItem('isBusiness', JSON.stringify(business.data));
        }
    } catch (e) {
        return e;
    }
};

export const signInBusiness = async (data, dispatch, navigate) => {
    try {
        const business = await axios({
            method: 'POST',
            url: '/api/v2/business/signIn',
            data: data,
        });
        if (business.status === 0) {
            dispatch(LoginBusiness(business.data));
            dispatch(authBusiness(business.tokenAccess));
            navigate(path.BHOME);
        }
    } catch (e) {
        return e;
    }
};
export const signUpBusiness = async (data, dispatch, navigate) => {
    try {
        const business = await axios({
            method: 'POST',
            url: '/api/v2/business/signUp',
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
            method: 'POST',
            url: '/api/v2/candidate/signIn',
            data: data,
        });
        if (candidate.status === 0) {
            dispatch(loginCandidate(candidate.data));
            dispatch(authCandidate(candidate.tokenAccess));
            navigate(path.CHOME);
        }
    } catch (e) {
        return e;
    }
};

export const signUpCandidata = async (data, dispatch, navigate) => {
    try {
        const candidate = await axios({
            method: 'POST',
            url: '/api/v2/candidate/signUp',
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

export const forgotPassword = async (data) => {
    try {
        const candidate = await axios({
            method: 'POST',
            url: '/api/v2/candidate/forgotPassword',
            data: data,
        });
        if (candidate.status === 0) {
            return 1;
        }
    } catch (e) {
        return e;
    }
};
export const resetPassword = async (data) => {
    try {
        const candidate = await axios({
            method: 'POST',
            url: '/api/v2/candidate/resetPassword',
            data: data,
        });
        if (candidate.status === 0) {
            return 1;
        }
    } catch (e) {
        return e;
    }
};

export const getJobApply = async (id, setJob) => {
    try {
        const candidate = await axios({
            method: 'GET',
            url: `/api/v2/candidate/getJobApply/${id}`,
        });
        if (candidate.status === 0) {
            setJob(candidate.data);
        }
    } catch (e) {
        return e;
    }
};

export const getAPIPostHot = async (dispatch) => {
    try {
        const dataP = await axios({
            method: 'GET',
            url: '/api/v2/post/getall',
        });
        dispatch(getPostHot(dataP.data));
    } catch (e) {
        return e;
    }
};

export const getAPIBusiness = async (dispatch) => {
    try {
        const dataB = await axios({
            method: 'GET',
            url: '/api/v2/business/getall',
        });
        dispatch(getBusiness(dataB.data));
    } catch (e) {
        return e;
    }
};

export const getAPIBusinessID = async (name, setData) => {
    try {
        const data = await axios({
            method: 'GET',
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
            method: 'GET',
            url: `/api/v2/post/getById/${name}`,
        });
        const language = data.data.job.languages.map((e) => {
            return e.id;
        });
        const dataRelate = await axios({
            method: 'GET',
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
            method: 'GET',
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
            method: 'GET',
            url: '/api/v2/typejob/gettall',
        });
        if (data.status === 0) {
            setTypejob(
                data.data.map((e) => {
                    return { value: e.id, label: e.name };
                }),
            );
        }
    } catch (e) {
        return e;
    }
};

export const getAPILanguage = async (setLanguage) => {
    try {
        const data = await axios({
            method: 'GET',
            url: '/api/v2/language/gettall',
        });
        if (data.status === 0) {
            setLanguage(
                data.data.map((e) => {
                    return { value: e.id, label: e.name };
                }),
            );
        }
    } catch (e) {
        return e;
    }
};

export const getAPIAddress = async (setAddress, id) => {
    try {
        const data = await axios({
            method: 'GET',
            url: `/api/v2/address/gettall/${id}`,
        });
        if (data.status === 0) {
            setAddress(
                data.data.map((e, index) => {
                    return {
                        index: index,
                        indexChoose: -1,
                        value: e.id,
                        label: e.street + ', ' + e.ward + ', ' + e.district + ', ' + e.city,
                        isDisable: false,
                    };
                }),
            );
        }
    } catch (e) {
        return e;
    }
};

export const getInforAddress = async (id, setAddress) => {
    try {
        const data = await axios({
            method: 'GET',
            url: `/api/v2/address/gettall/${id}`,
        });
        if (data.status === 0) {
            setAddress(data.data);
        }
    } catch (e) {
        return e;
    }
};

export const getAPIPostBusiness = async (id_business, setPost) => {
    try {
        const data = await axios({
            method: 'GET',
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
            method: 'GET',
            url: `/api/v2/post/getAllExpire/${id_business}`,
        });
        console.log('data: ', data);
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
            method: 'GET',
            url: `/api/v2/post/getAllHidden/${id_business}`,
        });
        if (data.status === 0) {
            setPost(data.data);
        }
    } catch (e) {
        return e;
    }
};

export const getAPIPostSevenDayBusiness = async (id_business, setPost) => {
    try {
        console.log('id_business: ', id_business);
        const data = await axios({
            method: 'GET',
            url: `/api/v2/post/getAllSevenDay/${id_business}`,
        });
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
            method: 'GET',
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
                }),
            );
        }
    } catch (e) {
        return e;
    }
};
export const getAPICandidateByPost = async (id_post, setCandidate) => {
    try {
        const data = await axios({
            method: 'GET',
            url: `/api/v2/post/getAllCandidateByIdPost/${id_post}`,
        });
        if (data.status === 0) {
            setCandidate({ data: data.data, file: data.file });
        }
    } catch (e) {
        return e;
    }
};

export const getAPIEmailTamplate = async (id_business, setEmaiil) => {
    try {
        const data = await axios({
            method: 'GET',
            url: `/api/v2/email/getByIdBusiness/${id_business}`,
        });
        if (data.status === 0) {
            const listEmail = data.data.map((e) => {
                return {
                    value: e.id,
                    label: e.name,
                };
            });
            setEmaiil([{ value: 0, label: 'Không gửi email' }].concat(listEmail));
        }
    } catch (e) {
        return e;
    }
};

export const getInforEmailTamplate = async (id, setEmaiil) => {
    try {
        const data = await axios({
            method: 'GET',
            url: `/api/v2/email/getByIdBusiness/${id}`,
        });
        if (data.status === 0) {
            setEmaiil(data.data);
        }
    } catch (e) {
        return e;
    }
};

export const getAPIServiceBusiness = async (id_business, setService) => {
    try {
        const data = await axios({
            method: 'GET',
            url: `/api/v2/service/getByIdBusiness/${id_business}`,
        });
        if (data.status === 0) {
            setService(
                data.data.map((e) => {
                    return { value: e.id, label: e.name, type: e.type_service };
                }),
            );
        }
    } catch (e) {
        return e;
    }
};

export const submitStepOne = async (job, id_business, dispatch) => {
    try {
        const data = await axios({
            method: 'POST',
            url: '/api/v2/job/create',
            data: { job, id_business },
        });
        if (data.status === 1) {
            return data.status;
        } else {
            dispatch(postChooseBusiness(data.data));
            return data.status;
        }
    } catch (e) {
        return e;
    }
};

export const submitStepTwo = async (step, id_post) => {
    try {
        const data = await axios({
            method: 'PUT',
            url: '/api/v2/post/updateStep',
            data: { step, id_post },
        });
        if (data.status === 0) return data.status;
    } catch (e) {
        return e;
    }
};

export const submitStepThree = async (service, id_post, id_business, navigate) => {
    try {
        const data = await axios({
            method: 'PUT',
            url: '/api/v2/post/updateService',
            data: { service, id_post, id_business },
        });
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
            method: 'POST',
            url: '/api/v2/cv/apply',
            data: apply,
        });
        return data.status;
    } catch (e) {
        return e;
    }
};

export const getCity = async (setCity) => {
    try {
        const res = await axiosDefault.get('https://provinces.open-api.vn/api/p/');
        setCity(
            res.data.map((e) => {
                return { value: e.code, label: e.name };
            }),
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
            }),
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
            }),
        );
    } catch (e) {
        return e;
    }
};

export const addNewAddress = async (address, id_business) => {
    try {
        await axios({
            method: 'POST',
            url: '/api/v2/address/create',
            data: { address, id_business },
        });
    } catch (e) {
        return e;
    }
};

export const hiddenPost = async (id_post, id_business, setPost) => {
    try {
        const data = await axios({
            method: 'PUT',
            url: '/api/v2/post/updateState',
            data: { id_post, id_business },
        });
        if (data.status === 0) {
            setPost(data.data);
        }
    } catch (e) {
        return e;
    }
};

export const deletePost = async (id_post, id_business) => {
    try {
        const data = await axios({
            method: 'DELETE',
            url: `/api/v2/post/deletePost`,
            data: { id_post, id_business },
        });
        if (data.status === 0) {
        }
    } catch (e) {
        return e;
    }
};

export const findJob = async (name, dispatch) => {
    try {
        const data = await axios({
            method: 'POST',
            url: `/api/v2/post/findJob`,
            data: name,
        });
        if (data.status === 0) {
            dispatch(getPostHot(data.data));
        }
    } catch (e) {
        return e;
    }
};

export const getPostByMonth = async (idBusiness, setMonthPost, monthPost) => {
    try {
        const data = await axios({
            method: 'GET',
            url: `/api/v2/post/dashboard/${idBusiness}`,
        });
        if (data.status === 0) {
            const copyData = [...monthPost];
            const resultData = data.data.map((e) => {
                const month = new Date(e.createdAt).getMonth();
                return month;
            });
            const newData = copyData.map((e) => {
                let count = 0;
                for (let i = 0; i < resultData.length; i++) {
                    if (resultData[i] === e.id) {
                        count++;
                    }
                }
                return { ...e, dang: count };
            });
            setMonthPost(newData);
        }
    } catch (e) {
        return e;
    }
};

export const getApplyByMonth = async (idBusiness, setMonthApply, monthApply) => {
    try {
        const data = await axios({
            method: 'GET',
            url: `/api/v2/post/dashboard1/${idBusiness}`,
        });
        if (data.status === 0) {
            console.log(data.data);
            const copyData = [...monthApply];
            const resultData = data.data.map((e) => {
                const month = new Date(e.createdAt).getMonth();
                return { month, apply: e.apply };
            });
            const newData = copyData.map((e) => {
                let tTuyen = 0;
                let tFail = 0;
                let tOther = 0;
                let tSuccess = 0;
                for (let i = 0; i < resultData.length; i++) {
                    if (resultData[i].month === e.id) {
                        tTuyen = resultData[i].apply.length;
                        if (resultData[i].apply.length > 0) {
                            for (let y = 0; y < resultData[i].apply.length; y++) {
                                if (resultData[i].apply[y].cv_post.status === 0) {
                                    tFail++;
                                } else if (resultData[i].apply[y].cv_post.status === 1) {
                                    tSuccess++;
                                } else {
                                    tOther++;
                                }
                            }
                        }
                    }
                }
                return { ...e, fail: tFail, other: tOther, success: tSuccess, tuyen: tTuyen };
            });
            setMonthApply(newData);
        }
    } catch (e) {
        return e;
    }
};

export const getCandidateByid = async (id, setCandidate) => {
    try {
        const data = await axios({
            method: 'GET',
            url: `/api/v2/candidate/getById/${id}`,
        });
        if (data.status === 0) {
            setCandidate(data.data);
        }
    } catch (e) {
        return e;
    }
};
export const getBusinessById = async (id, setBusiness) => {
    try {
        const data = await axios({
            method: 'GET',
            url: `/api/v2/business/getByIdInfor/${id}`,
        });
        if (data.status === 0) {
            setBusiness(data.data);
        }
    } catch (e) {
        return e;
    }
};

export const deleteAddress = async (address, setAddress, idBusiness) => {
    try {
        const data = await axios({
            method: 'DELETE',
            url: `/api/v2/address/delete/${address}/${idBusiness}`,
        });
        if (data.status === 0) {
            setAddress(data.data);
        }
    } catch (e) {
        return e;
    }
};

export const addNewEmail = async (email, setEmail, idBusiness) => {
    try {
        console.log({ email: email, id: idBusiness });
        const data = await axios({
            method: 'POST',
            url: `/api/v2/email/create`,
            data: { email: email, id: idBusiness },
        });
        console.log('data: ', data);
        if (data.status === 0) {
            setEmail(data.data);
        }
    } catch (e) {
        return e;
    }
};
export const deleteEmail = async (email, setEmail, idBusiness) => {
    try {
        const data = await axios({
            method: 'DELETE',
            url: `/api/v2/email/delete/${email}/${idBusiness}`,
            data: { email: email, id: idBusiness },
        });
        if (data.status === 0) {
            setEmail(data.data);
        }
    } catch (e) {
        return e;
    }
};
