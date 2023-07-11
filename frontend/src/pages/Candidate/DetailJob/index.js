import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as fullHeart } from '@fortawesome/free-regular-svg-icons';
import { useEffect, useState } from 'react';
import { Button, DCJJobRelate } from '~/components';
import { useNavigate, useParams } from 'react-router-dom';
import { getAPIJobID } from '~/redux/apiRequests';
function DetailJob() {
    const candidate = JSON.parse(localStorage.getItem('isCandidate'));
    const { nameJob } = useParams();
    const navigate = useNavigate();
    const [data, setData] = useState();
    const [dataRelate, setDataRelate] = useState();
    const date = new Date(data?.createdAt);
    const [tim, setTim] = useState(true);

    const handleApply = () => {
        if (candidate) {
            window.open(`/ung-tuyen/${nameJob}`, '_blank');
        } else {
            navigate('/dang-nhap');
        }
    };
    const handleInfoBusiness = () => {
        navigate(`/chi-tiet-doanh-nghiep/${data?.business.name}`);
    };
    useEffect(() => {
        getAPIJobID(nameJob, setData, setDataRelate);
    }, [nameJob]);
    return (
        <div className="bg-second">
            <div
                className="max-w-main mx-auto px-2 grid grid-cols-3  gap-4 py-3
                mobile:flex mobile:flex-col"
            >
                <div
                    className="col-span-2 px-10 pt-3 bg-w
                    mobile:px-4"
                >
                    <div className=" border-b mb-3 pb-5 border-b-text1">
                        <p className="text-2xl font-bold mb-2">{data?.job.name}</p>
                        <div className="flex gap-3 h-8">
                            <div className="flex-1">
                                <Button label="Ứng Tuyển" className="w-full h-full" onClick={handleApply} />
                            </div>
                            <Button
                                label={
                                    <FontAwesomeIcon
                                        icon={tim ? fullHeart : solidHeart}
                                        className={(tim ? 'text-text1' : 'text-red') + ' w-full h-full hover:text-red '}
                                    />
                                }
                                className="bg-w h-full border border-text1 p-0.5 flex"
                                onClick={() => {
                                    setTim(!tim);
                                }}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 border-b pb-5 border-b-text1 mb-3">
                        <div className="flex gap-3">
                            {data?.job.languages.map((e) => {
                                return (
                                    <p key={e.id} className="border border-text1 px-1">
                                        {e.name}
                                    </p>
                                );
                            })}
                        </div>
                        <div className="text-[rgb(104,186,80)]">
                            {data?.job.salary_min !== 0 && data?.job.salary_max !== 0
                                ? data?.job.salary_min.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) +
                                  ' - ' +
                                  data?.job.salary_max.toLocaleString('it-IT', { style: 'currency', currency: 'VND' })
                                : data?.job.salary_max === 0 && data?.job.salary_min !== 0
                                ? data?.job.salary_min.toLocaleString('it-IT', { style: 'currency', currency: 'VND' }) +
                                  ' UPTO '
                                : "You'll love it"}
                        </div>
                        <div className="flex flex-col gap-1">
                            {data?.job.addresses.map((e) => {
                                return <p key={e.id}>{e.street + ', ' + e.ward + ', ' + e.district + ', ' + e.city}</p>;
                            })}
                        </div>
                        <div>
                            <p>Thời gian đăng {date.toLocaleDateString()}</p>
                        </div>
                    </div>
                    <div>
                        <div className="mb-2">
                            <p className="font-bold">MÔ TẢ CÔNG VIỆC</p>
                            <div className="text-justify" dangerouslySetInnerHTML={{ __html: data?.job.description }} />
                        </div>
                        <div className="mb-2">
                            <p className="font-bold">YÊU CẦU CÔNG VIỆC</p>
                            <div className="text-justify" dangerouslySetInnerHTML={{ __html: data?.job.request }} />
                        </div>
                        <div className="mb-2">
                            <p className="font-bold">QUYỀN LỢI KHI VÀO CÔNG TY</p>
                            <div
                                className="text-justify"
                                dangerouslySetInnerHTML={{ __html: data?.business.benefit }}
                            />
                        </div>
                        <div className="mb-2">
                            <p className="font-bold">MÔ TẢ VỀ CÔNG TY</p>
                            <div
                                className="text-justify"
                                dangerouslySetInnerHTML={{ __html: data?.business.description }}
                            />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="bg-w px-10  mb-3 py-5 mobile:px-4">
                        <div className="flex flex-col pb-4">
                            <div
                                className="flex justify-center items-center mx-10 mb-5 h-28
                    mobile:mb-0 mobile:mx-20"
                            >
                                <img src={data?.business.img} alt="123" />
                            </div>
                            <div className="flex-1 flex flex-col items-center">
                                <div className="font-bold text-xl text-center">{data?.business.name}</div>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2 pb-4 text-center">
                            <div>San phâm</div>
                            <div>+1000</div>
                            <div>Viet name</div>
                            <div>Hô chí minh</div>
                        </div>
                        <div className="flex justify-center">
                            <Button label="Về Chúng Tôi" className="h-10 px-2" onClick={handleInfoBusiness} />
                        </div>
                    </div>
                    <div className="h- flex flex-col gap-2 bg-w px-4 py-3">
                        <p className="text-xl pb-1">Việc Làm Phù Hợp Dành Cho Bạn</p>
                        <div className="flex flex-col gap-4">
                            {dataRelate?.map((e) => {
                                return (
                                    <DCJJobRelate
                                        key={e.id}
                                        nameB={e.business.name}
                                        nameP={e.job.name}
                                        language={e.job.languages}
                                        timePost={e.createdAt}
                                        url={e.business.img}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailJob;
