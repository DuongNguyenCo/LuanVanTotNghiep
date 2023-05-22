function HCBusiness(props) {
    const { name, city, count, url, id, onClick } = props;
    const customAddress = city.split(" ");

    return (
        <div
            onClick={() => {
                onClick(id);
            }}
            className="px-2 py-2 cursor-pointer
                        tablet:px-1 
                        mobile:w-full mobile:px-0 mobile:py-1"
        >
            <div className=" w-full px-3 min-h-300 flex flex-wrap justify-center bg-w">
                <div
                    className="w-img-business h-img-business mt-5 mb-3 flex items-center
        tablet:h-[150px]
        mobile:h-[130px]
        "
                >
                    <img src={url} alt="logo" />
                </div>
                <p className="w-full text-center min-h-[80px]  mb-2">{name}</p>
                <p className="w-full text-center mb-2">
                    {customAddress[0] === "Thành"
                        ? customAddress.slice(2).join(" ")
                        : customAddress.slice(1).join(" ")}
                    - {count} công việc
                </p>
            </div>
        </div>
    );
}

export default HCBusiness;
