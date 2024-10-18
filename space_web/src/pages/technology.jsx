import { ScrollRestoration } from "react-router-dom";
import NavbarPicker from "../components/NavbarPicker";
import Vehicles from "../components/Vehicles";

const technology = () => {
  return (
    <div className="flex flex-col bg-technology_mobile md:bg-technology_tablet lg:bg-technology bg-cover bg-center bg-fixed h-[932px] md:min-h-screen overflow-hidden">
      <ScrollRestoration />
      <NavbarPicker />
      <Vehicles />
    </div>
  );
};

export default technology;
