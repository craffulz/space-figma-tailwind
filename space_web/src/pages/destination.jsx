import { ScrollRestoration } from "react-router-dom";
import NavbarPicker from "../components/NavbarPicker";
import World from "../components/World";
const destination = () => {
  return (
    <div className="flex flex-col bg-destination bg-fixed bg-cover  h-full w-full overflow-hidden">
      <ScrollRestoration/>
      <NavbarPicker />
      <World />
    </div>
  );
};

export default destination;
