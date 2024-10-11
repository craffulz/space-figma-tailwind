import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import '../index.css'
const home = () => {
  return (
    <div className="flex flex-col bg-home bg-fixed bg-cover bg-center h-full">
      <Navbar />
      <Hero />
    </div>
  );
};

export default home;
