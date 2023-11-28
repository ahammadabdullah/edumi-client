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
import MyClasses from "../Pages/Dashboard/MyClasses";
import MyEnrolledClasses from "../Pages/Dashboard/MyEnrolledClasses";
import MyOrders from "../Pages/Dashboard/MyOrders";
import AllUsers from "../Pages/Dashboard/AllUsers";
import Error from "../Pages/Error";
import ClassDetails from "../Pages/Dashboard/ClassDetails";
import TeacherRequests from "../Pages/Dashboard/TeacherRequests";
import AddClass from "../Pages/Dashboard/AddClass";
import MySingleClassPage from "../Pages/Dashboard/MySingleClassPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
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
    errorElement: <Error />,
    children: [
      {
        path: "/dashboard/profile",
        element: <Profile />,
      },
      {
        path: "/dashboard/my-classes",
        element: <MyClasses />,
      },
      {
        path: "/dashboard/my-classes/:id",
        element: <MySingleClassPage />,
      },
      {
        path: "/dashboard/all-users",
        element: <AllUsers />,
      },
      {
        path: "/dashboard/my-enrolled-classes",
        element: <MyEnrolledClasses />,
      },
      {
        path: "/dashboard/my-enrolled-classes/:id",
        element: <ClassDetails />,
      },
      {
        path: "/dashboard/my-orders",
        element: <MyOrders />,
      },
      {
        path: "/dashboard/teacher-requests",
        element: <TeacherRequests />,
      },
      {
        path: "/dashboard/add-class",
        element: <AddClass />,
      },
    ],
  },
]);

export default router;
