import { useEffect, useState } from "react";
import { Button, DCBusiness, DCJob, Input } from "~/components";
import { getAPIPostHot, getAPIBusiness, findJob } from "~/redux/apiRequests";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import { Grid } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { path } from "~/routes/path";

function Home() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const dataB = useSelector((state) => state.business.businesses);
    const dataP = useSelector((state) => state.post.postHots);

    const [find, setFind] = useState({ name: "" });
    const findJ = () => {
        findJob(find, dispatch);
        navigate("/danh-sach-cong-viec");
    };

    useEffect(() => {
        Promise.all([getAPIPostHot(dispatch), getAPIBusiness(dispatch)]);
        // eslint-disable-next-line
    }, []);
    return (
        <>
            <header className="bg-first">
                <div
                    className="w-main mx-auto px-3 h-header flex flex-col justify-center gap-5
                            tablet:w-auto 
                            mobile:w-auto"
                >
                    <div className="text-w mobile:text-center">Đang có 1000 công việc tốt đang chờ bạn</div>
                    <div className="flex gap-5 mobile:flex-col">
                        <div className="flex-1">
                            <Input placeholder="Tìm kiếm công việc theo kỹ năng, công ty" init={find} setValue={setFind} name="name" />
                        </div>
                        <div className="">
                            <Button onClick={findJ} label="Tìm Kiếm" className=" h-full w-full py-2 px-5 " />
                        </div>
                    </div>
                </div>
            </header>
            <div className="bg-second">
                <div
                    className="w-main mx-auto px-2 pt-5 flex flex-wrap
                            tablet:w-auto
                            mobile:w-auto "
                >
                    <div className="flex gap-2 items-end w-full mb-2">
                        <p className="flex-1 text-2xl font-bold">Các doanh nghiệp hàng đầu</p>
                        <div className="">
                            <Link to={path.CBUSINESS} className="italic uppercase decora text-link cursor-pointer">
                                Xem tất cả
                            </Link>
                        </div>
                    </div>
                    <Swiper
                        slidesPerGroup={5}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 15,
                                slidesPerGroup: 1,
                            },
                            700: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                                slidesPerGroup: 3,
                            },
                            1200: {
                                slidesPerView: 5,
                                spaceBetween: 15,
                                slidesPerGroup: 5,
                            },
                        }}
                    >
                        {dataB?.data.map((e, index) => {
                            return (
                                <SwiperSlide key={e.id}>
                                    <DCBusiness name={e.name} city={e.addresses[0].city} count={dataB.data1[index].length} url={e.img} id={e.id} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
                <div
                    className="w-main mx-auto px-2 py-5 flex flex-wrap
                            tablet:w-auto
                            mobile:w-auto "
                >
                    <div className="flex gap-2 items-end w-full mb-2">
                        <p className="flex-1 text-2xl font-bold">Công việc nóng</p>
                        <div>
                            <Link to={path.CJOB} className="italic uppercase decora text-link cursor-pointer">
                                Xem tất cả
                            </Link>
                        </div>
                    </div>
                    <Swiper
                        slidesPerGroup={30}
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                grid: { fill: "row", rows: 5 },
                                slidesPerGroup: 5,
                            },
                            700: {
                                slidesPerView: 2,
                                spaceBetween: 10,
                                grid: { fill: "row", rows: 5 },
                                slidesPerGroup: 10,
                            },
                            1200: {
                                slidesPerView: 3,
                                spaceBetween: 15,
                                grid: { fill: "row", rows: 5 },
                                slidesPerGroup: 15,
                            },
                        }}
                        modules={[Grid]}
                    >
                        {dataP.map((e) => {
                            return (
                                <SwiperSlide key={e.id}>
                                    <DCJob id={e.id} nameB={e.business.name} url={e.business.img} nameP={e.job.name} languages={e.job.languages} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                </div>
            </div>
        </>
    );
}

export default Home;
