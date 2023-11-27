import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const MyEnrolledClasses = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosPublic();
  const { data } = useQuery({
    queryKey: ["My Enrolled Classes"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/myenrolledclasses/${user.email}`
      );
      return data;
    },
  });
  console.log(data);
  return <div>My Enrolled Classes {data?.length}</div>;
};

export default MyEnrolledClasses;
