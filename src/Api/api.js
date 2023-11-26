import useAxiosSecure from "../Hooks/useAxiosSecure";
const axiosSecure = useAxiosSecure();
export const saveUser = (user) => {
  const currentUser = {
    name: user.displayName,
    email: user.email,
    role: "student",
    status: "verified",
  };
  console.log(currentUser);
  const { data } = axiosSecure.put(`/users/${user?.email}`, currentUser);
  return data;
};
