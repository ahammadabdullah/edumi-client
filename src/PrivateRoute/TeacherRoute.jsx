import { Navigate } from "react-router-dom";
import useRole from "../Hooks/useRole";
import Loader from "../Components/Loader";

const TeacherRoute = ({ children }) => {
  const [role, isLoading] = useRole();

  if (isLoading) return <Loader />;
  if (role === "Teacher") return children;
  return <Navigate to="/dashboard/profile" />;
};

export default TeacherRoute;
