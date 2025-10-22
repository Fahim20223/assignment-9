import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Components/Home";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "",
        Component: Home,
        loader: () => fetch("/plant.json"),
      },
    ],
  },
  {
    path: "*",
    element: <h2>error 404</h2>,
  },
]);
export default router;
