import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import TeachOnEdumi from "../Pages/TeachOnEdumi/TeachOnEdumi";
import AllClass from "../Pages/AllClass/AllClass";
import SingleClassPage from "../Pages/SingleClassPage";
import Dashboard from "../Layouts/Dashboard";
import Profile from "../Pages/Dashboard/Profile";

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
        path: "/allclasses/:id",
        element: <SingleClassPage />,
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
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
    ],
  },
]);

export default router;
