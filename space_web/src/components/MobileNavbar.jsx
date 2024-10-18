import logo from "../assets/shared/logo.svg";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

const MobileNavbar = () => {
  const location = useLocation().pathname;

  const [visible, setVisible] = useState(false);
  const navLinks = [
    { number: "00", text: "HOME", path: "/" },
    { number: "01", text: "DESTINATION", path: "/destination" },
    { number: "02", text: "CREW", path: "/crew" },
    { number: "03", text: "TECHNOLOGY", path: "/technology" },
  ];

  const handleClickOnMenu = () => setVisible(true);
  const handleClickOnClose = () => setVisible(false);

  return (
    <>
      <div
        id="navigation"
        className="flex flex-row flex-grow w-full h-[88px] py-6 justify-between "
      >
        <div id="logo" className="flex flex-row gap-[64px] pl-6">
          <div id="true-logo" className="h-[40px] w-[40px]">
            <Link to="/">
              <img src={logo} alt="logo de la pagina web"></img>
            </Link>
          </div>
        </div>
        <div id="menu" className="flex flex-col gap-y-2 pr-6 justify-center">
          <div
            id="true-menu"
            className="flex flex-col w-[24px] h-[21px] cursor-pointer"
            onClick={() => handleClickOnMenu()}
          >
            <div id="shape" className="h-[3px] w-full bg-blue-200 mb-1"></div>
            <div id="shape" className="h-[3px] w-full bg-blue-200 mb-1"></div>
            <div id="shape" className="h-[3px] w-full bg-blue-200 mb-1"></div>
          </div>
        </div>
      </div>
      <div
        id="aside"
        className={`absolute overflow-y-scroll z-12 top-0 right-0 h-screen bg-opacity-30 backdrop-blur-2xl transition-all duration-500 ease-in-out ${
          visible ? "w-[254px]" : "w-0 pl-0"
        }  flex flex-col gap-y-[48px] pl-8`}
      >
        <div
          id="equis"
          className="w-[222px] h-[85px] flex flex-row py-8 justify-end"
        >
          <div id="content" className="flex flex-col gap-y-2 pr-6 self-end">
            <div
              id="close"
              className="w-[24px] h-[21px] flex flex-col gap-2 p-2 items-center cursor-pointer"
              onClick={() => handleClickOnClose()}
            >
              <div id="group" className="w-[19px] h-[19px]">
                <div
                  id="shape"
                  className="h-[3px] w-full rotate-[45deg] bg-blue-200"
                ></div>
                <div
                  id="shape"
                  className="h-[3px] w-full rotate-[-45deg] bg-blue-200"
                ></div>
              </div>
            </div>
          </div>
        </div>
        <div id="menu" className="flex flex-col w-[222px] gap-y-8">
          <div id="navigation" className="flex flex-col gap-6">
            {navLinks.map(({ number, text, path }, index) => {
              return (
                <Link
                  to={path}
                  id="link"
                  key={index}
                  className={`flex flex-row gap-3 border-r-4 ${
                    path === location ? "border-white" : "border-transparent"
                  } hover:border-gray-600 cursor-pointer`}
                >
                  <div
                    id="number"
                    className="font-BarlowCondensed font-bold text-[16px] tracking-[2px] text-white"
                  >
                    {number}
                  </div>
                  <div
                    id="text"
                    className="font-BarlowCondensed text-[16px] tracking-[2px] text-white"
                  >
                    {text}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNavbar;
