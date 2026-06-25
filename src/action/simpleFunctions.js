
import { Bounce, toast } from 'react-toastify';
export const  showToast = async(toastText, model = 'info') => {
    //console.log(model);
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
    }) :  toast.success(toastText, {
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
// lib/uploadToImgBB.js

export const uploadToImgBB = async (imageFile) => {
  const formData = new FormData();

  formData.append("image", imageFile);

  const apiKey =
    process.env.NEXT_PUBLIC_IMGBB_API_KEY;

  const response = await fetch(
    `https://api.imgbb.com/1/upload?key=${apiKey}`,
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await response.json();

  if (!data.success) {
    throw new Error("Image upload failed");
  }

  return data.data.url;
};
export const FormateDateForis = async (dateString) => {
 const formatted =
  new Date(dateString).toLocaleString(
    "en-US",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    }
  );
 return formatted;
}
