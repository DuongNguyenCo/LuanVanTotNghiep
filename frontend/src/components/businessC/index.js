import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "../button";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as fullHeart } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import Star from "../star";
import { Link } from "react-router-dom";

function Busiess(prop) {
    const { nameB, url, description, post } = prop;
    const [tim, setTim] = useState(true);

    return (
        <Link to={`/chi-tiet-doanh-nghiep/${nameB}`} className="w-auto rounded-md border border-text1 p-2">
            <div className="flex">
                <div className="flex-1 ml-3 text-xl font-bold">{nameB}</div>
                <div className="w-8">
                    <Button
                        label={
                            <FontAwesomeIcon
                                icon={tim ? fullHeart : solidHeart}
                                className={(tim ? "text-text1" : "text-red") + " w-full h-full hover:text-red"}
                            />
                        }
                        className=" bg-w border border-text1 p-0.5 flex"
                        onClick={(e) => {
                            e.preventDefault();
                            setTim(!tim);
                        }}
                    />
                </div>
            </div>
            <div
                className="flex flex-wrap
      mobile:mt-4"
            >
                <div
                    className="w-2/12 min-h-[150px] flex items-center mx-3
        mobile:w-full mobile:mx-20 mobile:justify-center"
                >
                    <img src={url} alt="123" />
                </div>
                <div className="flex-1 flex flex-col mx-3 justify-between">
                    <div className="flex">
                        <div className="flex-1 flex items-center mobile:justify-center">
                            <Star stars="5" />
                            <p className="text-2xl mx-2">{5}</p>
                        </div>
                    </div>
                    <div>{description}</div>
                    <div className="flex justify-end">{post} công việc</div>
                </div>
            </div>
        </Link>
    );
}

export default Busiess;
