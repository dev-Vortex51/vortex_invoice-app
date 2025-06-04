import { MdSunny } from "react-icons/md";
import Logo from "./Logo";
import { useTheme } from "../contexts/ThemeContext";
import { IoMdMoon } from "react-icons/io";
const NavBar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <nav
      className=" flex flex-col items-center
    w-[103px]
    rounded-tr-[20px] rounded-br-[20px]
    bg-04
    max-md:flex-row
    max-md:h-[80px]
    max-md:w-screen
    max-md:rounded-tr-none
    max-md:rounded-br-none  "
    >
      <Logo />

      <span className="cursor-pointer text-16 text-2xl" onClick={toggleTheme}>
        {!isDarkMode ? <MdSunny /> : <IoMdMoon />}
      </span>

      <div
        className=" h-full md:h-[100px] items-center md:items-start flex justify-center
    w-full mt-8 pt-6 border-t border-[#494e6e]
    md:mt-8 md:pt-6 md:border-t md:w-full
    max-md:mt-0 max-md:pt-0 max-md:border-t-0
    max-md:border-l max-md:border-[#494e6e] max-md:ml-6 max-md:w-auto"
      >
        <img
          src="/avatar.jpg"
          className=" block rounded-full
    w-10 h-10
    max-md:w-8 max-md:h-8 max-md:mx-6 max-md:my-0"
          alt=""
        />
      </div>
    </nav>
  );
};

export default NavBar;
