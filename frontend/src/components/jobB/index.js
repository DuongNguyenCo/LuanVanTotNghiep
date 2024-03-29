import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPencil, faRepeat } from '@fortawesome/free-solid-svg-icons';
import { faEyeSlash, faTrashCan, faEye } from '@fortawesome/free-regular-svg-icons';

function Job(prop) {
    const {
        nameP,
        id,
        address,
        emailApply,
        service,
        expire,
        cv,
        handleHidden,
        handleDelete,
        handleUpdate,
        handleReload,
        status,
    } = prop;
    const dateExpire = new Date(expire);
    const dateNow = new Date();
    let timeExpire = Math.floor((dateExpire.getTime() - dateNow.getTime()) / (1000 * 60 * 60 * 24));
    return (
        <div className="flex gap-4 border-t border-text1 p-2">
            <div className="flex-[2.5]">
                <div>{nameP}</div>
                <div>{id}</div>
                <div className="flex gap-2">
                    {address.map((e) => {
                        const list = [
                            '1',
                            '2',
                            '3',
                            '4',
                            '5',
                            '6',
                            '7',
                            '8',
                            '9',
                            '10',
                            '11',
                            '12',
                            '13',
                            '14',
                            '15',
                            '16',
                            '17',
                            '18',
                            '19',
                            '20',
                        ];
                        let a = e.district.split(' ');
                        return (
                            <p className="bg-second px-2 rounded-[5px]" key={e.id}>
                                {a[0] === 'Thành'
                                    ? ((a = a.slice(2)), (a = a.join(' ')))
                                    : a[0] === 'Quận' && list.includes(a[1])
                                    ? (a = a.join(' '))
                                    : ((a = a.slice(1)), (a = a.join(' ')))}
                            </p>
                        );
                    })}
                </div>
                <div>{emailApply}</div>
                <div className="flex gap-2">
                    <div
                        onClick={() => {
                            handleUpdate();
                        }}
                    >
                        <FontAwesomeIcon className="text-text1 text-xs cursor-pointer" icon={faPencil} />
                    </div>
                    {status !== 4 && (
                        <div
                            onClick={() => {
                                handleHidden(id);
                            }}
                        >
                            <FontAwesomeIcon
                                className="text-text1 text-xs cursor-pointer"
                                icon={status === 1 ? faEyeSlash : status === 2 ? faEye : ''}
                            />
                        </div>
                    )}

                    <div onClick={() => handleDelete(id)}>
                        <FontAwesomeIcon className="text-text1 text-xs cursor-pointer" icon={faTrashCan} />
                    </div>
                    <div
                        onClick={() => {
                            handleReload();
                        }}
                    >
                        <FontAwesomeIcon
                            className="text-text1 text-xs cursor-pointer"
                            icon={status === 4 ? faRepeat : ''}
                        />
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
                <p className="text-red">{timeExpire < 0 ? 'Đã hết hạn' : `hết hạn trong ${timeExpire} ngày`}</p>
                <p>{dateExpire.toLocaleDateString()}</p>
            </div>
            <div className="text-center flex-1">{cv.length + '/' + cv.length}</div>
            <div className="text-center flex-1">-</div>
        </div>
    );
}

export default Job;
