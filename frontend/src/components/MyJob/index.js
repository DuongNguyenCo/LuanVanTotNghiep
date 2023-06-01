import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logo from "~/assets/logo.png";

import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import Button from "../button";
import { useState } from "react";

function DivMyJobSave() {
    const [tim, setTim] = useState(true);
    return (
        <div className="odd:bg-w even:bg-[rgb(255,241,225)] px-4 py-2">
            <div className="flex justify-between items-center mb-2">
                <div className="text-[14px] text-[rgb(78,76,77)]">Đăng 19 ngày trước</div>
                <div className="bg-yellow text-w px-2">hot</div>
            </div>
            <div className="flex items-center mb-3">
                <div className="flex-1 w-3/12 mr-4">
                    <img src={logo} alt="123" />
                </div>
                <div className="flex-[4]">
                    <div className="font-bold">Full stack engineer (NodeJS/ ReactJS)</div>
                    <div className="text-text1 text-[14px]">Ho Chi Minh</div>
                    <div className="text-[14px] text-[rgb(104,186,80)] mb-1">1,600 - 3,000 USD</div>
                    <div className="flex flex-wrap gap-2">
                        <p className="border border-text1 px-1 ">javascript</p>
                        <p className="border border-text1 px-1 ">javascript</p>
                        <p className="border border-text1 px-1 ">javascript</p>
                    </div>
                </div>
            </div>
            <div className="flex justify-between items-center">
                <div className="">Hết hạn trong 9 ngày</div>
                <div className="flex gap-2">
                    <Button label="Ứng tuyển" className="px-4 py-2" />
                    <Button
                        label={<FontAwesomeIcon icon={solidHeart} className={"text-red w-full h-full hover:text-red"} />}
                        className="max-w-[30px] !bg-inherit flex"
                        onClick={(e) => {
                            // e.stopPropagation();
                            e.preventDefault();
                            setTim(!tim);
                        }}
                    />
                </div>
            </div>
        </div>
    );
}

export default DivMyJobSave;
