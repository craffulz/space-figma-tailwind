import Home from "../pages/home";
import Destination from "../pages/destination";
import Crew from "../pages/crew";

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
]);

export default router;
