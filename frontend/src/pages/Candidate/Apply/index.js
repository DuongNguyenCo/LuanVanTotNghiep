import { Button } from "~/components";

function Apply() {
    return (
        <div className="bg-second">
            <div className="max-w-main bg-w mt-3 mx-auto px-10 pt-2 pb-4 rounded-md">
                <div>Tên công việc tại công ty</div>
                <div className="flex flex-wrap">
                    <div className="w-full flex mt-2">
                        <div className="flex-1">Your CV</div>
                        <div className="flex-[6]">
                            <div>
                                <input
                                    type="file"
                                    className="w-full text-sm mb-1 text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold hover:file:bg-violet-100"
                                    accept="application/pdf, application/msword"
                                    onChange={(e) => {
                                        console.log(e.target.files[0]);
                                    }}
                                />
                            </div>
                            <div className="text-[13px] italic text-text1">chúng tôi chỉ nhận file .doc</div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="mt-1">Những kỹ năng, dự án công việc hoặc thành tích nào khiến bạn trở thành một ứng cử viên sáng giá?</div>
                        <textarea
                            maxLength="500"
                            rows="3"
                            placeholder="Chi tiết và ví dụ cụ thể sẽ làm cho đơn ứng tuyển của bạn tốt hơn..."
                            className="border w-full p-1 mt-2 px-2"
                        ></textarea>
                        <div className="float-right text-[12px] text-text1">{500}/500 ký tự</div>
                        <div>
                            <Button label="Nộp CV" className="w-full h-10 mt-2 bg-button text-chu2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Apply;
