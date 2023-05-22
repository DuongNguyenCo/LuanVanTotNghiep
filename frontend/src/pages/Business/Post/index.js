import { faPenToSquare, faPlusSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import { Button, Input } from "~/components";
import {
    getAPITypeJob,
    getAPILanguage,
    getAPIAddress,
    submitStepOne,
    getAPIEmailTamplate,
    submitStepTwo,
    getAPIServiceBusiness,
    submitStepThree,
} from "~/redux/apiRequests";

function Post() {
    //init
    const idBusiness = JSON.parse(localStorage.getItem("isBusiness"))?.id;
    const id_post = useSelector((state) => state.post.postChooseBusiness?.id);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [typejob, setTypejob] = useState([]);
    const [language, setLanguage] = useState([]);
    const [address, setAddress] = useState([]);
    const [email, setEmail] = useState([]);
    const [service, setService] = useState([]);

    //system
    const [countAddress, setCountAddress] = useState(1);
    const [listAddressChoose, setListAddressChoose] = useState([0]);
    const [step, setStep] = useState(1);
    const [salary, setSalary] = useState(false);

    //data
    const [data, setData] = useState({
        name: "",
        id_type_job: "",
        salary_min: 0,
        salary_max: 0,
        quantity: 0,
        description: "",
        request: "",
        id_location: [],
        id_language: [],
    });
    const [dataStep, setDataStep] = useState({
        step1: -1,
        step2: -1,
        step3: -1,
        step4: -1,
        step5: -1,
    });
    const [dataService, setDataService] = useState({
        defaultService: 0,
        optionService: 0,
    });
    const [languageChoose, setLanguageChoose] = useState([]);
    const [addressChoose, setAddressChoose] = useState([]);

    //function

    const submitStep1 = async () => {
        if (
            data.name !== "" &&
            data.id_type_job !== "" &&
            data.quantity !== 0 &&
            data.description !== "" &&
            data.request !== "" &&
            data.id_language.length > 0 &&
            data.id_location.length > 0
        ) {
            const a = await submitStepOne(data, idBusiness, dispatch);
            if (a === 0) setStep(step + 1);
            else setStep(step + 1);
        } else {
            console.log("chua nhap day du thong tin");
        }
    };
    const submitStep2 = async () => {
        if (dataStep.step1 !== -1 && dataStep.step2 !== -1 && dataStep.step3 !== -1 && dataStep.step4 !== -1 && dataStep.step5 !== -1) {
            const a = submitStepTwo(dataStep, id_post);
            if (a === 0) setStep(step + 1);
            else setStep(step + 1);
        } else {
            console.log("chua chon quy trinh");
        }
    };

    const submitComplete = async () => {
        if (dataService.defaultService !== 0) {
            submitStepThree(dataService, id_post, navigate);
        } else {
            console.log("chua chon dich vu");
        }
    };
    const preStep = () => {
        setStep(step - 1);
    };

    const handleLuong = (e) => {
        if (e.target.checked) {
            setData({ ...data, salary_min: 0, salary_max: 0 });
        } else {
            const min = document.getElementById("salary_min").value;
            const max = document.getElementById("salary_max").value;
            setData({ ...data, salary_min: min, salary_max: max });
        }
        setSalary(!salary);
    };

    const handlePlusAddress = () => {
        setCountAddress(countAddress + 1);
        setListAddressChoose([...listAddressChoose, countAddress]);
    };

    const handleChooseAddress = (option, e) => {
        const newArr = address;
        const a = { ...option, isDisable: true, indexChoose: e };
        let newAddressChoose = [...addressChoose, a];
        let check = newArr.find((arr) => arr.indexChoose === e);
        if (check) {
            const index = newAddressChoose.findIndex((a) => a.indexChoose === e);
            const a1 = newAddressChoose.slice(0, index);
            const a2 = newAddressChoose.slice(index + 1, newAddressChoose.length);
            newAddressChoose = a1.concat(a2);
            check = { ...check, indexChoose: -1, isDisable: false };
            newArr[check.index] = check;
        }
        newArr[option.index] = a;
        setAddress(newArr);
        setAddressChoose([...newAddressChoose]);
        setData({
            ...data,
            id_location: newAddressChoose.map((e) => {
                return e.value;
            }),
        });
    };

    const handleRemoveAddress = (indexChoose) => {
        if (listAddressChoose.length > 1) {
            const newArr = address;
            let newAddressChoose = [...addressChoose];

            let check = newArr.find((arr) => arr.indexChoose === indexChoose);
            check = { ...check, indexChoose: -1, isDisable: false };
            newArr[check.index] = check;

            const index = newAddressChoose.findIndex((a) => a.indexChoose === indexChoose);
            const a1 = newAddressChoose.slice(0, index);
            const a2 = newAddressChoose.slice(index + 1, newAddressChoose.length);
            newAddressChoose = a1.concat(a2);

            let newListAddressChoose = listAddressChoose.filter((a) => a !== indexChoose);

            setAddress(newArr);
            setListAddressChoose(newListAddressChoose);
            setAddressChoose(newAddressChoose);
        }
    };
    const handleAddAddress = () => {
        console.log("add");
    };
    const handleUpdateAddress = () => {
        console.log("update");
    };

    useEffect(() => {
        Promise.all([
            getAPITypeJob(setTypejob),
            getAPILanguage(setLanguage),
            getAPIAddress(setAddress, idBusiness),
            getAPIEmailTamplate(idBusiness, setEmail),
            getAPIServiceBusiness(idBusiness, setService),
        ]);
        // eslint-disable-next-line
    }, []);
    return (
        <div className="relative ">
            <div className="max-w-main mx-auto mt-3 min-h-[calc(100vh-80px)]">
                <div className="w-full py-2 mt-3 bg-w ">
                    <ul className="flex justify-center h-full ">
                        <li className="w-3/12 text-center my-auto">
                            <span className={(step === 1 ? "bg-blue " : "bg-text1 ") + "inline-block w-[30px] h-[30px] rounded-full leading-[30px]"}>
                                1
                            </span>
                            <p>Chỉnh sửa việc làm </p>
                        </li>
                        <li className="w-3/12 text-center my-auto">
                            <span className={(step === 2 ? "bg-blue " : "bg-text1 ") + "inline-block w-[30px] h-[30px] rounded-full leading-[30px]"}>
                                2
                            </span>
                            <p>Thiết lập quy trình tuyển dụng </p>
                        </li>
                        <li className="w-3/12 text-center my-auto">
                            <span className={(step === 3 ? "bg-blue " : "bg-text1 ") + "inline-block w-[30px] h-[30px] rounded-full leading-[30px]"}>
                                3
                            </span>
                            <p>Đăng tuyển dụng</p>
                        </li>
                    </ul>
                </div>
                <div className=" my-2">
                    <div className={step !== 1 ? "hidden" : ""}>
                        <div className="px-5 pt-2 pb-4 bg-w">
                            <div>Mô Tả Công Việc</div>
                            <div className="flex justify-center gap-28 mb-3">
                                <div className="flex-1">
                                    <Input
                                        placeholder="Eg: Lập Trình Viên Back-End"
                                        id="name"
                                        name="name"
                                        label="Tên Công Việc"
                                        init={data}
                                        setValue={setData}
                                    />
                                </div>
                                <div className="flex-1">
                                    <p className="mb-2">Cấp Bậc</p>
                                    <Select
                                        options={typejob}
                                        name="id_type_job"
                                        onChange={(option) => {
                                            setData({ ...data, id_type_job: option.value });
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="flex justify-center gap-28 mb-3">
                                <div className="flex-1">
                                    <p className="mb-2">Ngôn ngữ lập trình</p>
                                    <Select
                                        options={language}
                                        isMulti
                                        onChange={(option) => {
                                            const listLanguage = option.map((e) => {
                                                return e.value;
                                            });
                                            setLanguageChoose(option);
                                            setData({ ...data, id_language: listLanguage });
                                        }}
                                        isOptionDisabled={() => languageChoose.length >= 3}
                                    />
                                </div>
                                <div className="flex-1">
                                    <Input
                                        placeholder="Eg: Số lượng nhân viên tuyển cho công việc"
                                        id="quantity"
                                        name="quantity"
                                        label="Số lượng ứng tuyển"
                                        init={data}
                                        setValue={setData}
                                    />
                                </div>
                            </div>
                            <div className="">
                                <p className="mb-2 inline-block">Địa chỉ</p>
                                <div className="flex flex-wrap ">
                                    {listAddressChoose.map((e) => {
                                        return (
                                            <div className="w-full max-h-10 flex mb-5" key={e}>
                                                <div className="flex-1">
                                                    <Select
                                                        options={address}
                                                        isOptionDisabled={(option) => option.isDisable}
                                                        onChange={(option) => {
                                                            handleChooseAddress(option, e);
                                                        }}
                                                    />
                                                </div>
                                                <div className="mx-2 ml-4 flex h-6 my-auto text-text1" onClick={handleAddAddress}>
                                                    <FontAwesomeIcon icon={faPlusSquare} className="w-10/12 h-full" />
                                                </div>
                                                <div className="mx-2 flex h-6 my-auto text-text1" onClick={handleUpdateAddress}>
                                                    <FontAwesomeIcon icon={faPenToSquare} className="w-10/12 h-full" />
                                                </div>
                                                <div
                                                    className="mx-2 flex h-6 my-auto text-text1"
                                                    onClick={() => {
                                                        handleRemoveAddress(e);
                                                    }}
                                                >
                                                    <FontAwesomeIcon icon={faTrashCan} className="w-10/12 h-full" />
                                                </div>
                                            </div>
                                        );
                                    })}
                                    {listAddressChoose.length < 3 && (
                                        <div
                                            className="w-full max-h-10 flex mb-5 border-dotted border-2 border-gray-300 rounded-md"
                                            onClick={handlePlusAddress}
                                        >
                                            <div className="h-full w-10 flex justify-center items-center text-text1">
                                                <FontAwesomeIcon icon={faPlusSquare} className="w-5 h-5" />
                                            </div>
                                            <div className="h-full leading-9 text-text1">Thêm địa chỉ mới</div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <div>
                                <label>Mô Tả</label>
                                <textarea
                                    maxLength="14500"
                                    rows="5"
                                    placeholder="Mô tả về công việc"
                                    className="border w-full p-1 mt-2"
                                    name="description"
                                    onChange={(e) => {
                                        setData({ ...data, [e.target.name]: e.target.value });
                                    }}
                                ></textarea>
                                <div className="flex justify-end text-[12px] text-text1">({14500}/14500 ký tự)</div>
                            </div>
                            <div className="">
                                <label className="">Yêu cầu</label>
                                <textarea
                                    maxLength="14500"
                                    rows="5"
                                    placeholder="Yêu cầu cho công việc"
                                    className="border w-full p-1 mt-2"
                                    name="request"
                                    onChange={(e) => {
                                        setData({ ...data, [e.target.name]: e.target.value });
                                    }}
                                ></textarea>
                                <div className="flex justify-end text-[12px] text-text1">({14500}/14500 ký tự)</div>
                            </div>
                            <div className="w-full ">
                                <p className="mb-1">Mức Lương</p>
                                <div className="h-6 flex items-center gap-2">
                                    <input name="salary" type="checkbox" id="Luong" onChange={handleLuong} />
                                    <label htmlFor="Luong">Lương thương lượng</label>
                                </div>
                                <div className="flex gap-28">
                                    <div className="flex-1">
                                        <Input
                                            id="salary_min"
                                            name="salary_min"
                                            placeholder="Mức lương tối thiểu"
                                            dis={salary}
                                            init={data}
                                            setValue={setData}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <Input
                                            id="salary_max"
                                            name="salary_max"
                                            placeholder="Mức lương tối đa"
                                            dis={salary}
                                            init={data}
                                            setValue={setData}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={step !== 2 ? "hidden" : ""}>
                        <div className="p-4 bg-w">
                            <div className="w-full flex flex-wrap border mb-2 py-3 px-2 items-center rounded-md">
                                <div className="w-9/12 flex flex-col">
                                    <div>Bước 1:</div>
                                    <div>Nhận hồ sơ</div>
                                </div>
                                <Select
                                    options={email}
                                    className="w-3/12"
                                    onChange={(e) => {
                                        setDataStep({ ...dataStep, step1: e.value });
                                    }}
                                />
                            </div>
                            <div className="w-full flex flex-wrap border mb-2 py-3 px-2 items-center rounded-md">
                                <div className="w-9/12 flex flex-col">
                                    <div>Bước 2:</div>
                                    <div>Duyệt hồ sơ</div>
                                </div>
                                <Select
                                    options={email}
                                    className="w-3/12"
                                    onChange={(e) => {
                                        setDataStep({ ...dataStep, step2: e.value });
                                    }}
                                />
                            </div>
                            <div className="w-full flex flex-wrap border mb-2 py-3 px-2 items-center rounded-md">
                                <div className="w-9/12 flex flex-col">
                                    <div>Bước 3:</div>
                                    <div>Kiểm tra năng lực</div>
                                </div>
                                <Select
                                    options={email}
                                    className="w-3/12"
                                    onChange={(e) => {
                                        setDataStep({ ...dataStep, step3: e.value });
                                    }}
                                />
                            </div>
                            <div className="w-full flex flex-wrap border mb-2 py-3 px-2 items-center rounded-md">
                                <div className="w-9/12 flex flex-col">
                                    <div>Bước 4:</div>
                                    <div>Đề nghị nhận việc</div>
                                </div>
                                <Select
                                    options={email}
                                    className="w-3/12"
                                    onChange={(e) => {
                                        setDataStep({ ...dataStep, step4: e.value });
                                    }}
                                />
                            </div>
                            <div className="w-full flex flex-wrap border mb-2 py-3 px-2 items-center rounded-md">
                                <div className="w-9/12 flex flex-col">
                                    <div>Bước 5:</div>
                                    <div>Đã tuyển</div>
                                </div>
                                <Select
                                    options={email}
                                    className="w-3/12"
                                    onChange={(e) => {
                                        setDataStep({ ...dataStep, step5: e.value });
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                    <div className={step !== 3 ? "hidden" : ""}>
                        <div className=" p-5 bg-w mb-4">
                            <div className="w-full">
                                <div className="grid grid-cols mb-2 border-b border-b-text1 pb-2">
                                    <p>Chọn Gói Dịch Vụ Phù Hợp Để Đăng Tuyển</p>
                                </div>
                                <div className="grid grid-cols-5 gap-4 mb-2 pb-2 border-b border-b-text1">
                                    <div className="col-span-2">Gói dịch vụ</div>
                                    <div className="col-span-2">Tên Dịch vụ - Ngày hết hạng</div>
                                    <div className="text-center">Số lượng</div>
                                </div>
                                <div className="grid grid-cols-5 gap-4 mb-2 border-b border-b-text1 py-3">
                                    <div className="col-span-2">Dịch vụ đăng tin</div>
                                    <div className="col-span-2">
                                        <Select
                                            options={service.filter((e) => e.type === 0)}
                                            onChange={(e) => {
                                                setDataService({ ...dataService, defaultService: e.value });
                                            }}
                                        />
                                    </div>
                                    <div className="text-center">1</div>
                                </div>
                            </div>
                        </div>
                        <div className=" bg-w p-5">
                            <div className="w-full">
                                <div className="grid grid-cols mb-2 border-b border-b-text1 pb-2">
                                    <p>Tùy Chọn Dịch Vụ Thêm</p>
                                </div>
                                <div className="grid grid-cols-5 gap-4 mb-2 pb-2 border-b border-b-text1">
                                    <div className="col-span-2">Gói dịch vụ</div>
                                    <div className="col-span-2">Tên Dịch vụ - Ngày hết hạng</div>
                                    <div className="text-center">Số lượng</div>
                                </div>
                                <div className="grid grid-cols-5 gap-4 mb-2 border-b border-b-text1 py-3">
                                    <div className="col-span-2">Dịch vụ hiển thị</div>
                                    <div className="col-span-2">
                                        <Select
                                            options={service.filter((e) => e.type === 1)}
                                            onChange={(e) => {
                                                setDataService({ ...dataService, optionService: e.value });
                                            }}
                                        />
                                    </div>
                                    <div className="text-center">1</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-w max-w-main mx-auto flex justify-center ">
                    {step === 1 ? (
                        <Button label="Lưu và tiếp tục" className="h-10 px-2 my-2" onClick={submitStep1} />
                    ) : step === 2 ? (
                        <>
                            <Button label="Quay lại" className="h-10 px-2 my-2 mr-4" onClick={preStep} />
                            <Button label="Lưu và tiếp tục" className="h-10 px-2 my-2 " onClick={submitStep2} />
                        </>
                    ) : (
                        <>
                            <Button label="Quay lại" className="h-10 px-2 my-2 mr-4" onClick={preStep} />
                            <Button label="Hoành thành" className="h-10 px-2 my-2 " onClick={submitComplete} />
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Post;
