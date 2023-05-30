import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input } from "~/components";
import { path } from "~/routes/path";
import { signInBusiness } from "~/redux/apiRequests";
import { useDispatch } from "react-redux";

function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        signInBusiness(data, dispatch, navigate);
    };
    return (
        <div className="w-main mx-auto min-h-[calc(100vh-60px)] flex bg-w ">
            <div className="w-6/12 my-auto px-32 mx-auto">
                <p className="mb-5 text-b">Chào mừng đến với DNCJOB</p>
                <Button className="w-full h-10 " label="Đăng nhập với Google" />
                <div className="align-center flex items-center mt-3 mb-1">
                    <div className="h-[1px] w-full bg-text1"></div>
                    <div className="mx-2">Hoặc</div>
                    <div className="h-[1px] w-full bg-text1"></div>
                </div>
                <form onSubmit={handleSubmit}>
                    <Input className="mb-2" type="email" label="Email" id="email" name="email" placeholder="Email" setValue={setData} init={data} />
                    <Input
                        className="mb-2"
                        setValue={setData}
                        init={data}
                        label="Mật khẩu"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Mật khẩu"
                    />
                    <p className="text-right text-red-600">{}</p>
                    <Button label="Đăng Nhập" className="w-full h-10 mt-3" />
                </form>
                <div className="float-right mt-1 text-[14px] italic">
                    Bạn chưa có tài khoản?{" "}
                    <Link to={path.BSIGNUP} className="text-link">
                        Đăng ký!
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default SignIn;
