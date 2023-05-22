import Select from "react-select";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan, faDownload } from "@fortawesome/free-solid-svg-icons";
function Candidate(prop) {
    const { nameC, exp, timeApply, status, onChange } = prop;
    const time = new Date(timeApply);
    const listStatus = [
        { value: 0, label: "Bước 1" },
        { value: 1, label: "Bước 2" },
        { value: 2, label: "Bước 3" },
        { value: 3, label: "Bước 4" },
        { value: 4, label: "Bước 5" },
    ];
    return (
        <div className="flex items-center px-10 border-t border-t-text1 py-3 mt-2">
            <div className="flex-[2] flex items-center gap-3">
                <input type="checkbox" defaultChecked={false} />
                {nameC}
            </div>
            <div className="flex-1">{exp}</div>
            <div className="flex-1">{time.toLocaleDateString()}</div>
            <div className="flex-1 ">
                <Select options={listStatus} value={listStatus[status]} onChange={onChange} />
            </div>
            <div className="flex-[0.5] justify-center gap-4 flex">
                <div>
                    <FontAwesomeIcon icon={faBan} className="text-text1 hover:text-b" />
                </div>
                <div>
                    <FontAwesomeIcon icon={faDownload} className="text-text1 hover:text-b" />
                </div>
            </div>
        </div>
    );
}

export default Candidate;
