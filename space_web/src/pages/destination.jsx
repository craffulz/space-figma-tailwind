import Navbar from "../components/Navbar";
import World from "../components/World";
const destination = () => {
  return (
    <div className="flex flex-col bg-destination bg-cover h-full">
      <Navbar />
      <World />
    </div>
  );
};

export default destination;
