import { ScrollRestoration } from "react-router-dom";
import NavbarPicker from "../components/NavbarPicker";
import World from "../components/World";
const destination = () => {
  return (
    <div className="flex flex-col h-[932px] md:min-h-screen w-full overflow-y-scroll md:overflow-hidden  items-center animate-fadeIn
    bg-destination_mobile md:bg-destination_tablet lg:bg-destination bg-fixed bg-cover bg-center ">
      <ScrollRestoration/>
      <NavbarPicker />
      <World />
    </div>
  );
};

export default destination;
