import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { DJobApply, DJobSave } from '~/components';
import { getJobApply } from '~/redux/apiRequests';

function MyJob() {
    const { id } = useParams();
    const [jobApply, setJobApply] = useState([]);
    console.log('jobApply: ', jobApply[0]?.apply);
    const [step, setStep] = useState({
        id: 1,
        label: 'Việc làm đã lưu',
    });

    return (
        <>
            <div className="bg-w">
                <div className="w-main px-3 mx-auto mb-2 flex gap-3">
                    <div
                        className={`py-2 w-36 px-5 flex justify-center border-b-4 hover:border-b-text1 ${
                            step.id === 1 ? 'border-b-red' : 'border-b-w'
                        }`}
                        onClick={() => {
                            setStep({ id: 1, label: 'Việc làm đã lưu' });
                        }}
                    >
                        Đã lưu
                    </div>
                    <div
                        className={`py-2 w-36 px-5 flex justify-center border-b-4 hover:border-b-text1 ${
                            step.id === 2 ? 'border-b-red' : 'border-b-w'
                        }`}
                        onClick={() => {
                            setStep({ id: 2, label: 'Việc làm ứng tuyển' });
                            getJobApply(id, setJobApply);
                        }}
                    >
                        Đã ứng tuyển
                    </div>
                </div>
            </div>
            <div className="">
                <div className="w-main px-3 mx-auto">
                    <div className="mt-7 mb-3">{step.label + ` (0)`}</div>
                    <div className="grid grid-cols-3 gap-4 mb-3">
                        {step.id === 1 ? (
                            <>
                                <DJobSave />
                                <DJobSave />
                                <DJobSave />
                                <DJobSave />
                                <DJobSave />
                            </>
                        ) : (
                            jobApply.length > 0 &&
                            jobApply[0]?.apply.map((e) => {
                                return (
                                    <DJobApply
                                        key={e.id}
                                        name={e.job.name}
                                        location={e.job.addresses}
                                        language={e.job.languages}
                                        salaryMin={e.job.salary_min}
                                        salaryMax={e.job.salary_max}
                                        dateApply={e.createdAt}
                                        img={e.business.img}
                                    />
                                );
                            })
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default MyJob;
