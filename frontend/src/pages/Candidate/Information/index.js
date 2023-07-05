import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Button, Input } from "~/components";
import { getCandidateByid } from "~/redux/apiRequests";

function Information() {
    const { id } = useParams();
    const [candidate, setCandidate] = useState({ id: 0, first_name: "", last_name: "", email: "" });
    useEffect(() => {
        getCandidateByid(id, setCandidate);
    }, [id]);
    return (
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
                            <Input label="Họ và tên lót" value={candidate.first_name} setValue={setCandidate} init={candidate} name="first_name" />
                        </div>
                        <div className="flex-1">
                            <Input label="Tên" value={candidate.last_name} setValue={setCandidate} init={candidate} name="last_name" />
                        </div>
                    </div>
                    <div className="mb-2">
                        <Input label="Email" value={candidate.email} setValue={setCandidate} init={candidate} name="email" />
                    </div>
                </div>

                <p className="mt-3 py-3 px-3 border-b border-text1 bg-w">Kinh nghiệm làm việc</p>
                <div className=" bg-w px-3 py-3 ">
                    <div className="flex gap-5 mb-2">
                        <div className="flex-1">
                            <Input label="Chức danh" />
                        </div>
                        <div className="flex-1">
                            <Input label="Nơi làm việc" />
                        </div>
                        <div className="flex-1">
                            <Input label="Kinh nghiệm" />
                        </div>
                    </div>
                    <div className="flex gap-5 mb-2 items-center">
                        <div className="flex-1">
                            <Input type="date" label="Ngày bắt đầu" />
                        </div>
                        <div className="flex-1">
                            <Input type="date" label="Ngày bắt đầu" />
                        </div>
                        <div className=" h-6 flex items-center gap-2">
                            <input name="job" type="checkbox" id="job" className="h-4 w-4" />
                            <label htmlFor="job">Công việc hiện tại</label>
                        </div>
                    </div>
                    <div className="mb-2">
                        <label>Mô tả </label>
                        <textarea
                            maxLength="14500"
                            rows="5"
                            placeholder="Mô tả về công việc"
                            className="border w-full p-1 mt-2"
                            name="des"
                        ></textarea>
                    </div>
                </div>
                <div className="bg-w pr-3 flex justify-end pb-4">
                    <Button label="Lưu" className="px-8 h-10" />
                </div>
            </div>
        </div>
    );
}

export default Information;
