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

