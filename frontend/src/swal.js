import Swal from 'sweetalert2';

export const exit = (title, content) => {
    Swal.fire({
        icon: 'error',
        title: title,
        text: content,
        showConfirmButton: false,
        timer: 1500,
    });
};
export const dlt = (title, content) => {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: title,
        text: content,
        showConfirmButton: false,
        timer: 1500,
        customClass: {
            title: 'fs-5 text-success',
        },
    });
};
export const success = (title) => {
    Swal.fire({
        icon: 'success',
        title: title,
        showConfirmButton: false,
        timer: 1500,
        customClass: {
            title: 'fs-5 text-success',
        },
    });
};

export const xacNhan = (fc) => {
    Swal.fire({
        title: 'Bạn muốn xóa dữ liệu',
        text: 'Dữ liệu sẽ không được hoàn tác trở lại',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Xác nhận',
    }).then(async (result) => {
        if (result.isConfirmed) {
            await Swal.fire('Đã xóa', 'Bạn đã xóa thành công', 'success');
            await fc();
        }
    });
};
