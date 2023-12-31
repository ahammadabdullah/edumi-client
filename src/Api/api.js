import useAxiosSecure from "../Hooks/useAxiosSecure";
const axiosSecure = useAxiosSecure();
export const saveUser = (user) => {
  const currentUser = {
    name: user.displayName,
    email: user.email,
    role: "Student",
    status: "verified",
  };
  console.log(currentUser);
  const { data } = axiosSecure.put(`/users/${user?.email}`, currentUser);
  return data;
};

// create payment intent
export const createPaymentIntent = async (price) => {
  const { data } = await axiosSecure.post("/create-payment-intent", price);
  return data;
};

// save enrollement info in database
export const saveEnrolledClassInfo = async (paymentInfo) => {
  const { data } = await axiosSecure.post("/enrolledclasses", paymentInfo);
  return data;
};

// Get user role
export const getRole = async (email) => {
  const { data } = await axiosSecure(`/user/${email}`);
  return data.role;
};

// get all users
export const getAllUsers = async () => {
  const { data } = await axiosSecure("/users");
  return data;
};
