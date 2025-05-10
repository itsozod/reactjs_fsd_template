import { createBrowserRouter } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import { HomePage } from "./lazy.list";

const router = createBrowserRouter([
  {
    path: "/",
    Component: PrivateRoute,
    children: [
      {
        index: true,
        path: "/",
        Component: HomePage,
      },
    ],
  },
]);

export default router;
