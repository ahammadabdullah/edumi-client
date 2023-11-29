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
import AllClasses from "../Pages/Dashboard/AllClasses";
import ClassProgress from "../Pages/Dashboard/ClassProgress";
import AdminRoute from "../PrivateRoute/AdminRoute";
import TeacherRoute from "../PrivateRoute/TeacherRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

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
        element: (
          <PrivateRoute>
            <SingleClassPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/teachonedumi",
        element: (
          <PrivateRoute>
            <TeachOnEdumi />
          </PrivateRoute>
        ),
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
    element: (
      <PrivateRoute>
        <Dashboard />,
      </PrivateRoute>
    ),
    errorElement: <Error />,
    children: [
      {
        path: "/dashboard/profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-classes",
        element: (
          <PrivateRoute>
            <TeacherRoute>
              <MyClasses />
            </TeacherRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-classes/:id",
        element: (
          <PrivateRoute>
            <TeacherRoute>
              <MySingleClassPage />
            </TeacherRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllUsers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-enrolled-classes",
        element: (
          <PrivateRoute>
            <MyEnrolledClasses />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-enrolled-classes/:id",
        element: (
          <PrivateRoute>
            <ClassDetails />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/my-orders",
        element: (
          <PrivateRoute>
            <MyOrders />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/teacher-requests",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <TeacherRequests />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/all-classes",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllClasses />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/class-progress/:id",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <ClassProgress />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/add-class",
        element: (
          <PrivateRoute>
            <TeacherRoute>
              <AddClass />
            </TeacherRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
