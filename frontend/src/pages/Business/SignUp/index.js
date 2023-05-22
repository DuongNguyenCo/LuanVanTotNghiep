import { Link } from "react-router-dom";
import { Button, Input } from "~/components";
import { path } from "~/routes/path";

function SignUp() {
    return (
        <div className="w-main bg-w mx-auto min-h-[calc(100vh-60px)] flex">
            <div className="w-6/12 my-auto px-32 mx-auto">
                <p className="mb-5 text-p">Chào mừng đến với DNCJOB</p>
                <Button
                    className="w-full h-10 bg-button text-chu2"
                    label="Đăng nhập với Google"
                />
                <div className="align-center flex items-center mt-3 mb-1">
                    <div className="h-[1px] w-full bg-text1"></div>
                    <div className="mx-2 ">Hoặc</div>
                    <div className="h-[1px] w-full bg-text1"></div>
                </div>
                <form>
                    <Input
                        request={true}
                        label="Họ"
                        id="first_name"
                        name="first_name"
                        placeholder="Họ"
                    />
                    <Input
                        request={true}
                        label="Tên"
                        id="last_name"
                        name="last_name"
                        placeholder="Tên"
                    />
                    <Input
                        request={true}
                        label="Email"
                        id="email"
                        name="email"
                        placeholder="Email"
                    />
                    <Input
                        request={true}
                        label="Mật khẩu"
                        id="password"
                        name="pass"
                        type="password"
                        placeholder="Mật khẩu"
                    />
                    <Input
                        request={true}
                        label="Xác nhận mật khẩu"
                        id="rePassword"
                        name="rePassword"
                        type="password"
                        placeholder="Xác nhận mật khẩu"
                    />
                    <p className="text-right text-red-600">{}</p>
                    <Button
                        label="Đăng Ký"
                        className="w-full h-10 mt-3 bg-button text-chu2"
                    />
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
