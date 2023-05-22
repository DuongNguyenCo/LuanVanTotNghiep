import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faRepeat } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash, faTrashCan } from "@fortawesome/free-regular-svg-icons";

function Job(prop) {
    const { nameP, id, address, emailApply, service, expire, cv } = prop;
    const dateExpire = new Date(expire);
    const dateNow = new Date();
    let timeExpire = Math.floor((dateExpire.getTime() - dateNow.getTime()) / (1000 * 60 * 60 * 24));
    return (
        <div className="flex gap-4 border-t border-text1 p-2">
            <div className="flex-[2.5]">
                <div>{nameP}</div>
                <div>{id}</div>
                <div>
                    {address.map((e) => {
                        return e.city;
                    })}
                </div>
                <div>{emailApply}</div>
                <div className="flex gap-2">
                    <div>
                        <FontAwesomeIcon className="text-text1 text-xs cursor-pointer" icon={faPencil} />
                    </div>
                    <div>
                        <FontAwesomeIcon className="text-text1 text-xs cursor-pointer" icon={faEyeSlash} />
                    </div>
                    <div>
                        <FontAwesomeIcon className="text-text1 text-xs cursor-pointer" icon={faTrashCan} />
                    </div>
                    <div>
                        <FontAwesomeIcon className="text-text1 text-xs cursor-pointer" icon={faRepeat} />
                    </div>
                </div>
            </div>
            <div className="flex-[1.5] gap-2">
                {service.map((e) => {
                    return (
                        <span className="border inline-block mr-2 mb-2 px-2 bg-[#f3f3f4] rounded-sm" key={e.id}>
                            {e.name}
                        </span>
                    );
                })}
            </div>
            <div className="flex-1">
                <p className="text-red">{timeExpire < 0 ? "Đã hết hạn" : `hết hạn trong ${timeExpire} ngày`}</p>
                <p>{dateExpire.toLocaleDateString()}</p>
            </div>
            <div className="text-center flex-1">{cv.length + "/" + cv.length}</div>
            <div className="text-center flex-1">-</div>
        </div>
    );
}

export default Job;
