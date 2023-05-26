import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "~/components";
import { applyPost, getAPIJobIdApply } from "~/redux/apiRequests";

function Apply() {
    const { nameJobApply } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState();
    const [apply, setApply] = useState({ file: null, description: "" });

    const handleApply = async () => {
        const fd = new FormData();
        fd.append("file", apply.file);
        fd.append("description", apply.description);
        fd.append("id_post", data.id);
        fd.append("id_candidate", 1);
        await applyPost(fd);
        navigate(`/chi-tiet-cong-viec/${nameJobApply}`);
    };

    useEffect(() => {
        getAPIJobIdApply(nameJobApply, setData);
    }, [nameJobApply]);

    return (
        <div className="bg-second">
            <div className="max-w-main bg-w mt-3 mx-auto px-10 pt-2 pb-4 rounded-md">
                <div className="text-[24px]">{data && data.job.name + " Tại " + data.business.name}</div>
                <div className="flex flex-wrap">
                    <div className="w-full flex mt-2">
                        <div className="flex-1">CV của bạn</div>
                        <div className="flex-[6]">
                            <div>
                                <input
                                    required
                                    type="file"
                                    className="w-full text-sm mb-1 text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold hover:file:bg-violet-100"
                                    accept="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                                    onChange={(e) => {
                                        // if (e.target.files[0].size > 1024 * 1024 * 3) alert("Chỉ cho phép tải tệp tin nhỏ hơn 3MB");
                                        // else
                                        setApply({ ...apply, file: e.target.files[0] });
                                    }}
                                />
                            </div>
                            <div className="text-[13px] italic text-text1">
                                Chúng tôi chấp nhận các tệp .doc .docx, .pdf, không có mật khẩu bảo vệ, tối đa 3MB
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="mt-1">Những kỹ năng, dự án công việc hoặc thành tích nào khiến bạn trở thành một ứng cử viên sáng giá?</div>
                        <textarea
                            maxLength="500"
                            rows="3"
                            placeholder="Chi tiết và ví dụ cụ thể sẽ làm cho đơn ứng tuyển của bạn tốt hơn..."
                            className="border w-full p-1 mt-2 px-2"
                            onChange={(e) => {
                                setApply({ ...apply, description: e.target.value });
                            }}
                        ></textarea>
                        <div className="float-right text-[12px] text-text1">{500}/500 ký tự</div>
                        <div>
                            <Button label="Nộp CV" className="w-full h-10 mt-2 bg-button text-chu2" onClick={handleApply} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Apply;
