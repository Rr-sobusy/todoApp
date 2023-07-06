import React from "react";

type Props = {
  todos: string[];
  isNight?: boolean;
};

const Todos: React.FC<Props> = (props) => {
  const { todos, isNight } = props;
  return (
    <div className="mt-3">
      {todos.map((value, index) => {
        return (
          <div className="flex items-center gap-3 mx-3 border-b-[1px] border-slate-500 overflow-x-hidden">
            <div className={`w-4 h-4  rounded-full border border-slate-500`}></div>
            <h2 className={`text-slate-500 font-semibold my-3`}>
              {value}
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Todos;
