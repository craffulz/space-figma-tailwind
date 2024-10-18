import  { useState, useEffect, useRef } from "react";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

const NavbarPicker = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const ref = useRef();

  useEffect(() => {
    const resizeObserver = new ResizeObserver(() => {
      if (ref.current) {
        setWidth(ref.current.clientWidth);
      }
    });

    const currentRef = ref.current; // Copiar el valor de ref.current

    if (currentRef) {
      resizeObserver.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        resizeObserver.unobserve(currentRef); // Usar currentRef en la limpieza
      }
    };
  }, [ref]); // Nota: El ref en sí no necesita estar en las dependencias

  return (
    <div ref={ref} className="w-full">
      {width > 440 ? <Navbar /> : <MobileNavbar />}
    </div>
  );
};

export default NavbarPicker;