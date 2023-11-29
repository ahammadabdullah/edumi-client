import { Navigate } from "react-router-dom";
import useRole from "../Hooks/useRole";
import Loader from "../Components/Loader";

const AdminRoute = ({ children }) => {
  const [role, isLoading] = useRole();

  if (isLoading) return <Loader />;
  if (role === "Admin") return children;
  return <Navigate to="/dashboard/profile" />;
};

export default AdminRoute;
