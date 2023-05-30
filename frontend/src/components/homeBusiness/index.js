import { Link } from "react-router-dom";

function HCBusiness(props) {
    const { name, city, count, url } = props;
    const customAddress = city !== false && city.split(" ");

    return (
        <Link
            to={`/chi-tiet-doanh-nghiep/${name}`}
            className=" cursor-pointer
                        mobile:w-full "
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
                    {customAddress !== false && customAddress[0] === "Thành" ? customAddress?.slice(2).join(" ") : customAddress?.slice(1).join(" ")}{" "}
                    - {count} công việc
                </p>
            </div>
        </Link>
    );
}

export default HCBusiness;
