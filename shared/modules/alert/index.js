const SweetAlert = {
    error(message){
        swal({
            title: 'Loi',
            text: message,
            type: 'error',
            confirmButtonText: 'Dong'
        })
    },
    success(message){
       swal({
            title: 'Thanh cong',
            text: message,
            type: 'success',
            confirmButtonText: 'Dong'
        }) 
    },
    confirm(message){
        const p = new Promise((resolve, reject) => {
            swal({
                title: 'Ban co chac khong',
                text: message,
                showCancelButton: true,
                confirmButtonText: 'Co',
                cancelButtonText: 'Khong',
                closeOnCancel: false,
                closeOnConfirm: false,
                allowOutsideClick: false
            }).then(isConfirm => {
                if(isConfirm === true){
                    swal.enableLoading()
                    resolve()
                }else if(isConfirm === false){
                    swal.close()
                }
            })
        })
        return p
    }
}

export default SweetAlert