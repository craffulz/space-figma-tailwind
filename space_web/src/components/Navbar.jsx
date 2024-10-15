import { Link } from "react-router-dom";
import logo from "../assets/shared/logo.svg";

const Navbar = () => {
  const navLinks = [
    { number: "00", text: "HOME", path: "/" },
    { number: "01", text: "DESTINATION", path: "/destination" },
    { number: "02", text: "CREW", path: "/crew" },
    { number: "03", text: "TECHNOLOGY", path: "/technology" },
  ];

  return (
    /**
     * Logo
     */
    <div className="flex flex-row w-full h-[136px] pt-[40px] items-center justify-center overflow-hidden">
      <div
        id="logo"
        className="flex flex-row w-[736px] h-[48px] pl-[64px] gap-[64px] items-center mr-[-8px]"
      >
        <div id="logo-logo" className="w-[48px] h-[48px] cursor-pointer">
          <img src={logo} alt="logo de space_web" />
        </div>
        <div
          id="lineSeparator"
          className="flex-grow h-[1px] bg-slate-700 z-10"
        ></div>
      </div>

      {/**
       * Navigation links
       */}
      <div
        id="navlinks"
        className="flex flex-row text-[14px] text-white px-[64px] gap-[48px] w-[736px] h-[96px] ml-[-8px] z-1"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(10px)",
        }}
      >
        {navLinks.map(({ text, number, path }, index) => {
          return (
            <Link
              key={index}
              to={path}
              id="link"
              className="flex flex-col font-BarlowCondensed text-[16px] tracking-[2px] gap-[8px] h-[96px] border-b-4 border-transparent hover:border-white hover:border-opacity-30 cursor-pointer justify-center"
            >
              <div id="inside-link" className="flex flex-row gap-[12px]">
                <div id="number" className="font-bold">
                  {number}
                </div>
                <div id="text" className="">
                  {text}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;
