import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import TeachOnEdumi from "../Pages/TeachOnEdumi/TeachOnEdumi";
import AllClass from "../Pages/AllClass/AllClass";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/allclasses",
        element: <AllClass />,
      },
      {
        path: "/teachonedumi",
        element: <TeachOnEdumi />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
