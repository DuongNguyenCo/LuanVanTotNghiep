import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Button from "~/components/button";
import { faHeart as solidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as fullHeart } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
// import { Link } from "react-router-dom";
// import { path } from "~/routes/path";

function HCJob(prop) {
    const { nameB, nameP, url, languages, onClick, id } = prop;
    const id_language = languages.map((e) => {
        return e.id;
    });
    const [tim, setTim] = useState(true);
    return (
        <div
            onClick={() => {
                onClick(id, id_language);
            }}
            className="w-full  cursor-pointer 
              tablet:w-full tablet:p-1
              mobile:w-full mobile:p-1
              "
        >
            <div className=" w-full flex flex-wrap justify-center p-2 bg-w mb-3">
                <div className="w-full flex mb-2 ">
                    <div className="w-[18%]">
                        <div className="w-full h-full flex items-center">
                            <img
                                src={url}
                                alt="hinh"
                                className="w-auto h-fit min-w-[50px] max-h-[50px] mx-auto"
                            />
                        </div>
                    </div>
                    <div className="max-w-[75%] w-full ml-3">
                        <div className="whitespace-nowrap overflow-hidden text-ellipsis font-bold">
                            {nameP}
                        </div>
                        <div className="whitespace-nowrap overflow-hidden text-ellipsis">
                            {nameB}
                        </div>
                    </div>
                    <div className="max-w-[7%] ">
                        <Button
                            label={
                                <FontAwesomeIcon
                                    icon={tim ? fullHeart : solidHeart}
                                    className={
                                        (tim ? "text-text1" : "text-red") +
                                        " w-full h-full hover:text-red"
                                    }
                                />
                            }
                            className="min-w-[100%] bg-w border border-text1 p-0.5 flex"
                            onClick={(e) => {
                                e.stopPropagation();
                                setTim(!tim);
                            }}
                        />
                    </div>
                </div>
                <div className="w-full flex">
                    {languages.map((e) => {
                        return (
                            <p
                                className=" px-2 mr-2 border border-text1 text-center hover:border-red"
                                key={e.id}
                            >
                                {e.name}
                            </p>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default HCJob;
