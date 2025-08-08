import { createBrowserRouter } from "react-router";
import Root from "../components/root/Root";
import Error from "../pages/error/Error";
import LogIn from "../pages/login/LogIn";
import SignUp from "../pages/signup/SignUp";
import Home from "../pages/home/Home";
import Fridge from "../pages/fridge/Fridge";
import AddFood from "../pages/addFood/AddFood";
import MyItems from "../pages/myItems/MyItems";
import PrivetRoute from "../authProvider/PrivetRoute";
import Update from "../pages/updateInfo/Update";
import FoodDetails from "../pages/foodDetails/FoodDetails";
import FridgeDetails from "../pages/fridgeDetails/FridgeDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Error></Error>,
    Component: Root,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "/login",
        Component: LogIn,
      },
      {
        path: "/signup",
        Component: SignUp,
      },
      {
        path: "/fridge",
        Component: Fridge,
      },
      {
        path: "/fridge/:id",
        loader: () =>
          fetch("https://chicken-hub-server-side-public.onrender.com/all-foods"),
        Component: FridgeDetails,
      },
      {
        path: "/add-food",
        element: (
          <PrivetRoute>
            <AddFood></AddFood>
          </PrivetRoute>
        ),
      },
      {
        path: "/my-items",
        element: (
          <PrivetRoute>
            <MyItems></MyItems>
          </PrivetRoute>
        ),
      },
      {
        path: "/all-foods/:id",
        loader: () =>
          fetch("https://chicken-hub-server-side-public.onrender.com/all-foods"),
        element: (
          <PrivetRoute>
            <FoodDetails></FoodDetails>
          </PrivetRoute>
        ),
      },
      {
        path: "/updateInfo/:id",
        loader: ({ params }) =>
          fetch(
            `https://chicken-hub-server-side-public.onrender.com/all-foods/${params.id}`
          ),
        element: (
          <PrivetRoute>
            <Update></Update>
          </PrivetRoute>
        ),
      },
    ],
  },
]);
