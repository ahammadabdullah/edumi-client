import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Dashboard/Sidebar";
import { Toaster } from "react-hot-toast";

const Dashboard = () => {
  return (
    <div className="relative min-h-screen md:flex">
      <Toaster />
      <Sidebar />
      <div className="flex-1  md:ml-64">
        <div className="p-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
