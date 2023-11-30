import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import ClassCard from "../../Components/Dashboard/ClassCard";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MyEnrolledClasses = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data } = useQuery({
    queryKey: ["My Enrolled Classes"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(
        `/myenrolledclasses/${user.email}`
      );
      return data;
    },
  });
  return (
    <div>
      <Helmet>
        <title>Dashboard | My Classes</title>
      </Helmet>
      <h3 className="text-center text-3xl">
        My Enrolled Classes {data?.length}
      </h3>
      <div className="grid lg:grid-cols-3 grid-cols-1 md:grid-cols-2 gap-10 my-10">
        {data && data.map((item, idx) => <ClassCard item={item} key={idx} />)}
      </div>
    </div>
  );
};

export default MyEnrolledClasses;
