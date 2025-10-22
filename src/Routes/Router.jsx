import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Components/Home";
import Plants from "../Components/Plants";
import Profile from "../Components/Profile";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

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
      {
        path: "/plants",
        Component: Plants,
        loader: () => fetch("/plant.json"),
      },
      {
        path: "/profile",
        Component: Profile,
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        element: <Login></Login>,
      },
      {
        path: "/auth/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "*",
    element: <h2>error 404</h2>,
  },
]);
export default router;
