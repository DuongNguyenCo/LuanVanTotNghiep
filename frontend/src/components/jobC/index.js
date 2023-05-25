import Button from "../button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as fullHeart } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
function Job(prop) {
    const { url, nameB, nameP, address, salary_min, salary_max, language, time } = prop;
    const [tim, setTim] = useState(true);

    const a = new Date(time);
    const c = new Date();
    const b = c.getTime() - a.getTime();

    return (
        <Link to={`/chi-tiet-cong-viec/${nameP}`} className="rounded-md border border-text1 p-2 cursor-pointer">
            <div className="flex w-full mb-2">
                <div className="w-2/12 h-[80px] flex justify-center items-center mr-3">
                    <img src={url} alt="123" className="min-w-[50px] max-h-[50px]" />
                </div>
                <div className="flex-1 flex flex-col">
                    <p className="max-h-[50px] font-bold">{nameP}</p>
                    <p className="max-h-[50px]">{nameB}</p>
                </div>
                <div className="w-6">
                    <Button
                        label={
                            <FontAwesomeIcon
                                icon={tim ? fullHeart : solidHeart}
                                className={(tim ? "text-text1" : "text-red") + " w-full h-full hover:text-red"}
                            />
                        }
                        className=" bg-w border border-text1 p-0.5 flex"
                        onClick={() => {
                            setTim(!tim);
                        }}
                    />
                </div>
            </div>
            <div>
                {address.map((e) => {
                    return <p key={e.id}>{e.city}</p>;
                })}
            </div>
            <div className="text-[14px] text-[rgb(104,186,80)] mb-1">
                {salary_min !== 0 && salary_max !== 0
                    ? salary_min.toLocaleString("it-IT", { style: "currency", currency: "VND" }) +
                      " - " +
                      salary_max.toLocaleString("it-IT", { style: "currency", currency: "VND" })
                    : salary_max === 0 && salary_min !== 0
                    ? salary_min.toLocaleString("it-IT", { style: "currency", currency: "VND" }) + " UPTO "
                    : "You'll love it"}
            </div>
            <div className="flex">
                {language.map((e) => {
                    return (
                        <p className=" px-2 mr-2 border border-text1 text-center hover:border-red" key={e.id}>
                            {e.name}
                        </p>
                    );
                })}
            </div>
            <div>
                {Math.floor(b / 86400000) >= 1
                    ? `Đã đăng ${Math.floor(b / 86400000)} ngày trước`
                    : Math.floor(b / 3600000) >= 1
                    ? `Đã đăng ${Math.floor(b / 3600000)} giờ trước`
                    : `Đã đăng ${Math.floor(b / 60000)} phút trước`}
            </div>
        </Link>
    );
}

export default Job;
