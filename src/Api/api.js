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

// create payment intent
export const createPaymentIntent = async (price) => {
  const { data } = await axiosSecure.post("/create-payment-intent", price);
  return data;
};

// save booking info in database
export const saveEnrolledClassInfo = async (paymentInfo) => {
  const { data } = await axiosSecure.post("/enrolledclasses", paymentInfo);
  return data;
};
