import Page from "./components/Page";
import { useRecoilState } from "recoil";
import { data } from "./utils/data";
import {
  currentPageState,
  formState,
  modal,
  submitModal,
  submittedData,
} from "./atoms/pageAtoms";
import { useState } from "react";
import { MdOutlineContentCopy } from "react-icons/md";
import CancelModal from "./components/CancelModal";
import { motion } from "framer-motion";

function App() {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const [mode, setMode] = useRecoilState(formState);
  const [modalState, setModalState] = useRecoilState(modal);
  const [URL, setURL] = useState(data.meta.url);
  const [submitModalState, setSubmitModalState] = useRecoilState(submitModal);
  const [formData, setFormData] = useRecoilState(submittedData);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="relative bg-gray-200 mx-auto max-w-screen-xxl py-10"
    >
      <div className="">
        <div className="relative hover-trigger">
          <h1 className="text-center text-4xl text-heading font-semibold mb-28">
            {data.meta.name.toLocaleUpperCase()}
          </h1>
          <div className="absolute bg-darkBlue text-white border border-grey-100 px-4 py-2 hover-target top-0 right-0 rounded-md">
            {data.meta.Description}
          </div>
        </div>

        {mode === "default" ? (
          <motion.form
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -500 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              type: "spring",
              damping: 20,
            }}
            className="flex flex-col justify-center items-center w-full"
          >
            <div className="flex w-1/2 bg-white items-center border  text-textColor px-2 rounded-md">
              <input
                type="text"
                placeholder={!URL ? "Type in a url to a JSON file" : ""}
                value={URL}
                onChange={(e) => setURL(e.target.value)}
                className="w-full focus:outline-none rounded-md p-2 placeholder:text-textColor"
              />
              <div
                className="text-textColor cursor-pointer active:text-gray-900 select-none"
                onClick={() => {
                  if (!URL) return alert("Please enter a valid URL");
                  navigator.clipboard.writeText(URL);
                  alert(`${URL} - Copied to clipboard`);
                }}
              >
                <MdOutlineContentCopy />
              </div>
            </div>
            <motion.button
              whileTap={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
              className="mt-6 bg-teal-400 hover:bg-teal-500 active:bg-teal-600 py-3 px-8 self-center rounded-md text-white"
              onClick={(e) => {
                e.preventDefault();
                if (!URL) {
                  alert("Please enter a valid URL");
                } else {
                  setMode("input");
                }
              }}
            >
              Continue
            </motion.button>
          </motion.form>
        ) : mode === "input" ? (
          <motion.div
            initial={{ opacity: 0, x: 500 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -500 }}
            transition={{
              duration: 0.5,
              delay: 0.1,
              type: "spring",
              damping: 20,
            }}
            className="mb-20"
            key={data.pages[currentPage].name}
          >
            <div className="mb-8 max-w-screen-lg mx-auto">
              <div className="relative hover-trigger  mx-auto flex justify-center max-w-fit">
                <h2 className="text-2xl text-textColor text-center">
                  {data.pages[currentPage].name}
                </h2>
                <div className="absolute bg-darkBlue text-white border w-96 border-grey-100 px-4 py-2 hover-target -top-4 left-64 rounded-md max-w-lg">
                  {data.pages[currentPage].description}
                </div>
              </div>
            </div>
            <Page page={data.pages[currentPage]} />
          </motion.div>
        ) : null}
      </div>
      {modalState ? (
        <CancelModal />
      ) : submitModalState ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
            type: "spring",
            damping: 20,
          }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-gray-200 bg-opacity-50 z-50">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-8 bg-white rounded-md">
              <h4 className="text-2xl text-heading text-center mb-8">
                {data.pages[currentPage].actions[0].message}
              </h4>
              <div className="flex justify-center gap-9">
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => setSubmitModalState(false)}
                  className="bg-red-400 rounded-md py-2 w-20 hover:bg-red-500 active:bg-red-600 transition-all duration-100"
                >
                  NO
                </motion.button>
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => {
                    setSubmitModalState(false);
                    alert(JSON.stringify(formData));
                    setCurrentPage(0);
                    setMode("default");
                    setURL(URL);
                  }}
                  className="bg-teal-400 rounded-md py-2 w-20 hover:bg-teal-500 active:bg-teal-600 transition-all duration-100"
                >
                  YES
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      ) : null}
    </motion.div>
  );
}

export default App;
