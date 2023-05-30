import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "~/components";
import { path } from "~/routes/path";
import { getCity, getDistrict, getWard, signUpBusiness } from "~/redux/apiRequests";
import { useDispatch } from "react-redux";
import Select from "react-select";

function SignUp() {
    const dispatch = useDispatch();
    const navidate = useNavigate();
    const [city, setCity] = useState([]);
    const [district, setDistrict] = useState([]);
    const [ward, setWard] = useState([]);
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        password: "",
        re_password: "",
        city: "",
        district: "",
        ward: "",
        street: "",
    });
    console.log("data: ", data);
    const handleSignUp = (e) => {
        const { re_password, ...other } = data;
        e.preventDefault();
        signUpBusiness(other, dispatch, navidate);
    };
    useEffect(() => {
        const a = async () => {
            await getCity(setCity);
        };
        a();
    }, []);
    return (
        <div className="w-main bg-w mx-auto min-h-[calc(100vh-60px)] flex">
            <div className="w-8/12 my-auto px-32 mx-auto">
                <p className=" text-p text-center">Chào mừng đến với DNCJOB</p>
                <form className="flex flex-wrap justify-center px-6" onSubmit={handleSignUp}>
                    <div className="w-6/12 pr-3">
                        <Input
                            init={data}
                            setValue={setData}
                            className="mb-1"
                            label="Tên Doanh Nghiệp"
                            id="name"
                            name="name"
                            placeholder="Tên Doanh Nghiệp"
                        />
                        <Input
                            init={data}
                            setValue={setData}
                            className="mb-1"
                            label="Số điện thoại"
                            id="phone"
                            name="phone"
                            placeholder="Số điện thoại"
                        />
                        <Input
                            init={data}
                            setValue={setData}
                            className="mb-1"
                            label="Email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            type="email"
                        />
                        <Input
                            init={data}
                            setValue={setData}
                            className="mb-1"
                            label="Mật khẩu"
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Mật khẩu"
                        />
                        <Input
                            init={data}
                            setValue={setData}
                            className="mb-1"
                            label="Xác nhận mật khẩu"
                            id="re_password"
                            name="re_password"
                            type="password"
                            placeholder="Xác nhận mật khẩu"
                        />
                    </div>
                    <div className="w-6/12 pl-3">
                        <label className="mb-2 inline-block">Tỉnh Thành phố</label>
                        <Select
                            placeholder="Tỉnh Thành phố"
                            options={city}
                            onChange={(e) => {
                                setData({ ...data, city: e.label });
                                getDistrict(e.value, setDistrict);
                            }}
                        />
                        <label className="mb-2 inline-block">Quận huyện</label>
                        <Select
                            placeholder="Quận huyện"
                            options={district}
                            isDisabled={data.city === ""}
                            onChange={(e) => {
                                setData({ ...data, district: e.label });
                                getWard(e.value, setWard);
                            }}
                        />
                        <label className="mb-2 inline-block">Phường xã</label>
                        <Select
                            placeholder="Phường xã"
                            options={ward}
                            isDisabled={data.district === ""}
                            onChange={(e) => {
                                setData({ ...data, ward: e.label });
                            }}
                        />
                        <Input
                            init={data}
                            setValue={setData}
                            className="mb-1"
                            label="Địa chỉ"
                            id="street"
                            name="street"
                            placeholder="Địa chỉ"
                            dis={data.ward === ""}
                        />
                    </div>
                    <Button label="Đăng Ký" className="w-full h-10 mt-3 bg-button text-chu2 felx-1" />
                </form>
                <small className="float-right mt-1 text-[14px] italic">
                    Bạn đã có tài khoản?{" "}
                    <Link to={path.BSIGNIN} className="text-link">
                        Đăng nhập!
                    </Link>
                </small>
            </div>
        </div>
    );
}

export default SignUp;
