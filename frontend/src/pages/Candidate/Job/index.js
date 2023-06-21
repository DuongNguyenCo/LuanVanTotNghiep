import { useEffect, useState } from "react";
import Select from "react-select";
import { Button, Input, DCJJob } from "~/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { findJob, getAPIPostHot } from "~/redux/apiRequests";

function Job() {
    const dataP = useSelector((state) => state.post.postHots);
    const test = [
        { label: 1, value: 1 },
        { label: 2, value: 2 },
        { label: 3, value: 3 },
        { label: 4, value: 4 },
        { label: 5, value: 5 },
        { label: 6, value: 6 },
        { label: 7, value: 7 },
    ];
    const [find, setFind] = useState({ name: "" });
    const [filter, setFilter] = useState("hidden");

    const findJ = () => {
        findJob(find);
    };
    const dispatch = useDispatch();
    useEffect(() => {
        Promise.all([getAPIPostHot(dispatch)]);
        // eslint-disable-next-line
    }, []);
    return (
        <>
            <div className="bg-second">
                <div
                    className="w-main mx-auto flex-wrap py-2 flex bg-w px-3
          tablet:w-auto
          mobile:w-auto"
                >
                    <div className="w-full mb-4 ">
                        <div className="flex justify-center">
                            <div className="flex-1 mr-2">
                                <Input placeholder="Tìm kiếm theo tên công việc, kỹ năng, công ty..." init={find} setValue={setFind} name="name" />
                            </div>
                            <Button label="Tìm Kiếm" className="px-5" onClick={findJ} />
                        </div>
                    </div>
                    <div className="hidden mobile:block mobile:w-full mobile:h-8 mobile:mb-3">
                        <Button
                            label={<FontAwesomeIcon icon={faFilter} className={"w-auto h-5 text-text1"} />}
                            onClick={() => {
                                filter === "hidden" ? setFilter("block") : setFilter("hidden");
                            }}
                            className="bg-w border border-text1 w-full h-full"
                        />
                    </div>
                    <div
                        className={`w-3/12
            mobile:w-full mobile:${filter} mobile:border mobile:border-text1 mobile:rounded-md mobile:mb-3
          `}
                    >
                        <div
                            className="w-full px-6
            mobile:py-2
            "
                        >
                            <div className="pb-1">
                                <p className=" pb-1">Cấp bậc:</p>
                                <Select options={test} />
                            </div>
                            <div className="py-1">
                                <p className=" pb-1">Lương:</p>
                                <Select options={test} />
                            </div>
                            <div className="py-1">
                                <p className=" pb-1">Ngôn ngữ lập trình:</p>
                                <Select options={test} />
                            </div>
                            <div className="flex flex-wrap pt-1">
                                <p>Cập nhập lần cuối</p>
                                <div className="ml-2 w-full">
                                    <input type="radio" name="time" /> 24 giờ trước
                                </div>
                                <div className="ml-2 w-full">
                                    <input type="radio" name="time" /> Tuần trước
                                </div>
                                <div className="ml-2 w-full">
                                    <input type="radio" name="time" /> Bất cứ lúc nào
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="w-9/12 px-6 border-l border-l-text1
          mobile:border-none mobile:w-full mobile:px-0
          "
                    >
                        <div
                            className="w-full grid grid-cols-2 gap-4
              tablet:grid-cols-2
              mobile:grid-cols-1
            "
                        >
                            {dataP.map((e) => {
                                return (
                                    <DCJJob
                                        key={e.id}
                                        url={e.business.img}
                                        nameB={e.business.name}
                                        nameP={e.job.name}
                                        address={e.job.addresses}
                                        salary_min={e.job.salary_min}
                                        salary_max={e.job.salary_max}
                                        language={e.job.languages}
                                        time={e.createdAt}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Job;
