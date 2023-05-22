import { Link } from "react-router-dom";
import { Button, Input } from "~/components";
import { path } from "~/routes/path";

function SignIn() {
    return (
        <div className="w-main mx-auto min-h-[calc(100vh-60px)] flex bg-w ">
            <div className="w-6/12 my-auto px-32 ">
                <p className="mb-5 text-b">Chào mừng đến với DNCJOB</p>
                <Button className="w-full h-10 " label="Đăng nhập với Google" />
                <div className="align-center flex items-center mt-3 mb-1">
                    <div className="h-[1px] w-full bg-text1"></div>
                    <div className="mx-2">Hoặc</div>
                    <div className="h-[1px] w-full bg-text1"></div>
                </div>
                <form>
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
                    <p className="text-right text-red-600">{}</p>
                    <Button label="Đăng Nhập" className="w-full h-10 mt-3" />
                </form>
                <div className="float-right mt-1 text-[14px] italic">
                    Bạn chưa có tài khoản?{" "}
                    <Link to={path.CSIGNUP} className="text-link">
                        Đăng ký!
                    </Link>
                </div>
            </div>
            <div className="w-6/12 my-auto">
                <p>
                    Sign in to get instant access to thousands of reviews and
                    salary information
                </p>
                <p>View salary to help you negotiate your offer or pay rise</p>
                <p>
                    Find out about benefits, interview, company culture via
                    reviews
                </p>
                <p>Easy apply with only 1 click</p>
                <p>Manage your own profile & privacy</p>
            </div>
        </div>
    );
}

export default SignIn;
