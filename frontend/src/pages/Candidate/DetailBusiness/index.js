import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { Button, DCBBusinessJob, DCBusinessReview, Star } from "~/components";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function DetailBusiness() {
    const data = useSelector((state) => state.business.businessChoose);
    return (
        <div className="bg-second">
            <div className="max-w-business mx-auto ">
                <div
                    className="flex min-h-36 items-center bg-w mb-3
                    mobile:flex-col"
                >
                    <div
                        className="h-40 w-40 flex justify-center items-center border p-2 mx-4 my-3 
                        mobile:m-0"
                    >
                        <img src={data.data?.img} alt="123" />
                    </div>
                    <div
                        className="flex-1 mb-2 pb-2
                        mobile:w-full mobile:text-center"
                    >
                        <div className="my-5 text-2xl mobile:my-2">{data.data?.name}</div>
                        <div
                            className="grid grid-cols-3 gap-1
                            mobile:grid-cols-2"
                        >
                            <div
                                className="col-span-3
                                mobile:col-span-2"
                            >
                                Sản phẩm
                            </div>
                            <div>Chụ sở chỉnh</div>
                            <div>Viet Name</div>
                            <div>+1000</div>
                            <div>OT or not</div>
                        </div>
                    </div>
                    <div
                        className="flex flex-col gap-3 px-5 py-8 
                        mobile:py-2 mobile:w-full"
                    >
                        <Button label="Viết đánh giá" className="w-44 h-10 mobile:w-full" />
                        <Button label="Theo dỗi" className="w-44 h-10 bg-w !text-red border border-red mobile:w-full" />
                    </div>
                </div>
                <div className="bg-w mb-2 flex gap-3">
                    <div className="py-2 w-36 px-5 flex justify-center border-b-4 border-b-red hover:border-b-text1">Tuyển dụng</div>
                    <div className="py-2 w-36 px-5 flex justify-center border-b-4 border-b-w hover:border-b-text1">Đánh giá</div>
                    <div className="flex-1 flex justify-end items-center gap-3 pr-2">
                        <Link to={"https://www.google.com/"}>
                            <FontAwesomeIcon icon={faFacebook} className="text-text1 text-2xl" />
                        </Link>
                        <div>
                            <FontAwesomeIcon icon={faRightFromBracket} className="text-text1 text-2xl" />
                        </div>
                    </div>
                </div>
                <div
                    className="grid grid-cols-3 gap-3
                    mobile:grid-cols-1"
                >
                    <div
                        className="col-span-2
                        mobile:col-span-1"
                    >
                        <div className="bg-w mb-3">
                            <div className="px-5 py-3">
                                <p className="my-2 text-2xl">Doanh Nghiệp tuyển dụng</p>
                            </div>
                            <div className="px-5 py-3">
                                {data.data?.posts.map((e) => {
                                    return (
                                        <DCBBusinessJob
                                            key={e.id}
                                            url={data.data?.img}
                                            nameP={e.job.name}
                                            salary_min={e.job.salary_max}
                                            salary_max={e.job.salary_min}
                                            language={e.job.languages}
                                            address={e.job.addresses}
                                            timePost={e.createdAt}
                                        />
                                    );
                                })}
                            </div>
                        </div>
                        <div className="bg-w ">
                            <div className="px-5 py-3">
                                <p className="my-2 text-2xl">Giới thiệu công ty</p>
                            </div>
                            <div className="px-5 pb-3 text-justify">{data.data?.description}</div>
                        </div>
                    </div>
                    <div>
                        <div className="bg-w">
                            <div className="px-5 pt-5">
                                <p className="text-2xl border-b pb-4">Tổng Quát</p>
                            </div>
                            <div className="px-5 flex items-end gap-3">
                                <Star stars={90} />
                                <p className="text-3xl">{4.5}</p>
                            </div>
                            <div className="px-5 pb-3">
                                <p className="text-2xl py-4 border-b">Review Chất</p>
                                <DCBusinessReview />
                                <DCBusinessReview />
                                <DCBusinessReview />
                            </div>
                            <div className="px-5 pb-3 h-14">
                                <Button label="Viết đánh giá" className="bg-red w-full h-full" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailBusiness;
