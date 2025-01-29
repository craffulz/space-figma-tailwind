import NavbarPicker from "../components/NavbarPicker";
import Hero from "../components/Hero";
import { ScrollRestoration } from "react-router-dom";
import "../index.css";

const home = () => {
  return (
    <div
      className={`flex flex-col overflow-y-scroll md:overflow-hidden justify-between relative animate-fadeIn 
          bg-home_mobile md:bg-home_tablet lg:bg-home bg-fixed bg-cover bg-center w-full h-[932px] md:min-h-screen `}
    >
      <ScrollRestoration />
      <NavbarPicker />
      <Hero />
    </div>
  );
};

export default home;
