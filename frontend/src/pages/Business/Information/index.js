import { Button, Input, Modal } from '~/components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import {
    addNewAddress,
    addNewEmail,
    deleteAddress,
    deleteEmail,
    getBusinessById,
    getCity,
    getDistrict,
    getInforAddress,
    getInforEmailTamplate,
    getWard,
    updateBusiness,
} from '~/redux/apiRequests';
import { useDispatch } from 'react-redux';
import Select from 'react-select';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';

function Information() {
    const { id } = useParams();
    const [update, setUpdate] = useState({ type: 'Chỉnh sửa', dis: true });
    const [business, setBusinesss] = useState({
        id: 0,
        name: '',
        phone: '',
        email: '',
        description: '',
        benefit: '',
        img: '',
    });
    const [address, setAddress] = useState([]);
    const [email, setEmail] = useState([]);
    const [image, setImage] = useState(null);
    const [hidden, setHidden] = useState(0);
    const [isModal, setIsModal] = useState(false);
    const [isEmail, setIsEmail] = useState(false);
    const [city, setCity] = useState([]);
    const [district, setDistrict] = useState([]);
    const [ward, setWard] = useState([]);
    const [newAddress, setNewAddress] = useState({
        city: '',
        district: '',
        ward: '',
        street: '',
    });
    const [newEmail, setNewEmail] = useState({
        label: '',
        content:
            '<p>Kính gửi [candidate_name]<br><br>Cảm ơn bạn đã ứng tuyển vào vị trí quản trị văn phòng với Công ty ABC tại New York.<br><br>Kính mời Quý vị đến văn phòng của chúng tôi để phỏng vấn cho vị trí truyển dụng. Cuộc phỏng vấn của bạn đã được lên lịch vào ngày 1 tháng 5 năm 20XX, 1 giờ chiều, tại 123 Main st, Buffallo, NY 123456<br><br>Vui lòng gọi cho tôi theo số XXX-XXX-XXX hoặc gửi email cho tôi theo địa chỉ johnsmith@abccompany.com nếu bạn có bất kỳ câu hỏi nào hoặc cần lên lịch lại.<br><br>Trân trọng,<br><br>[email_signature]</p>',
    });
    const dispatch = useDispatch();
    const convertBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);
            fileReader.onload = () => {
                setImage(fileReader.result);
                resolve(fileReader.result);
            };
            fileReader.onerror = (err) => {
                reject(err);
            };
        });
    };

    const handleAddAddress = async () => {
        setIsModal(true);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
        await getCity(setCity);
    };
    const handleAddEmail = async () => {
        setIsEmail(true);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    const handleSubmit = async () => {
        await addNewAddress(newAddress, id);
        setNewAddress({ city: '', district: '', ward: '', street: '' });
        setIsModal(false);
        await getInforAddress(id, setAddress);
    };

    const handleSubmitEmail = async () => {
        console.log('id: ', newEmail);
        await addNewEmail(newEmail, setEmail, id);
        setNewEmail({
            label: '',
            content:
                '<p>Kính gửi [candidate_name]<br><br>Cảm ơn bạn đã ứng tuyển vào vị trí quản trị văn phòng với Công ty ABC tại New York.<br><br>Kính mời Quý vị đến văn phòng của chúng tôi để phỏng vấn cho vị trí truyển dụng. Cuộc phỏng vấn của bạn đã được lên lịch vào ngày 1 tháng 5 năm 20XX, 1 giờ chiều, tại 123 Main st, Buffallo, NY 123456<br><br>Vui lòng gọi cho tôi theo số XXX-XXX-XXX hoặc gửi email cho tôi theo địa chỉ johnsmith@abccompany.com nếu bạn có bất kỳ câu hỏi nào hoặc cần lên lịch lại.<br><br>Trân trọng,<br><br>[email_signature]</p>',
        });
        setIsEmail(false);
    };
    useEffect(() => {
        getBusinessById(id, setBusinesss);
        getInforAddress(id, setAddress);
        getInforEmailTamplate(id, setEmail);
    }, [id]);
    return (
        <>
            {isModal && (
                <Modal onClick={setIsModal} label="Thêm địa chỉ làm việc" button="Lưu" submit={handleSubmit}>
                    <div className="mb-[50px]">
                        <div className="w-full mb-2">
                            <label className="mb-2 inline-block">Tỉnh Thành phố</label>
                            <Select
                                placeholder="Tỉnh Thành phố"
                                options={city}
                                on
                                onChange={(e) => {
                                    setNewAddress({ district: '', ward: '', street: '', city: e.label });
                                    getDistrict(e.value, setDistrict);
                                }}
                            />
                        </div>
                        <div className="w-full mb-2">
                            <label className="mb-2 inline-block">Quận Huyện</label>
                            <Select
                                value={district.filter((option) => option.label === newAddress.district)}
                                placeholder="Quận Huyện"
                                options={district}
                                isDisabled={newAddress.city === ''}
                                onChange={(e) => {
                                    setNewAddress({ ...newAddress, district: e.label });
                                    getWard(e.value, setWard);
                                }}
                            />
                        </div>
                        <div className="w-full mb-2">
                            <label className="mb-2 inline-block">Phường xã</label>
                            <Select
                                value={ward.filter((option) => option.label === newAddress.ward)}
                                placeholder="Phường xã"
                                options={ward}
                                isDisabled={newAddress.district === ''}
                                onChange={(e) => {
                                    setNewAddress({ ...newAddress, ward: e.label });
                                }}
                            />
                        </div>
                        <Input
                            label="Đường"
                            name="street"
                            placeholder="Địa chỉ"
                            dis={newAddress.ward === ''}
                            init={newAddress}
                            setValue={setNewAddress}
                        />
                    </div>
                </Modal>
            )}
            {isEmail && (
                <Modal
                    onClick={setIsEmail}
                    label="Thêm mẫu email mới"
                    width="600"
                    button="Lưu"
                    submit={handleSubmitEmail}
                >
                    <div className="mb-[50px]">
                        <div className="w-full mb-2">
                            <label className="mb-2 inline-block">Tiêu đề</label>
                            <Input
                                placeholder="Tiêu đề mẫu email"
                                value={newEmail.label}
                                init={newEmail}
                                setValue={setNewEmail}
                                name="label"
                            />
                        </div>
                        <div className="w-full min-h-[250px] mb-2">
                            <h2>Nội dung</h2>
                            <CKEditor
                                editor={ClassicEditor}
                                data={newEmail.content}
                                onChange={(event, editor) => {
                                    const data = editor.getData();
                                    setNewEmail({ ...newEmail, content: data });
                                }}
                                onReady={(editor) => {
                                    editor.editing.view.change((writer) => {
                                        writer.setStyle('height', '200px', editor.editing.view.document.getRoot());
                                    });
                                }}
                            />
                        </div>
                    </div>
                </Modal>
            )}
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
                    <div className={hidden !== 0 ? 'hidden' : `bg-w`}>
                        <p className="py-3 px-3 border-b border-text1 mb-2">Thông tin liên lạc</p>
                        <div className="px-3 pb-3">
                            <div className="mb-2">
                                <Input
                                    dis={update.dis}
                                    label="Tên Doanh Nghiệp"
                                    value={business.name}
                                    setValue={setBusinesss}
                                    init={business}
                                    name="name"
                                />
                            </div>
                            <div className="flex gap-5 mb-2">
                                <div className="flex-1">
                                    <Input
                                        dis={update.dis}
                                        label="Số Điện Thoại"
                                        value={business.phone}
                                        setValue={setBusinesss}
                                        init={business}
                                        name="phone"
                                    />
                                </div>
                                <div className="flex-1">
                                    <Input
                                        dis={update.dis}
                                        label="Email"
                                        value={business.email}
                                        setValue={setBusinesss}
                                        init={business}
                                        name="email"
                                    />
                                </div>
                            </div>
                            <div className="mb-2">
                                <label>Mô Tả doanh nghiệp</label>
                                <textarea
                                    disabled={update.dis}
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
                                    disabled={update.dis}
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
                                    {!business.img && !image ? (
                                        <div className="flex flex-col items-center justify-center ">
                                            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                                <span className="font-semibold">Click to upload</span> or drag and drop
                                            </p>
                                            <p className="text-xs text-gray-500 dark:text-gray-400">
                                                SVG, PNG, JPG or GIF (MAX. 800x400px)
                                            </p>
                                        </div>
                                    ) : (
                                        <div className="flex flex-col items-center justify-center">
                                            <img src={business.img} alt="ádasd" width={100} height={100} />
                                        </div>
                                    )}
                                    <input
                                        disabled={update.dis}
                                        onChange={async (e) => {
                                            const a = await convertBase64(e.target.files[0]);
                                            setBusinesss({
                                                ...business,
                                                [e.target.name]: a,
                                            });
                                        }}
                                        id="file"
                                        type="file"
                                        className="hidden"
                                        name="img"
                                    />
                                </label>
                            </div>
                            <div className="flex justify-end">
                                <Button
                                    onClick={() => {
                                        if (update.dis) {
                                            setUpdate({ type: 'Lưu', dis: false });
                                        } else {
                                            updateBusiness(business, setBusinesss, dispatch);
                                            setUpdate({ type: 'Chỉnh sửa', dis: true });
                                        }
                                    }}
                                    label={update.type}
                                    className="px-8 h-10"
                                />
                            </div>
                        </div>
                    </div>
                    <div className={hidden !== 1 ? 'hidden' : `bg-w`}>
                        <p className="py-3 px-3 border-b border-text1 mb-2">Địa chỉ làm việc</p>
                        <div className="px-3 pb-2">
                            <Button onClick={handleAddAddress} label="Thêm địa chỉ mới" className="px-3 h-10" />
                        </div>
                        <div className="">
                            <div className="flex pb-1 px-3">
                                <div className="flex-[1]">Đường</div>
                                <div className="flex-[1]">Phường xã</div>
                                <div className="flex-1">Quận huyện</div>
                                <div className="flex-1">Tỉnh thành</div>
                                <div className="flex-[0.5] text-center">Thao tác</div>
                            </div>
                            {address.map((e) => {
                                return (
                                    <div key={e.id} className="flex py-4 border-t border-t-text1 px-3">
                                        <div className="flex-[1]">{e.street}</div>
                                        <div className="flex-[1]">{e.ward}</div>
                                        <div className="flex-1">{e.district}</div>
                                        <div className="flex-1">{e.city}</div>
                                        <div className="flex-[0.5] justify-center flex">
                                            <div
                                                onClick={() => {
                                                    deleteAddress(e.id, setAddress, id);
                                                }}
                                                className="mx-2 flex h-5 my-auto text-text1"
                                            >
                                                <FontAwesomeIcon icon={faTrashCan} className="w-10/12 h-full" />
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className={hidden !== 2 ? 'hidden' : `bg-w`}>
                        <p className="py-3 px-3 border-b border-text1 mb-2">Mẫu email</p>
                        <div className="px-3 pb-2">
                            <Button onClick={handleAddEmail} label="Thêm mẫu email mới" className="px-3 h-10" />
                        </div>
                        <div className="">
                            <div className="flex pb-1 px-3">
                                <div className="flex-[2]">Tên mẫu email</div>
                                <div className="flex-1">Ngày tạo</div>
                                <div className="flex-1">Người tạo</div>
                                <div className="flex-[0.5] text-center">Thao tác</div>
                            </div>
                            {email.map((e) => {
                                const date = new Date(e.createdAt);
                                return (
                                    <div key={e.id} className="flex py-4 border-t border-t-text1 px-3">
                                        <div className="flex-[2]">{e.name}</div>
                                        <div className="flex-1">{date.toLocaleDateString()}</div>
                                        <div className="flex-1">{business.email}</div>
                                        <div className="flex-[0.5] justify-center flex">
                                            <div
                                                onClick={() => {
                                                    setNewEmail({
                                                        label: e.name,
                                                        content: e.content,
                                                    });
                                                    handleAddEmail();
                                                }}
                                                className="mx-2 flex h-5 my-auto text-text1"
                                            >
                                                <FontAwesomeIcon icon={faPenToSquare} className="w-10/12 h-full" />
                                            </div>
                                            <div
                                                onClick={() => {
                                                    deleteEmail(e.id, setEmail, id);
                                                }}
                                                className="mx-2 flex h-5 my-auto text-text1"
                                            >
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
