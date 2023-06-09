import { motion } from "framer-motion";
import { useRecoilState } from "recoil";
import {
  currentPageState,
  formState,
  modal,
  submitModal,
} from "../atoms/pageAtoms";
import { ActionTypes } from "../types/PageTypes";

interface ActionProps {
  actions: ActionTypes[];
}
const Actions = ({ actions }: ActionProps) => {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState);
  const [mode, setMode] = useRecoilState(formState);
  const [modalState, setModalState] = useRecoilState(modal);
  const [submitModalState, setSubmitModalState] = useRecoilState(submitModal);

  return (
    <div className="max-w-sm mx-auto flex flex-row-reverse justify-between">
      {actions.map((action) => (
        <motion.button
          whileTap={{ scale: 0.9 }}
          whileHover={{ scale: 1.05 }}
          key={action.type}
          type={action.type === "cancel" ? "button" : "submit"}
          onClick={() => {
            if (action.type === "continue") {
              setCurrentPage(currentPage + 1);
              window.scrollTo(0, 0);
            } else if (action.type === "submit") {
              setSubmitModalState(true);
            } else if (action.type === "cancel") {
              setModalState(true);
            }
          }}
          className={`${
            action.type !== "cancel"
              ? "bg-hoverGreen hover:bg-teal-500 active:bg-teal-600"
              : "bg-red-500 hover:bg-red-600 active:bg-red-700"
          } text-white w-36 rounded-md py-2 transition-all duration-200`}
        >
          {action.label}
        </motion.button>
      ))}
    </div>
  );
};

export default Actions;
