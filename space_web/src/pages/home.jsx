import NavbarPicker from "../components/NavbarPicker";
import Hero from "../components/Hero";
import { ScrollRestoration } from "react-router-dom";
import "../index.css";

const home = () => {
  return (
    <div className="flex flex-col bg-home bg-fixed bg-cover bg-center w-full min-h-screen overflow-hidden justify-between">
      <ScrollRestoration />
      <NavbarPicker />
      <Hero />
    </div>
  );
};

export default home;
