import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, DCBBusiness } from "~/components";
import { getAPIBusiness } from "~/redux/apiRequests";

function Business() {
    const dataB = useSelector((state) => state.business.businesses);
    console.log("dataB: ", dataB);

    const [find, setFind] = useState({ text: "" });

    const dispatch = useDispatch();
    useEffect(() => {
        Promise.all([getAPIBusiness(dispatch)]);
        // eslint-disable-next-line
    }, []);
    return (
        <div className="bg-second">
            <div className="max-w-business mx-auto px-2 py-3 flex flex-wrap bg-w">
                <div className="w-full mb-6">
                    <div className="flex justify-center">
                        <div className="flex-1 mr-2">
                            <Input placeholder="Tìm kiếm theo tên công việc, kỹ năng, công ty..." init={find} setValue={setFind} name="text" />
                        </div>
                        <Button label="Tìm Kiếm" className="px-5" />
                    </div>
                </div>
                <div
                    className="grid grid-cols-1 gap-4 w-auto mx-10 
        mobile:mx-3"
                >
                    {dataB?.data.map((e, index) => {
                        return <DCBBusiness key={e.id} nameB={e.name} url={e.img} description={e.description} post={dataB?.data1[index].length} />;
                    })}
                </div>
            </div>
        </div>
    );
}

export default Business;
