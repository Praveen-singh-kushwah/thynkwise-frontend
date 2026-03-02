// import React from "react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const PushNotify = (type, message) => toast(message, {
//   position: "bottom-right",
//   autoClose: false, // Disable auto-close
//   hideProgressBar: true,
//   closeOnClick: false,
//   pauseOnHover: true,
//   draggable: true,
//   theme: "light",
//   type: type
// });

// export { PushNotify };
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PushNotify = (type, message, onCloseCallback) => toast(message, {
  position: "bottom-right",
  autoClose: false, // Disable auto-close
  hideProgressBar: true,
  closeOnClick: false,
  pauseOnHover: true,
  draggable: true,
  theme: "light",
  type: type,
  onClose: onCloseCallback // Add the onClose callback
});

export { PushNotify };
