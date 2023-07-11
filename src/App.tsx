import { useState } from "react";
import Todos from "./components/Todos";
import AddTodos from "./components/AddTodos";
import ManageTodos from "./components/ManageTodos";
import DayIcon from "./assets/brightness-and-contrast.png";
import NightIcon from "./assets/moon.png";

export type TodosTypes = {
  id: number;
  name: string;
  isCompleted: boolean;
};

const initialTodos = [
  {
    id: 1,
    name: "Eat breakfast",
    isCompleted: true,
  },
  {
    id: 2,
    name: "Get to work",
    isCompleted: false,
  },
];

function App() {
  const [isNightMode, setNightmode] = useState<boolean>(true);

  const [activeTab, setActiveTab] = useState<number>(0);

  const [todos, setTodos] = useState<TodosTypes[]>(initialTodos);

  const [text, setText] = useState<string>("");

  const [emptyPrompt, setEmptyPrompt] = useState<boolean>(false);

  const [toManage, setToManage] = useState<{name:string, id: number}>({
    name: "",
    id: 0,
  });

  // Add Todo Dialog states
  const [isOpen, setOpen] = useState<boolean>(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  // Manage Todo Dialog states
  const [isManaged, setManaged] = useState(false);

  const openManage = () => {
    setManaged(true);
  };

  const closeManage = () => {
    setManaged(false);
  };

  const handleNightMode = () => {
    setNightmode((prev) => !prev);
  };

  const handleManage = (index: number) => {
    const todoName: TodosTypes[] = todos.filter((todo) => todo.id === index);
    setToManage({name:todoName[0].name, id: todoName[0].id});
    openManage();
  };

  const changeHandler = (value: any) => {
    setText(value.target.value);
  };

  const submitHandler = () => {
    if (!text) {
      setEmptyPrompt(true);
      setTimeout(() => {
        setEmptyPrompt(false);
      }, 2500);
    } else {
      setTodos((prev) => [
        ...prev,
        {
          id: prev.length === 0 ? 1 : prev[prev.length - 1].id + 1,
          name: text,
          isCompleted: false,
        },
      ]);
      closeModal();
      setText("");
    }
  };
  return (
    <>
      <div
        className={`${
          isNightMode ? "bg-[#161620]" : "bg-[#F7F7F7]"
        } h-screen xl:pb-5`}
      >
        <div className="bg-[url('./assets/bg-mobile-dark.jpg')] md:bg-[url('./assets/bg-desktop-dark.jpg')] bg-cover w-full md:h-[18rem] h-[13rem]">
          <h2 className="text-xl tracking-[1rem] font-sans font-bold md:px-[10rem] lg:px-[24rem] xl:px-[34rem] text-white px-5 pt-10">
            TODO
          </h2>
          <img
            onClick={handleNightMode}
            className="w-8 h-8 absolute right-6 top-9"
            src={isNightMode ? DayIcon : NightIcon}
            alt=""
          />
        </div>
        <div className="grid md:mx-[10rem] lg:mx-[23rem] xl:mx-[33rem]">
          <div
            onClick={openModal}
            className={`mx-5 flex items-center px-4 ${
              isNightMode ? "bg-[#25273C]" : "bg-[#ffff]"
            } rounded-lg h-[60px] xl:-mt-[11.25rem] -mt-[7.25rem] cursor-pointer`}
          >
            <p className="text-slate-500 font-sans">Create a new todo...</p>
          </div>
          <div
            className={`mx-5 ${
              isNightMode ? "bg-[#25273C]" : "bg-[#ffff]"
            } rounded-lg h-[440px] -mt-[2.5rem] xl:-mt-[6rem] w-[auto] overflow-auto`}
          >
            <Todos
              manageHandler={handleManage}
              isNight={isNightMode}
              todos={todos}
            />
          </div>
          <div
            className={`mx-5 flex items-center px-4 ${
              isNightMode ? "bg-[#25273C]" : "bg-[#ffff]"
            } rounded-lg h-[60px] mt-[1rem] w-[auto]`}
          >
            <p className="text-slate-500 flex-none">{`${todos.length} ${
              todos.length !== 1 ? "items" : "item"
            }`}</p>
            <ul className="flex  justify-center gap-3 w-full">
              {["All", "Active", "Completed"].map((value, index) => (
                <p
                  onClick={() => setActiveTab(index)}
                  key={index}
                  className={`${
                    activeTab === index ? "text-blue-500" : "text-slate-500"
                  } font-bold font-sans cursor-pointer`}
                >
                  {value}
                </p>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <AddTodos
        value={text}
        changeHandler={changeHandler}
        submitHandler={submitHandler}
        isOpen={isOpen}
        closeModal={closeModal}
        openModal={openModal}
        emptyPrompt={emptyPrompt}
      />
      <ManageTodos
        isManaged={isManaged}
        closeManage={closeManage}
        openManage={openManage}
        todoTitle={toManage.name}
        todoId={toManage.id}
      />
    </>
  );
}

export default App;
