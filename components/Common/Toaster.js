import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const toaster = (type, message,autoClose=true) => toast(message, { type: type,autoClose:autoClose });

const CustomToastContainer = () => {
  return (
    <ToastContainer
      position="top-right"
      autoClose={2000}
      newestOnTop
      closeOnClick
      draggable
      pauseOnHover
      theme="colored"
    />
  );
};

export { CustomToastContainer as ToastContainer, toaster };

