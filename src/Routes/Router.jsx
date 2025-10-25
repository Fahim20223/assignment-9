import { createBrowserRouter } from "react-router";
import HomeLayout from "../Layouts/HomeLayout";
import Home from "../Components/Home";
import Plants from "../Components/Plants";
import Profile from "../Components/Profile";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import PlantsDetails from "../Pages/PlantsDetails";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Loading from "../Pages/Loading";
import Error from "../Pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <Error></Error>,
    children: [
      {
        path: "",
        Component: Home,
        loader: () => fetch("/plant.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/plants",
        Component: Plants,
        loader: () => fetch("/plant.json"),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/profile",
        element: (
          <PrivateRoutes>
            <Profile></Profile>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    errorElement: <Error></Error>,
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
    path: "/card-details/:id",
    element: (
      <PrivateRoutes>
        <PlantsDetails></PlantsDetails>
      </PrivateRoutes>
    ),
    errorElement: <Error></Error>,
    loader: () => fetch("/plant.json"),
    hydrateFallbackElement: <Loading></Loading>,
  },
  // {
  //   path: "/*",
  //   errorElement: <Error></Error>,
  // },
]);
export default router;
