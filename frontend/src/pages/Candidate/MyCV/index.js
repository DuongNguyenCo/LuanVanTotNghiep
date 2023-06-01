import { CV } from "~/components";

function MyCV() {
    return (
        <div>
            <div className="pb-4 px-5 mb-4 bg-w mx-auto max-w-[900px]">
                <p className="text-[20px] py-6  text-red font-[600]">Quản lý CV</p>
                <p className=" text-[17px] pb-4">Tải CV của bạn bên dưới để có thể sử dụng xuyên suốt quá trình tìm việc</p>
                <label
                    htmlFor="file"
                    className="flex flex-col items-center justify-center w-auto h-[80px] bg-second mb-[25px] rounded-lg cursor-pointer "
                >
                    <div className="flex flex-col items-center justify-center ">
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                            <span className="font-semibold">Click to upload</span> or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                            Chúng tôi chấp nhận các tệp .doc .docx, .pdf, không có mật khẩu bảo vệ, tối đa 3MB
                        </p>
                    </div>
                    <input
                        required
                        id="file"
                        type="file"
                        accept="application/pdf, application/msword, application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        className="hidden"
                        name="url"
                    />
                </label>
                <div className="grid grid-cols-3 gap-5">
                    <CV />
                    <CV />
                    <CV />
                    <CV />
                    <CV />
                </div>
            </div>
        </div>
    );
}

export default MyCV;
