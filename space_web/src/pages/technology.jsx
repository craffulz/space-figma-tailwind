import { ScrollRestoration } from "react-router-dom";
import NavbarPicker from "../components/NavbarPicker";
import Vehicles from "../components/Vehicles";

const technology = () => {
  return (
    <div className="flex flex-col bg-technology bg-fixed bg-cover bg-center min-h-screen overflow-hidden">
      <ScrollRestoration/>
      <NavbarPicker />
      <Vehicles />
    </div>
  );
};

export default technology;
