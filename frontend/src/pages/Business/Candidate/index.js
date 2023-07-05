import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faSliders } from "@fortawesome/free-solid-svg-icons";
import Select from "react-select";
import { Button, CandidateB, Input } from "~/components";
import { useEffect, useState } from "react";
import { getAPICandidateAllPost, getAPICandidateByPost } from "~/redux/apiRequests";

function Candidate() {
    //system
    const [candidate, setCandidate] = useState();
    const [post, setPost] = useState([]);
    const [time, setTime] = useState();
    const [option, setOption] = useState({});

    //data

    //function
    const choosePost = (e) => {
        const date = new Date(e.time);
        setTime(date.toLocaleDateString());
        setOption(e);
        getAPICandidateByPost(e.value, setCandidate);
    };
    //useEffect
    useEffect(() => {
        const idBusiness = JSON.parse(localStorage.getItem("isBusiness"))?.id;
        Promise.all([getAPICandidateAllPost(idBusiness, setPost)]);
    }, []);
    useEffect(() => {
        const date = new Date(post[0]?.time);
        setOption(post[0]);
        setTime(date.toLocaleDateString());
        getAPICandidateByPost(post[0]?.value, setCandidate);
    }, [post]);
    return (
        <>
            <div className="max-w-main mx-auto bg-w px-2 py-2 relative">
                <div className="flex gap-3 justify-between mb-5 items-center">
                    <div className="flex items-center gap-3 w-4/12">
                        <div className="flex items-center gap-2 flex-1">
                            <p>Việc làm: </p>
                            <Select
                                className="flex-1"
                                options={post}
                                value={option}
                                onChange={choosePost}
                                styles={{ menu: (provided) => ({ ...provided, zIndex: 20 }) }}
                            />
                        </div>
                        <div className="text-text1">
                            <FontAwesomeIcon icon={faClock} className="text-text1 text-sm mr-1" />
                            {time}
                        </div>
                    </div>
                    <div className="flex gap-2 ">
                        <Input placeholder="Tìm kiếm theo tên, số điện thoại,..." className="w-[250px]" />
                        <Button
                            label={<FontAwesomeIcon icon={faSliders} className="text-text1 text-sm" />}
                            className="px-4 bg-w border border-text1"
                        />
                    </div>
                </div>
                <div className="w-full inline-block mb-2">
                    <span
                        className="align-middle border-y-2 border-l-2 border-text1 inline-block float-left relative py-2 px-4 w-1/5
            hover:bg-blue
            after:content-[''] after:absolute after:top-0 after:right-[-18px] after:w-[40px] after:h-full 
            after:shadow-[2px_-2px_0_1px_rgba(0,0,0,0.4),3px_-3px_0_2px_rgba(255,255,255,0.1)]
            after:rounded-[0_5px_0_50px] after:scale-[0.707] after:rotate-[45deg] z-[13] after:bg-w
            after:hover:bg-blue
            "
                    >
                        1. Bước1
                    </span>
                    <span
                        className="align-middle border-y-2 border-text1 inline-block float-left relative py-2 px-7 w-1/5
            after:content-[''] after:absolute after:top-0 after:right-[-18px] after:w-[40px] after:h-full 
            after:shadow-[2px_-2px_0_1px_rgba(0,0,0,0.4),3px_-3px_0_2px_rgba(255,255,255,0.1)]
            after:rounded-[0_5px_0_50px] after:scale-[0.707] after:rotate-[45deg] z-[12] after:bg-w
            hover:bg-blue
            after:hover:bg-blue
            "
                    >
                        1. Bước2
                    </span>
                    <span
                        className="align-middle border-y-2 border-text1 inline-block float-left relative py-2 px-7 w-1/5
            after:content-[''] after:absolute after:top-0 after:right-[-18px] after:w-[40px] after:h-full 
            after:shadow-[2px_-2px_0_1px_rgba(0,0,0,0.4),3px_-3px_0_2px_rgba(255,255,255,0.1)]
            after:rounded-[0_5px_0_50px] after:scale-[0.707] after:rotate-[45deg] z-[11] after:bg-w
            hover:bg-blue
            after:hover:bg-blue 
            "
                    >
                        1. Bước3
                    </span>
                    <span
                        className="align-middle border-y-2 border-text1 inline-block float-left relative py-2 px-7 w-1/5
            after:content-[''] after:absolute after:top-0 after:right-[-18px] after:w-[40px] after:h-full 
            after:shadow-[2px_-2px_0_1px_rgba(0,0,0,0.4),3px_-3px_0_2px_rgba(255,255,255,0.1)]
            after:rounded-[0_5px_0_50px] after:scale-[0.707] after:rotate-[45deg] z-[10] after:bg-w
            hover:bg-blue
            after:hover:bg-blue
            "
                    >
                        1. Bước4
                    </span>
                    <span
                        className="align-middle border-y-2 border-r-2 border-text1 inline-block float-left relative py-2 px-7 w-1/5
            hover:bg-blue
            "
                    >
                        1. Bước5
                    </span>
                </div>
                <div className="min-h-[calc(100vh-195px)] pb-12">
                    <div className="flex px-10">
                        <div className="flex-[2] flex items-center gap-3">
                            <input type="checkbox" />
                            Tên Ứng viên
                        </div>
                        <div className="flex-1">Kịnh Nghiệm làm việc</div>
                        <div className="flex-1">Ứng tuyển</div>
                        <div className="flex-1">Trạng thái</div>
                        <div className="flex-[0.5] text-center">Thao tác</div>
                    </div>
                    {candidate?.data.data.apply.map((e, index) => {
                        return (
                            <CandidateB
                                key={e.id}
                                nameC={e.first_name + " " + e.last_name}
                                exp="moi ra truong"
                                timeApply={e.cv_post.createdAt}
                                status={e.cv_post.status}
                                download={candidate?.data.data1[index].file}
                            />
                        );
                    })}
                </div>
                <div className="w-full flex gap-3 absolute bottom-0 left-0 px-2 py-2 border-t border-text1">
                    <Button
                        label="Không đạt"
                        className="w-full h-8 bg-w border-2 border-dotted !text-bred border-bred
            hover:bg-bred hover:!text-w
            "
                    />
                    <Button
                        label="Ứng viên từ chối"
                        className="w-full h-8 bg-w border-2 border-dotted !text-byellow border-byellow
            hover:bg-byellow hover:!text-w
            "
                    />
                    <Button
                        label="Đã tuyển"
                        className="w-full h-8 bg-w border-2 border-dotted !text-bgreen border-bgreen
            hover:bg-bgreen hover:!text-w"
                    />
                </div>
            </div>
        </>
    );
}

export default Candidate;
