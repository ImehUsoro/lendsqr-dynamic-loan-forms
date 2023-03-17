import { ActionTypes } from "../types/PageTyes";

interface ActionProps {
  actions: ActionTypes[];
}
const Actions = ({ actions }: ActionProps) => {
  return (
    <div className="max-w-sm mx-auto flex flex-row-reverse justify-between">
      {actions.map((action) => (
        <button
          key={action.type}
          className={`${
            action.type !== "cancel"
              ? "bg-hoverGreen hover:bg-teal-500 active:bg-teal-600"
              : "bg-red-500 hover:bg-red-600 active:bg-red-700"
          } text-white w-36 rounded-md py-2 transition-all duration-200`}
        >
          {action.label}
        </button>
      ))}
    </div>
  );
};

export default Actions;
