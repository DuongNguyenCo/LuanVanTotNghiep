import logo from "~/assets/logo.png";

function DivMyJobApply() {
    return (
        <div className="odd:bg-w even:bg-[rgb(255,241,225)] px-4 py-2">
            <div className="mb-2">
                <div className="text-[14px] text-[rgb(78,76,77)]">Ngày ứng tuyển: 30/05/2023</div>
            </div>
            <div className="flex items-center mb-3">
                <div className="flex-1 w-3/12 mr-4">
                    <img src={logo} alt="123" />
                </div>
                <div className="flex-[4]">
                    <div className="font-bold">Full stack engineer (NodeJS/ ReactJS)</div>
                    <div className="text-text1 text-[14px]">Ho Chi Minh</div>
                    <div className="text-[14px] text-[rgb(104,186,80)] mb-1">1,600 - 3,000 USD</div>
                    <div className="flex flex-wrap gap-2">
                        <p className="border border-text1 px-1 ">javascript</p>
                        <p className="border border-text1 px-1 ">javascript</p>
                        <p className="border border-text1 px-1 ">javascript</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DivMyJobApply;
