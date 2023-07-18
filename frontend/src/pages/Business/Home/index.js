import { ResponsiveContainer, Legend, BarChart, CartesianGrid, YAxis, XAxis, Tooltip, Bar } from 'recharts';

import { IoEye, IoEyeOff, IoCalendar, IoHourglass } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import {
    getAPIPostBusiness,
    getAPIPostExpireBusiness,
    getAPIPostHiddenBusiness,
    getApplyByMonth,
    getPostByMonth,
} from '~/redux/apiRequests';
function Home() {
    const idBusiness = JSON.parse(localStorage.getItem('isBusiness'))?.id;
    const [post, setPost] = useState([]);
    const [hidden, setHidden] = useState([]);
    const [expire, setExpire] = useState([]);
    const [sevenDay, setSevenDay] = useState([]);
    const [monthApply, setMonthApply] = useState([
        { id: 0, name: 'Jan', other: 0, success: 0, fail: 0, tuyen: 0 },
        { id: 1, name: 'Feb', other: 0, success: 0, fail: 0, tuyen: 0 },
        { id: 2, name: 'Mar', other: 0, success: 0, fail: 0, tuyen: 0 },
        { id: 3, name: 'Apr', other: 0, success: 0, fail: 0, tuyen: 0 },
        { id: 4, name: 'May', other: 0, success: 0, fail: 0, tuyen: 0 },
        { id: 5, name: 'Jun', other: 0, success: 0, fail: 0, tuyen: 0 },
        { id: 6, name: 'Jul', other: 0, success: 0, fail: 0, tuyen: 0 },
        { id: 7, name: 'Aug', other: 0, success: 0, fail: 0, tuyen: 0 },
        { id: 8, name: 'Sep', other: 0, success: 0, fail: 0, tuyen: 0 },
        { id: 9, name: 'Oct', other: 0, success: 0, fail: 0, tuyen: 0 },
        { id: 10, name: 'Nov', other: 0, success: 0, fail: 0, tuyen: 0 },
        { id: 11, name: 'Dec', other: 0, success: 0, fail: 0, tuyen: 0 },
    ]);
    const [monthPost, setMonthPost] = useState([
        { id: 0, name: 'Jan', dang: 0 },
        { id: 1, name: 'Feb', dang: 0 },
        { id: 2, name: 'Mar', dang: 0 },
        { id: 3, name: 'Apr', dang: 0 },
        { id: 4, name: 'May', dang: 0 },
        { id: 5, name: 'Jun', dang: 0 },
        { id: 6, name: 'Jul', dang: 0 },
        { id: 7, name: 'Aug', dang: 0 },
        { id: 8, name: 'Sep', dang: 0 },
        { id: 9, name: 'Oct', dang: 0 },
        { id: 10, name: 'Nov', dang: 0 },
        { id: 11, name: 'Dec', dang: 0 },
    ]);

    useEffect(() => {
        Promise.all([
            getAPIPostBusiness(idBusiness, setPost),
            getAPIPostHiddenBusiness(idBusiness, setHidden),
            getAPIPostExpireBusiness(idBusiness, setExpire),
        ]);
    }, [idBusiness]);

    useEffect(() => {
        getPostByMonth(idBusiness, setMonthPost, monthPost);
        getApplyByMonth(idBusiness, setMonthApply, monthApply);
        // eslint-disable-next-line
    }, [idBusiness]);

    useEffect(() => {
        const array =
            post.length >= 0 &&
            post.map((e) => {
                const dateExpire = new Date(e.expire);
                const dateNow = new Date();
                let timeExpire = Math.floor((dateExpire.getTime() - dateNow.getTime()) / (1000 * 60 * 60 * 24));
                if (timeExpire <= 7) {
                    return e;
                }
                return null;
            });
        console.log('array: ', array);
        setSevenDay(array !== false && array.filter(Boolean));
    }, [post]);

    console.log('sevenDay.length: ', sevenDay.length);
    function BoxWrapper({ children }) {
        return (
            <div className="bg-white rounded-sm p-4 flex-1 border border-gray-200 flex items-center">{children}</div>
        );
    }
    return (
        <div className="max-w-main mx-auto flex flex-col gap-4 py-4">
            <div className="flex gap-4">
                <BoxWrapper>
                    <div className="rounded-full h-12 w-12 flex items-center justify-center bg-bgreen">
                        <IoEye className="text-2xl text-white" />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-gray-500 font-light">Đang hiển thị</span>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold">{post.length}</strong>
                        </div>
                    </div>
                </BoxWrapper>
                <BoxWrapper>
                    <div className="rounded-full h-12 w-12 flex items-center justify-center bg-gray-500">
                        <IoEyeOff className="text-2xl text-white" />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-gray-500 font-light">Đang ẩn</span>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold">{hidden.length}</strong>
                        </div>
                    </div>
                </BoxWrapper>
                <BoxWrapper>
                    <div className="rounded-full h-12 w-12 flex items-center justify-center bg-red">
                        <IoCalendar className="text-2xl text-white" />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-gray-500 font-light">Hết hạn</span>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold">{expire.length}</strong>
                        </div>
                    </div>
                </BoxWrapper>
                <BoxWrapper>
                    <div className="rounded-full h-12 w-12 flex items-center justify-center bg-byellow">
                        <IoHourglass className="text-2xl text-white" />
                    </div>
                    <div className="pl-4">
                        <span className="text-sm text-gray-500 font-light">Hết hạng trong 7 ngày</span>
                        <div className="flex items-center">
                            <strong className="text-xl text-gray-700 font-semibold">{sevenDay.length}</strong>
                        </div>
                    </div>
                </BoxWrapper>
            </div>
            <div className="flex flex-row gap-4 w-full">
                <div className="min-h-[22rem] w-main rounded-sm border border-gray-200 flex flex-col flex-1">
                    <strong className="bg-w text-gray-700 font-medium text-[25px] py-3 pl-4">Thống kê dữ liệu</strong>
                    <strong className="bg-w mt-4 text-gray-700 pl-14 pt-3 font-medium text-[20px]">
                        Thống kê đăng tuyển
                    </strong>
                    <div className="min-h-[22rem] pl-4 py-3 flex-1 text-xs bg-w">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                width={500}
                                height={300}
                                data={monthPost}
                                margin={{
                                    top: 20,
                                    right: 10,
                                    left: -10,
                                    bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="dang" name="Số lượng bài đăng" fill="#0ea5e9" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                    <strong className="text-gray-700 mt-4 pl-14 pt-3 font-medium text-[20px] bg-w">
                        Thống kê ứng tuyển
                    </strong>
                    <div className="min-h-[22rem] pl-4 py-3 flex-1 text-xs bg-w">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                width={500}
                                height={300}
                                data={monthApply}
                                margin={{
                                    top: 20,
                                    right: 10,
                                    left: -10,
                                    bottom: 0,
                                }}
                            >
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="tuyen" name="Số lượng ứng tuyển" fill="#0ea5e9" />
                                <Bar dataKey="success" name="Số lượng hồ sơ được duyệt" fill="#50B704" />
                                <Bar dataKey="fail" name="Số lượng hồ sơ từ chối" fill="#F85A5A" />
                                <Bar dataKey="other" name="Số lượng hồ sơ đang xử lý" fill="#a7a7a7" />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
