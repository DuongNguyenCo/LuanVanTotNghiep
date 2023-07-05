import { Button, Input } from "~/components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getBusinessById, getInforAddress, getInforEmailTamplate } from "~/redux/apiRequests";

function Information() {
    const { id } = useParams();
    const [business, setBusinesss] = useState({ id: 0, name: "", phone: "", email: "", description: "", benefit: "", img: "" });
    const [address, setAddress] = useState([]);
    const [email, setEmail] = useState([]);
    const [hidden, setHidden] = useState(0);
    useEffect(() => {
        getBusinessById(id, setBusinesss);
        getInforAddress(id, setAddress);
        getInforEmailTamplate(id, setEmail);
    }, [id]);
    return (
        <>
            <div className="max-w-main mx-auto px-2 pt-3 flex gap-5">
                <div className="flex-1 ">
                    <div className="bg-w">
                        <div
                            onClick={() => {
                                setHidden(0);
                            }}
                            className="py-3 px-2 border-b border-b-text1"
                        >
                            Thông tin liên lạc
                        </div>
                        <div
                            onClick={() => {
                                setHidden(1);
                            }}
                            className="py-3 px-2 border-b border-b-text1"
                        >
                            Địa chỉ làm việc
                        </div>
                        <div
                            onClick={() => {
                                setHidden(2);
                            }}
                            className="py-3 px-2"
                        >
                            Mẫu Email
                        </div>
                    </div>
                </div>
                <div className="flex-[3]  ">
                    <div className={hidden !== 0 ? "hidden" : `bg-w`}>
                        <p className="py-3 px-3 border-b border-text1 mb-2">Thông tin liên lạc</p>
                        <div className="px-3 pb-3">
                            <div className="mb-2">
                                <Input label="Tên Doanh Nghiệp" value={business.name} setValue={setBusinesss} init={business} name="name" />
                            </div>
                            <div className="flex gap-5 mb-2">
                                <div className="flex-1">
                                    <Input label="Số Điện Thoại" value={business.phone} setValue={setBusinesss} init={business} name="phone" />
                                </div>
                                <div className="flex-1">
                                    <Input label="Email" value={business.email} setValue={setBusinesss} init={business} name="email" />
                                </div>
                            </div>
                            <div className="mb-2">
                                <label>Mô Tả doanh nghiệp</label>
                                <textarea
                                    maxLength="14500"
                                    rows="5"
                                    placeholder="Mô tả về công việc"
                                    className="border w-full p-1 mt-2"
                                    name="description"
                                    defaultValue={business.description}
                                    onChange={(e) => {
                                        setBusinesss({
                                            ...business,
                                            [e.target.name]: e.target.value,
                                        });
                                    }}
                                ></textarea>
                            </div>
                            <div className="mb-2">
                                <label>Quyển lợi</label>
                                <textarea
                                    maxLength="14500"
                                    rows="5"
                                    placeholder="Mô tả về công việc"
                                    className="border w-full p-1 mt-2"
                                    name="benefit"
                                    defaultValue={business.benefit}
                                    onChange={(e) => {
                                        setBusinesss({
                                            ...business,
                                            [e.target.name]: e.target.value,
                                        });
                                    }}
                                ></textarea>
                            </div>
                            <div className="flex flex-wrap w-full mb-4">
                                <div className="w-full mb-2 ">Logo doanh nghiệp</div>
                                <label
                                    htmlFor="file"
                                    className="flex flex-col items-center justify-center w-full h-[80px]  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer "
                                >
                                    {!1 ? (
                                        <div className="flex flex-col items-center justify-center ">
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                <span className="font-semibold">Click to upload</span> or drag and drop
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center justify-center">
                                            <img src={business.img} alt="ádasd" width={100} height={100} />
                                        </div>
                                    )}
                                    <input id="file" type="file" className="hidden" name="url" />
                                </label>
                            </div>
                            <div className="flex justify-end">
                                <Button label="Lưu" className="px-8 h-8" />
                            </div>
                        </div>
                    </div>
                    <div className={hidden !== 1 ? "hidden" : `bg-w`}>
                        <p className="py-3 px-3 border-b border-text1 mb-2">Địa chỉ làm việc</p>
                        <div className="px-3 pb-2">
                            <Button label="Thêm địa chỉ mới" className="px-3 h-8" />
                        </div>
                        <div className="">
                            <div className="flex pb-1 border-b border-b-text1 px-3">
                                <div className="flex-[1]">Đường</div>
                                <div className="flex-[1]">Phường xã</div>
                                <div className="flex-1">Quận huyện</div>
                                <div className="flex-1">Tỉnh thành</div>
                                <div className="flex-[0.5] text-center">Thao tác</div>
                            </div>
                            {address.map((e) => {
                                return (
                                    <div key={e.id} className="flex py-4 border-b border-b-text1 px-3">
                                        <div className="flex-[1]">{e.street}</div>
                                        <div className="flex-[1]">{e.ward}</div>
                                        <div className="flex-1">{e.district}</div>
                                        <div className="flex-1">{e.city}</div>
                                        <div className="flex-[0.5] justify-center flex">
                                            <div className="mx-2 flex h-5 my-auto text-text1">
                                                <FontAwesomeIcon icon={faPenToSquare} className="w-10/12 h-full" />
                                            </div>
                                            <div className="mx-2 flex h-5 my-auto text-text1">
                                                <FontAwesomeIcon icon={faTrashCan} className="w-10/12 h-full" />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={hidden !== 2 ? "hidden" : `bg-w`}>
                        <p className="py-3 px-3 border-b border-text1 mb-2">Mẫu email</p>
                        <div className="px-3 pb-2">
                            <Button label="Thêm mẫu email mới" className="px-3 h-8" />
                        </div>
                        <div className="">
                            <div className="flex pb-1 border-b border-b-text1 px-3">
                                <div className="flex-[2]">Tên mẫu email</div>
                                <div className="flex-1">Ngày tạo</div>
                                <div className="flex-1">Người tạo</div>
                                <div className="flex-[0.5] text-center">Thao tác</div>
                            </div>
                            {email.map((e) => {
                                const date = new Date(e.createdAt);

                                return (
                                    <div key={e.id} className="flex py-4 border-b border-b-text1 px-3">
                                        <div className="flex-[2]">{e.name}</div>
                                        <div className="flex-1">{date.toLocaleDateString()}</div>
                                        <div className="flex-1">{business.email}</div>
                                        <div className="flex-[0.5] justify-center flex">
                                            <div className="mx-2 flex h-5 my-auto text-text1">
                                                <FontAwesomeIcon icon={faPenToSquare} className="w-10/12 h-full" />
                                            </div>
                                            <div className="mx-2 flex h-5 my-auto text-text1">
                                                <FontAwesomeIcon icon={faTrashCan} className="w-10/12 h-full" />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Information;
