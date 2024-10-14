import Navbar from "../components/Navbar";
import World from "../components/World";
const destination = () => {
  return (
    <div className="flex flex-col bg-destination bg-fixed bg-cover  h-full w-full overflow-hidden">
      <Navbar />
      <World />
    </div>
  );
};

export default destination;
