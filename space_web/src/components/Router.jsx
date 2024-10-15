import Home from "../pages/home";
import Destination from "../pages/destination";
import Crew from "../pages/crew";
import Technology from "../pages/technology";

import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/destination",
    element: <Destination />,
  },
  {
    path: "/crew",
    element: <Crew />,
  },
  {
    path: "/technology",
    element: <Technology />,
  },
]);

export default router;
