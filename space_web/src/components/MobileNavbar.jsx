import logo from "../assets/shared/logo.svg";

const MobileNavbar = () => {
  return (
    <div id="navigation" className="flex flex-row flex-grow w-full h-[88px] py-6 justify-between">
      <div id="logo" className="flex flex-row gap-[64px] pl-6">
        <div id="true-logo" className="h-[40px] w-[40px]">
          <img src={logo} alt="logo de la pagina web"></img>
        </div>
      </div>
      <div id="menu" className="flex flex-col gap-y-2 pr-6 justify-center">
        <div id="true-menu" className="flex flex-col w-[24px] h-[21px]">
          <div id="shape" className="h-[3px] w-full bg-blue-200 mb-1"></div>
          <div id="shape" className="h-[3px] w-full bg-blue-200 mb-1"></div>
          <div id="shape" className="h-[3px] w-full bg-blue-200 mb-1"></div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
