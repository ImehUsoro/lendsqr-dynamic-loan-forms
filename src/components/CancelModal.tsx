import { motion } from "framer-motion";
import React from "react";
import { useRecoilState } from "recoil";
import { currentPageState, formState, modal } from "../atoms/pageAtoms";
// import { PageProps } from "../types/PageTypes";
import { data } from "../utils/data";

const CancelModal = () => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const [modalState, setModalState] = useRecoilState(modal);
  const [mode, setMode] = useRecoilState(formState);

  return (
    <motion.div
      initial={{ opacity: 0, y: "-100vh" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100vh" }}
      transition={{
        duration: 0.5,
        type: "spring",
      }}
      className="absolute top-0 left-0 w-full h-full bg-gray-200 bg-opacity-50 z-50"
    >
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 bg-white rounded-md">
        <h4 className="text-2xl text-heading text-center mb-8">
          {data.pages[currentPage].actions[1].message}
        </h4>
        <div className="flex justify-center gap-9">
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => setModalState(false)}
            className="bg-red-400 rounded-md py-2 w-20 hover:bg-red-500 active:bg-red-600 transition-all duration-100"
          >
            NO
          </motion.button>
          <motion.button
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              setModalState(false);
              setCurrentPage(0);
              setMode("default");
            }}
            className="bg-teal-400 rounded-md py-2 w-20 hover:bg-teal-500 active:bg-teal-600 transition-all duration-100"
          >
            YES
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default CancelModal;
