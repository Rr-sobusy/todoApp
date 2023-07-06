import { useEffect, useState } from "react";
import Todos from "./Todos";
import DayIcon from "./assets/brightness-and-contrast.png";
import NightIcon from "./assets/moon.png";

const initialTodos = ["Eat Breakfast", "Get ready for work"];

function App() {
  const [isNightMode, setNightmode] = useState<boolean>(true);

  const [activeTab, setActiveTab] = useState<number>(0);

  const [todos, setTodos] = useState<string[]>(initialTodos);

  const handleNightMode = () => {
    setNightmode((prev) => !prev);
  };
  return (
    <>
      <div
        className={`${isNightMode ? "bg-[#161620]" : "bg-[#F7F7F7]"} h-screen`}
      >
        <div className="bg-[url('./assets/bg-mobile-dark.jpg')] md:bg-[url('./assets/bg-desktop-dark.jpg')] bg-cover w-full md:h-[18rem] h-[13rem]">
          <h2 className="text-xl tracking-[1rem] font-sans font-bold lg:px-[24rem] xl:px-[34rem] text-white px-5 pt-10">
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
            className={`mx-5 flex items-center px-4 ${
              isNightMode ? "bg-[#25273C]" : "bg-[#ffff]"
            } rounded-lg h-[60px] xl:-mt-[8.25rem] -mt-[7.25rem]`}
          >
            <p className="text-slate-500 font-sans">Create a new todo...</p>
          </div>
          <div
            className={`mx-5 ${
              isNightMode ? "bg-[#25273C]" : "bg-[#ffff]"
            } rounded-lg h-[440px] -mt-[2.5rem] xl:-mt-[3.5rem] w-[auto] overflow-auto`}
          >
            <Todos isNight={isNightMode} todos={todos} />
          </div>
          <div
            className={`mx-5 flex items-center px-4 ${
              isNightMode ? "bg-[#25273C]" : "bg-[#ffff]"
            } rounded-lg h-[60px] mt-[1rem] w-[auto]`}
          >
            <p className="text-slate-500 flex">5 its</p>
            <ul className="flex justify-center gap-3 w-full">
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
    </>
  );
}

export default App;
