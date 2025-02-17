import { ScrollRestoration } from "react-router-dom";
import NavbarPicker from "../components/NavbarPicker";
import Vehicles from "../components/Vehicles";

const technology = () => {
  return (
    <div
      className="flex flex-col h-[932px] md:min-h-screen overflow-hidden animate-fadeIn
    bg-technology_mobile md:bg-technology_tablet lg:bg-technology bg-cover bg-center  "
    >
      <ScrollRestoration />
      <NavbarPicker />
      <Vehicles />
    </div>
  );
};

export default technology;
