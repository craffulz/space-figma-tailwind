import { ScrollRestoration } from "react-router-dom";
import Biography from "../components/Biography";
import NavbarPicker from "../components/NavbarPicker";

const crew = () => {
  return (
    <div className="flex flex-col bg-crew_Mobile md:bg-crew_tablet lg:bg-crew bg-cover bg-center bg-fixed md:min-h-screen overflow-hidden">
      <ScrollRestoration/>
      <NavbarPicker />
      <Biography />
    </div>
  );
};

export default crew;
