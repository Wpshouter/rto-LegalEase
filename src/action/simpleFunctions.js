import { Bounce, toast } from 'react-toastify';
export const  showToast = async(toastText, model = 'info') => {
    console.log(model);
    (model == 'error') ? toast.error(toastText, {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
}) :  toast.info(toastText, {
position: "top-center",
autoClose: 5000,
hideProgressBar: false,
closeOnClick: false,
pauseOnHover: true,
draggable: true,
progress: undefined,
theme: "light",
transition: Bounce,
});
}