import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

import { useState } from "react";

const NavbarPicker = () => {
  const [width, setWidth] = useState(window.innerWidth);
  //Function that changes between Navbar

  function handleResize() {
    setWidth(window.innerWidth);
    
  }
  window.addEventListener("resize", handleResize);

  return width > 413 ? <Navbar /> : <MobileNavbar />;
};

export default NavbarPicker;