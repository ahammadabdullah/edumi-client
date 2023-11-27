import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import ClassCard from "../../Components/Dashboard/ClassCard";

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
  return (
    <div>
      <h3 className="text-center text-3xl">
        My Enrolled Classes {data?.length}
      </h3>
      <div className="grid grid-cols-3 my-10">
        {data && data.map((item, idx) => <ClassCard item={item} key={idx} />)}
      </div>
    </div>
  );
};

export default MyEnrolledClasses;
