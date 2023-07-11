import React from "react";
import CloseIcon from "../assets/close.png";
import { TodosTypes } from "../App";
import { AiOutlineCheck } from "react-icons/ai";

type TodosProps = {
  todos: TodosTypes[];
  isNight?: boolean;
  removeHandler?: any;
};

const Todos: React.FC<TodosProps> = (props) => {
  const { todos, removeHandler } = props;
  return (
    <div className="mt-3">
      {todos.map((value) => {
        const rex = value.name;
        return (
          <div
            key={value.id}
            className="flex items-center gap-3 mx-3 border-b-[1px] border-slate-500 overflow-x-hidden"
          >
            <div
              className={`w-5  h-5 flex ${
                value.isCompleted
                  ? "bg-gradient-to-r from-[#AB6DF2] to-[#68A1FA]"
                  : null
              } items-center justify-center  px-[4px] py-[4px]  rounded-full border border-slate-500`}
            >
              {value.isCompleted && <AiOutlineCheck color="white" />}
            </div>
            <h2 className={`text-slate-500 flex-1 font-semibold my-3`}>
              {rex}
            </h2>
            <img
              onClick={() => removeHandler(value.id)}
              className="w-4 h-4 flex-2 mr-2 cursor-pointer"
              src={CloseIcon}
              alt=""
            />
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
