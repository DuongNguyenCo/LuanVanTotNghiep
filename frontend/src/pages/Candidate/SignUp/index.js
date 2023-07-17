
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Input } from '~/components';
import { signUpCandidata } from '~/redux/apiRequests';
import { path } from '~/routes/path';

function SignUp() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data, setData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        rePassword: '',
    });
 

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (
            data.password !== '' &&
            data.email !== '' &&
            data.first_name !== '' &&
            data.last_name !== '' &&
            data.rePassword !== ''
        ) {
            if (data.password === data.rePassword) {
                signUpCandidata(data, dispatch, navigate);
            } else {
                toast.warning('Mật khẩu nhập lại không chính xác');
            }
        } else {
            toast.warning('Điền đầy đủ thông tin');
        }
    };
    return (
        <div className="w-main bg-w mx-auto min-h-[calc(100vh-60px)] flex">
            <div className="w-6/12 my-auto px-32">
                <p className="mb-5 text-p">Chào mừng đến với DNCJOB</p>
                <Button className="w-full h-10 bg-button text-chu2" label="Đăng nhập với Google" />
                <div className="align-center flex items-center mt-3 mb-1">
                    <div className="h-[1px] w-full bg-text1"></div>
                    <div className="mx-2 ">Hoặc</div>
                    <div className="h-[1px] w-full bg-text1"></div>
                </div>
                <form onSubmit={handleSubmit}>
                    <Input
                        label="Họ"
                        id="first_name"
                        name="first_name"
                        placeholder="Họ"
                        init={data}
                        setValue={setData}
                    />
                    <Input
                        label="Tên"
                        id="last_name"
                        name="last_name"
                        placeholder="Tên"
                        init={data}
                        setValue={setData}
                    />
                    <Input label="Email" id="email" name="email" placeholder="Email" init={data} setValue={setData} />
                    <Input
                        label="Mật khẩu"
                        id="password"
                        name="password"
                        type="password"
                        placeholder="Mật khẩu"
                        init={data}
                        setValue={setData}
                    />
                    <Input
                        label="Xác nhận mật khẩu"
                        id="rePassword"
                        name="rePassword"
                        type="password"
                        placeholder="Xác nhận mật khẩu"
                        init={data}
                        setValue={setData}
                    />
                    <p className="text-right text-red-600">{}</p>
                    <Button label="Đăng Ký" className="w-full h-10 mt-3 bg-button text-chu2" />
                </form>
                <small className="float-right mt-1 text-[14px] italic">
                    Bạn đã có tài khoản?{' '}
                    <Link to={path.CSIGNIN} className="text-link">
                        Đăng nhập!
                    </Link>
                </small>
            </div>
            <div className=" w-6/12 my-auto">
                <p>Sign in to get instant access to thousands of reviews and salary information</p>
                <p>View salary to help you negotiate your offer or pay rise</p>
                <p>Find out about benefits, interview, company culture via reviews</p>
                <p>Easy apply with only 1 click</p>
                <p>Manage your own profile & privacy</p>
            </div>
        </div>
    );
}

export default SignUp;
