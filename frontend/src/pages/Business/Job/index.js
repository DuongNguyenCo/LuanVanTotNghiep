import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { Button, Input, JobB } from '~/components';
import {
    deletePost,
    getAPIPostBusiness,
    getAPIPostExpireBusiness,
    getAPIPostHiddenBusiness,
    hiddenPost,
} from '~/redux/apiRequests';

function Job() {
    const [post, setPost] = useState([]);
    const [step, setStep] = useState(1);
    const idBusiness = JSON.parse(localStorage.getItem('isBusiness'))?.id;

    const handleHidden = async (id) => {
        await hiddenPost(id, idBusiness, setPost);
    };
    const handleDelete = (id) => {
        Swal.fire({
            title: 'Bạn muốn xóa dữ liệu',
            text: 'Dữ liệu sẽ không được hoàn tác trở lại',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Xác nhận',
        }).then(async (result) => {
            if (result.isConfirmed) {
                await Swal.fire('Đã xóa', 'Bạn đã xóa thành công', 'success');
                await deletePost(id, idBusiness);
            }
            if (step === 1) {
                getAPIPostBusiness(idBusiness, setPost);
            } else if (step === 2) {
                getAPIPostHiddenBusiness(idBusiness, setPost);
            } else {
                getAPIPostExpireBusiness(idBusiness, setPost);
            }
        });
    };
    const handleUpdate = () => {
        console.log('cap nhat');
    };
    const handleReload = () => {
        console.log('lam moi');
    };
    useEffect(() => {
        Promise.all([getAPIPostBusiness(idBusiness, setPost)]);
    }, [idBusiness]);
    return (
        <>
            <div className="max-w-main mx-auto pt-3 px-2 bg-w mb-2">
                <div className="flex gap-10 py-1">
                    <div
                        className={`text-base cursor-pointer font-bold border-b-2 ${
                            step === 1 ? 'border-red' : 'border-w hover:border-text1'
                        }`}
                        onClick={() => {
                            setStep(1);
                            getAPIPostBusiness(idBusiness, setPost);
                        }}
                    >
                        Đang hiển thị
                    </div>
                    <div
                        className={`text-base cursor-pointer font-bold border-b-2 ${
                            step === 2 ? 'border-red' : 'border-w hover:border-text1'
                        }`}
                        onClick={() => {
                            setStep(2);
                            getAPIPostHiddenBusiness(idBusiness, setPost);
                        }}
                    >
                        Đang ẩn
                    </div>
                    <div
                        className={`text-base cursor-pointer font-bold border-b-2 ${
                            step === 4 ? 'border-red' : 'border-w hover:border-text1'
                        }`}
                        onClick={() => {
                            setStep(4);
                            getAPIPostExpireBusiness(idBusiness, setPost);
                        }}
                    >
                        Đã hết hạn
                    </div>
                </div>
            </div>
            <div className="max-w-main min-h-[440px] mx-auto mb-2 px-2 bg-w py-2">
                <div className="flex mb-4">
                    <div className="flex justify-between w-full">
                        <div className="w-6/12">
                            <Input placeholder="Nhập thông tin công việc" />
                        </div>
                        <div className="h-full flex gap-3">
                            <Button
                                label="Xuất ra Excel"
                                className="px-5 !text-text1 bg-w border border-text1 hover:bg-red hover:!text-w"
                            />
                            <Button
                                label={
                                    <FontAwesomeIcon
                                        icon={faSliders}
                                        className=" text-text1 text-sm group-hover:text-w"
                                    />
                                }
                                className="group  px-4 bg-w border border-text1 hover:bg-red "
                            />
                        </div>
                    </div>
                    <div></div>
                </div>
                <div className="flex gap-4 pb-2">
                    <div className="flex-[2.5]">Tên Công việc</div>
                    <div className="flex-[1.5]">Dịch Vụ</div>
                    <div className="flex-1 ">Ngày Hết Hạn</div>
                    <div className="flex-1 text-center">Hồ sơ ứng tuyển</div>
                    <div className="flex-1 text-center">Cập nhật</div>
                </div>
                {post.map((e) => {
                    return (
                        <JobB
                            status={step}
                            key={e.id}
                            nameP={e.job.name}
                            id={e.id}
                            address={e.job.addresses}
                            emailApply={e.business.email}
                            service={e.services}
                            expire={e.expire}
                            cv={e.apply}
                            handleHidden={handleHidden}
                            handleDelete={handleDelete}
                            handleUpdate={handleUpdate}
                            handleReload={handleReload}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default Job;
