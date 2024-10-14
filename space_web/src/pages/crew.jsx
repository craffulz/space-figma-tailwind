import Biography from "../components/Biography";
import MobileNavbar from "../components/MobileNavbar";

const crew = () => {
  return (
    <div className="flex flex-col bg-crew_Mobile lg:bg-crew  bg-cover bg-center bg-fixed h-full">
      <MobileNavbar />
      <Biography/>
    </div>
  );
};

export default crew;
