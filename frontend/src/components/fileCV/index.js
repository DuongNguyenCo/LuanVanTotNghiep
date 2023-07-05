import { faPencil, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import bgcv from "~/assets/cv.jpg";
function CV() {
    return (
        <div
            style={{
                backgroundImage: `linear-gradient(to bottom, rgba(135,0,0,0.6), rgba(25,10,5,0.6)),url(${bgcv})`,
            }}
            className="relative min-h-[300px] bg-opacity-75 bg-no-repeat bg-cover"
        >
            <div className="absolute mx-2 bottom-[10px] text-w">
                <div className="text-[20px] underline cursor-pointer">Tên CV</div>
                <div className="text-[15px] mb-1 ">Cập nhật lần cuối</div>
                <div className="flex gap-4">
                    <FontAwesomeIcon className="text-w text-[18px] cursor-pointer" icon={faPencil} />
                    <FontAwesomeIcon className="text-w text-[18px] cursor-pointer" icon={faTrashCan} />
                </div>
            </div>
        </div>
    );
}

export default CV;
