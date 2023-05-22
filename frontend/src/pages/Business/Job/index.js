import { faSliders } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button, Input, JobB } from "~/components";
import { getAPIPostBusiness } from "~/redux/apiRequests";

function Job() {
    const [post, setPost] = useState([]);

    useEffect(() => {
        const idBusiness = JSON.parse(localStorage.getItem("isBusiness"))?.id;

        Promise.all([getAPIPostBusiness(idBusiness, setPost)]);
    }, []);
    return (
        <>
            <div className="max-w-main mx-auto pt-3 px-2 bg-w mb-2">
                <div className="flex gap-10 py-1">
                    <div className="text-base cursor-pointer font-bold border-b-2 border-w hover:border-text1">Đang hiển thị</div>
                    <div className="text-base cursor-pointer font-bold border-b-2 border-w hover:border-text1">Đang ẩn</div>
                    <div className="text-base cursor-pointer font-bold border-b-2 border-w hover:border-text1">Sắp hết hạn</div>
                    <div className="text-base cursor-pointer font-bold border-b-2 border-w hover:border-text1">Đã hết hạn</div>
                    <div className="text-base cursor-pointer font-bold border-b-2 border-w hover:border-text1">Nháp</div>
                </div>
            </div>
            <div className="max-w-main mx-auto mb-2 px-2 bg-w py-2">
                <div className="flex mb-4">
                    <div className="flex justify-between w-full">
                        <div className="w-6/12">
                            <Input placeholder="Nhập thông tin công việc" />
                        </div>
                        <div className="h-full flex gap-3">
                            <Button label="Xuất ra Excel" className="px-5 !text-text1 bg-w border border-text1 hover:bg-red hover:!text-w" />
                            <Button
                                label={<FontAwesomeIcon icon={faSliders} className=" text-text1 text-sm group-hover:text-w" />}
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
                            key={e.id}
                            nameP={e.job.name}
                            id={e.id}
                            address={e.job.addresses}
                            emailApply={e.business.email}
                            service={e.services}
                            expire={e.expire}
                            cv={e.cvs}
                        />
                    );
                })}
            </div>
        </>
    );
}

export default Job;
