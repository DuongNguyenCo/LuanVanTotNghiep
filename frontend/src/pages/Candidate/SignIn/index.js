import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Input, Modal } from '~/components';
import { path } from '~/routes/path';
import { forgotPassword, signInCandidate } from '~/redux/apiRequests';
import { useDispatch } from 'react-redux';

function SignIn() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data, setData] = useState({
        email: '',
        password: '',
    });
    const [email, setEmail] = useState({ email: '' });
    const [isModal, setIsModal] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        signInCandidate(data, dispatch, navigate);
    };
    const forgot = () => {
        forgotPassword(email);
    };
    return (
        <>
            {isModal && (
                <Modal onClick={setIsModal} label="Thêm địa chỉ làm việc" button="Gửi" submit={forgot}>
                    <div className="mb-[50px]">
                        <Input label="Nhập email" name="email" placeholder="Email" init={email} setValue={setEmail} />
                    </div>
                </Modal>
            )}
            <div className="w-main mx-auto min-h-[calc(100vh-60px)] flex bg-w ">
                <div className="w-6/12 my-auto px-32 ">
                    <p className="mb-5 text-b">Chào mừng đến với DNCJOB</p>
                    <Button className="w-full h-10 " label="Đăng nhập với Google" />
                    <div className="align-center flex items-center mt-3 mb-1">
                        <div className="h-[1px] w-full bg-text1"></div>
                        <div className="mx-2">Hoặc</div>
                        <div className="h-[1px] w-full bg-text1"></div>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <Input
                            request={true}
                            label="Email"
                            id="email"
                            name="email"
                            placeholder="Email"
                            init={data}
                            setValue={setData}
                        />
                        <Input
                            request={true}
                            label="Mật khẩu"
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Mật khẩu"
                            init={data}
                            setValue={setData}
                        />
                        <p className="text-right text-red-600">{}</p>
                        <Button label="Đăng Nhập" className="w-full h-10 mt-3" />
                    </form>
                    <div
                        onClick={() => {
                            setIsModal(true);
                        }}
                        className="flex justify-end cursor-pointer mt-1 text-[14px] italic text-link"
                    >
                        Quên mật khẩu
                    </div>
                    <div className="float-right mt-1 text-[14px] italic">
                        Bạn chưa có tài khoản?{' '}
                        <Link to={path.CSIGNUP} className="text-link">
                            Đăng ký!
                        </Link>
                    </div>
                </div>
                <div className="w-6/12 my-auto">
                    <p>Sign in to get instant access to thousands of reviews and salary information</p>
                    <p>View salary to help you negotiate your offer or pay rise</p>
                    <p>Find out about benefits, interview, company culture via reviews</p>
                    <p>Easy apply with only 1 click</p>
                    <p>Manage your own profile & privacy</p>
                </div>
            </div>
        </>
    );
}

export default SignIn;
