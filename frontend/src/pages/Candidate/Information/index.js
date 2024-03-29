import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { Button, Input, Modal } from '~/components';
import { getCandidateByid, resetPassword } from '~/redux/apiRequests';

function Information() {
    const { id } = useParams();
    const [candidate, setCandidate] = useState({ id: 0, first_name: '', last_name: '', email: '' });
    const [update, setUpdate] = useState({ type: 'Chỉnh sửa', dis: true });
    const [isModal, setIsModal] = useState(false);

    const [pass, setPass] = useState({ password: '', rePassword: '', id: id });
    const resetPass = () => {
        if (pass.password === pass.rePassword) {
            resetPassword(pass);
        } else {
            toast.warning('Mật khẩu nhập lại không chính xác');
        }
    };
    useEffect(() => {
        getCandidateByid(id, setCandidate);
    }, [id]);
    return (
        <>
            {isModal && (
                <Modal onClick={setIsModal} label="Thêm địa chỉ làm việc" button="Gửi" submit={resetPass}>
                    <div className="mb-[50px]">
                        <Input
                            type="password"
                            label="Nhập password"
                            name="password"
                            placeholder="Password"
                            init={pass}
                            setValue={setPass}
                        />
                        <p className="mb-2"></p>
                        <Input
                            type="password"
                            label="Nhập lại password"
                            name="rePassword"
                            placeholder="Nhập lại password"
                            init={pass}
                            setValue={setPass}
                        />
                    </div>
                </Modal>
            )}
            <div className="max-w-main mx-auto px-2 pt-3 flex gap-5">
                <div className="flex-1 ">
                    <div className="bg-w">
                        <div className="py-3 px-2 ">Thông tin cá nhân</div>
                    </div>
                </div>
                <div className="flex-[3]">
                    <p className="py-3 px-3 border-b border-text1  bg-w">Thông tin cá nhân</p>
                    <div className="bg-w px-3 py-3 ">
                        <div className="flex gap-5 mb-2">
                            <div className="flex-1">
                                <Input
                                    dis={update.dis}
                                    label="Họ và tên lót"
                                    value={candidate.first_name}
                                    setValue={setCandidate}
                                    init={candidate}
                                    name="first_name"
                                />
                            </div>
                            <div className="flex-1">
                                <Input
                                    dis={update.dis}
                                    label="Tên"
                                    value={candidate.last_name}
                                    setValue={setCandidate}
                                    init={candidate}
                                    name="last_name"
                                />
                            </div>
                        </div>
                        <div className="mb-2">
                            <Input
                                dis={update.dis}
                                label="Email"
                                value={candidate.email}
                                setValue={setCandidate}
                                init={candidate}
                                name="email"
                            />
                        </div>
                        <p
                            onClick={() => {
                                setIsModal(true);
                            }}
                            className=" cursor-pointer mt-1 text-[16px] italic text-link"
                        >
                            Đổi mật khẩu
                        </p>
                    </div>

                    <p className="mt-3 py-3 px-3 border-b border-text1 bg-w">Kinh nghiệm làm việc</p>
                    <div className=" bg-w px-3 py-3 ">
                        <div className="flex gap-5 mb-2">
                            <div className="flex-1">
                                <Input dis={update.dis} label="Chức danh" />
                            </div>
                            <div className="flex-1">
                                <Input dis={update.dis} label="Nơi làm việc" />
                            </div>
                            <div className="flex-1">
                                <Input dis={update.dis} label="Kinh nghiệm" />
                            </div>
                        </div>
                        <div className="flex gap-5 mb-2 items-center">
                            <div className="flex-1">
                                <Input dis={update.dis} type="date" label="Ngày bắt đầu" />
                            </div>
                            <div className="flex-1">
                                <Input dis={update.dis} type="date" label="Ngày bắt đầu" />
                            </div>
                            <div className=" h-6 flex items-center gap-2">
                                <input disabled={update.dis} name="job" type="checkbox" id="job" className="h-4 w-4" />
                                <label htmlFor="job">Công việc hiện tại</label>
                            </div>
                        </div>
                        <div className="mb-2">
                            <label>Mô tả </label>
                            <textarea
                                disabled={update.dis}
                                maxLength="14500"
                                rows="5"
                                placeholder="Mô tả về công việc"
                                className="border w-full p-1 mt-2"
                                name="des"
                            ></textarea>
                        </div>
                    </div>
                    <div className="bg-w pr-3 flex justify-end pb-4">
                        <Button
                            onClick={() => {
                                if (update.dis) {
                                    setUpdate({ type: 'Lưu', dis: false });
                                } else {
                                    setUpdate({ type: 'Chỉnh sửa', dis: true });
                                }
                            }}
                            label={update.type}
                            className="px-8 h-10"
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Information;
