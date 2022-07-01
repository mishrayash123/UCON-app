import { BsFillSunFill } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { useDarkMode } from "../hooks/useDarkMode";

export default function ThemeSwitchButton() {
  const darkMode=useDarkMode();

  function handleChange() {
      darkMode.switchTheme();
  }
  return (
    <div className="relative flex items-center">
      <input
        type="checkbox"
        className={" fixed h-12 w-12 z-20 opacity-0"
        }
        onChange={handleChange}
      />
      <label
        className={"h-[18px] w-[34px] flex rounded-full items-center justify-between p-[3px] relative scale-150 mx-2 mr-5".concat(
          darkMode.isDarkMode ? " bg-black": " bg-blue-500"
        )}
      >
        <FaMoon className="text-white text-sm" />
        <BsFillSunFill className="text-yellow-300 text-sm" />
        <div
          className={"w-[16px] h-[16px] bg-white transition-transform rounded-full fixed top-[0.074rem] left-[0.07rem]".concat(
            darkMode.isDarkMode  ?  " translate-x-4":""
          )}
        />
      </label>
    </div>
  );

// return <button className="text-red-500 text-xl" onClick={handleClick}>Theme</button>
}