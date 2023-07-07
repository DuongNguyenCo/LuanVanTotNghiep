import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
function Modal(prop) {
    return (
        <>
            <div
                className={`bg-[rgba(0,0,0,0.2)] w-full h-screen z-[50] top-[0] left-[50%] absolute translate-x-[-50%] `}
                onClick={() => prop.onClick(false)}
            />
            <div className="fixed z-[51] top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <div
                    className={
                        (!prop.width ? `w-[450px]` : `w-[${prop.width}px]`) +
                        ' min-h-[170px] bg-w rounded-[16px] shadow-[0_5px_20px_0_rgba(0,0,0,0.04)]'
                    }
                >
                    <div className="h-[50px] rounded-t-[16px]">
                        <h5 className="m-0 p-[10px] text-[#2c3e50] font-[500] text-[18px] text-center">{prop.label}</h5>
                    </div>
                    <button
                        className="cursor-pointer font-[500] py-[4px] px-[8px] rounded-[8px] border-none text-[18px] text-[#2c3e50] bg-w shadow-[0_5px_20px_0_rgba(0,0,0,0.2)] absolute
                        right-[0] top-[0] self-end transition ease-in-out delay-150 
                        hover:shadow-[0_5px_20px_0_rgba(0,0,0,0.4)]"
                        onClick={() => prop.onClick(false)}
                    >
                        <FontAwesomeIcon icon={faXmark} />
                    </button>
                    <div className="p-[0_20px_20px_20px] text-[14px] text-[#2c3e50] ">{prop.children}</div>
                    <div className="absolute bottom-[2px] mb-[10px] w-full">
                        <div className="flex justify-around items-center">
                            <button
                                className="mt-[10px] cursor-pointer font-[500] p-[11px_28px] rounded-[12px] text-[0.8rem] border-none text-w bg-red transition-all ease-in-out delay-[0.25s]
                                hover:bg-[#ff3e4e] hover:shadow-[0_5px_20px_0_rgba(0,0,0,0.4)]"
                                onClick={prop.submit}
                            >
                                {prop.button}
                            </button>
                            <button
                                className="mt-[10px] cursor-pointer font-[500] p-[11px_28px] rounded-[12px] text-[0.8rem] border-none text-b bg-[#F8F6F4] transition-all ease-in-out delay-[0.25s]
                                hover:bg-second hover:shadow-none hover:translate-none"
                                onClick={() => prop.onClick(false)}
                            >
                                Hủy
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;
