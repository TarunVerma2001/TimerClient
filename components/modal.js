import { useEffect, useState } from "react";
// import { createPortal } from 'react';
import { createPortal } from "react-dom";
import { BsPlus } from "react-icons/bs";
import { motion } from "framer-motion";
// import Typography from '@components/Typography';
// import { motion } from 'framer-motion';

const Modal = ({ children, title, onClose, ...props }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(
        <div className="fixed top-0 right-0 bottom-0 left-0 text-gray-900 bg-gray-800 bg-opacity-80 backdrop-filter backdrop-blur-md z-50 flex justify-center items-center ">
          {title && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              transition={{duration: 0.3}}
              {...props}
              className="text-gray-600 relative bg-white my-8 mx-16 w-full rounded-xl p-3 md:p-5 overflow-y-scroll scrollbar-hide"
              // md:mx-0 md:w-8/12 lg:w-6/12z


              // text-gray-600 relative bg-black bg-opacity-80   my-8 mx-16 rounded p-3 md:p-5 overflow-y-scroll scrollbar-hide
            >
              <div className="flex items-center justify-between">
                <p className="text-xl text-blue-800 font-semibold"> {title}</p>
                <div className="cursor-pointer  h-10 w-10 md:h-10 md:w-10 rounded-full bg-gray-200 flex items-center justify-center ml-auto">
                  <BsPlus
                    onClick={onClose}
                    size={30}
                    className="text-gray-700 rotate-45 hover:scale-125 transition transform duration-150 ease-out"
                  />
                </div>
              </div>

              {children}
            </motion.div>
          )}
          {!title && children}
        </div>,
        //@ts-ignore
        document.querySelector("#portal")
      )
    : null;
};

export default Modal;
