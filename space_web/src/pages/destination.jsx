import { ScrollRestoration } from "react-router-dom";
import NavbarPicker from "../components/NavbarPicker";
import World from "../components/World";
const destination = () => {
  return (
    <div className="flex flex-col bg-destination_mobile md:bg-destination_tablet lg:bg-destination bg-fixed bg-cover md:min-h-screen w-full overflow-hidden">
      <ScrollRestoration/>
      <NavbarPicker />
      <World />
    </div>
  );
};

export default destination;
