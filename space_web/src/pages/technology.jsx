import MobileNavbar from "../components/MobileNavbar"
import Vehicles from "../components/Vehicles"

const technology = () => {
  return (
    <div className="flex flex-col bg-technology bg-fixed bg-cover bg-center h-full">
      <MobileNavbar/>
      <Vehicles/>
    </div>
  )
}

export default technology