import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import logo from "~/assets/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { path } from "~/routes/path";
function Nav(prop) {
    const { candidate } = prop;

    const [bar, setBar] = useState("hidden");
    const handleBar = () => {
        bar === "hidden" ? setBar("block") : setBar("hidden");
    };
    return (
        <nav className="fixed w-full bg-first z-50">
            <div
                className="w-main h-nav mx-auto flex items-center gap-2 px-3 relative
          tablet:justify-between tablet:w-auto tablet:
          mobile:justify-between mobile:w-auto mobile:relative"
            >
                <Link to={path.CHOME}>
                    <img src={logo} alt="logo nhà cung cấp" className="h-10" />
                </Link>
                <div
                    className="w-full flex justify-between
            mobile:hidden
          "
                >
                    <div className="h-full flex gap-5 leading-nav ">
                        <Link to={path.CJOB} className="text-text1">
                            CÔNG VIỆC
                        </Link>
                        <Link to={path.CBUSINESS} className="text-text1">
                            DOANH NGHIỆP
                        </Link>
                    </div>
                    <div className="h-full mr-2 flex gap-2 leading-nav ">
                        <Link to={path.BHOME} target="_blank" className="text-text1">
                            DÀNH CHO NHÀ TUYỂN DỤNG
                        </Link>
                        {candidate ? (
                            <div className="px-4 text-center text-text1 relative group  cursor-pointer">
                                <div className="flex min-w-[140px] items-center h-full">{candidate.first_name + " " + candidate.last_name}</div>
                                <div className="absolute left-0 w-full text-left hidden group-hover:block">
                                    <Link to={path.CINFOR}>
                                        <p className="h-14 pl-4 text-text1 cursor-pointer bg-first hover:text-w">Thông tin cá nhận </p>
                                    </Link>
                                    <Link to={path.CMYJOB}>
                                        <p className="h-14 pl-4 text-text1 cursor-pointer bg-first hover:text-w">Việc làm của tôi</p>
                                    </Link>
                                    <Link to={path.CMYCV}>
                                        <p className="h-14 pl-4 text-text1 cursor-pointer bg-first hover:text-w">Quản lý CV</p>
                                    </Link>
                                    <p className="h-14 pl-4 text-text1 cursor-pointer bg-first hover:text-w">Đăng xuất</p>
                                </div>
                            </div>
                        ) : (
                            <Link to={path.CSIGNIN} className="text-text1">
                                ĐĂNG NHẬP
                            </Link>
                        )}
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
                    <Link to={path.CJOB} className="text-text1 py-2 ">
                        DANH SÁCH CÔNG VIỆC
                    </Link>
                    <Link to={path.CBUSINESS} className="text-text1 py-2">
                        DOANH NGHIỆP
                    </Link>
                    <Link to={path.BHOME} target="_blank" className="text-text1 py-2">
                        DÀNH CHO NHÀ TUYỂN DỤNG
                    </Link>
                    <p className="text-text1 py-2">ĐĂNG NHẬP</p>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
