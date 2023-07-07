import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "~/assets/logo.png";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { path } from "~/routes/path";
import { business as authBusiness } from "~/redux/auth";

function NavBusiness(prop) {
    const { business } = prop;
    const [business1, setBusiness1] = useState(business);
    const navigate = useNavigate()
    const [bar, setBar] = useState("hidden");
    const handleBar = () => {
        bar === "hidden" ? setBar("block") : setBar("hidden");
    };
    const handleLogOut = () => {
        localStorage.removeItem("isCandidate");
        localStorage.removeItem("refreshTokenCandidate");
        authBusiness("");
        setBusiness1(null);
        navigate("/doanh-nghiep/dang-nhap")
    };
    return (
        <nav className="fixed w-full bg-first z-50">
            <div>
                <div
                    className="max-w-main h-nav mx-auto flex items-center gap-4 px-3 relative
                    tablet:justify-between tablet:w-auto tablet:
                    mobile:justify-between mobile:w-auto mobile:relative"
                >
                    <Link to={path.BHOME}>
                        <img src={logo} alt="logo nhà cung cấp" className="h-10" />
                    </Link>
                    <div className="w-full flex justify-between mobile:hidden">
                        <div className="h-full flex gap-5 leading-nav ">
                            <Link to={path.BHOME} className="text-text1">
                                THỐNG KÊ
                            </Link>
                            <Link to={path.BJOB} className="text-text1">
                                VIỆC LÀM
                            </Link>
                            <Link to={path.BCANDIDATE} className="text-text1">
                                ỨNG VIÊN
                            </Link>
                            <Link className="text-text1">ĐƠN HÀNG</Link>
                            <Link target="_blank" to={path.CHOME} className="text-text1">
                                CHO NGƯỜI TÌM VIỆC
                            </Link>
                        </div>
                        <div className="h-full flex gap-5 leading-nav ">
                            <Link to={path.BPOST} className="text-text1">
                                ĐĂNG TIN TUYỂN DỤNG
                            </Link>
                            <div className="px-4 text-center text-text1 relative group  cursor-pointer">
                                <div className="min-w-[212px] px-10 flex items-center h-full">
                                    <img src={business1?.img} alt="hinh anh" className="object-contain max-h-[60px] max-w-[100px] " />
                                </div>
                                <div className="absolute left-0 w-full text-left hidden group-hover:block">
                                    <Link to={`/doanh-nghiep/thong-tin-doanh-nghiep/${business1.id}`}>
                                        <p className="h-14 pl-4 text-text1 cursor-pointer bg-first hover:text-w">Thông tin doanh nghiệp</p>
                                    </Link>
                                    <p onClick={handleLogOut} className="h-14 pl-4 text-text1 cursor-pointer bg-first hover:text-w">Đăng xuất</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="hidden w-10 flex justify-center
            mobile:w-10 mobile:block"
                        onClick={handleBar}
                    >
                        <FontAwesomeIcon icon={faBars} style={{ color: "#9b9a9a" }} className="block tablet:block right mobile:block right h-8" />
                    </div>
                </div>
                <div
                    className={`hidden w-full flex justify-between flex-wrap  bg-first 
          tablet:${bar} tablet:absolute 
          mobile:${bar} mobile:absolute`}
                >
                    <div
                        className="flex p-2 
          mobile:flex-col mobile:text-center
          tablet:flex-col "
                    >
                        <Link className="text-text1 py-2 hover:bg-red-500">DASHBOARD</Link>
                        <Link className="text-text1 py-2 hover:bg-red-500">VIỆC LÀM</Link>
                        <Link className="text-text1 py-2 hover:bg-red-500">ỨNG VIÊN</Link>
                        <Link className="text-text1 py-2 hover:bg-red-500">ĐƠN HÀNG</Link>
                        <Link className="text-text1 py-2 hover:bg-red-500">ĐĂNG TIN TUYỂN DỤNG</Link>
                        <Link className="text-text1 py-2 hover:bg-red-500">CHO NGƯỜI TÌM VIỆC</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBusiness;
