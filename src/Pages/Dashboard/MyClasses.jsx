import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import MyClassCard from "../../Components/Dashboard/MyClassCard";
import { Helmet } from "react-helmet";

const MyClasses = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data, refetch } = useQuery({
    queryKey: ["my-classes"],
    queryFn: async () => {
      const { data: res } = await axiosSecure.get(`/myclasses/${user?.email}`);
      console.log(res);
      return res;
    },
  });
  return (
    <div>
      <Helmet>
        <title>Dashboard | My Classes</title>
      </Helmet>
      <h3 className="text-3xl text-center">My Total Classes: {data?.length}</h3>
      <div className="grid grid-cols-3 gap-10 mx-auto mt-10">
        {data &&
          data.map((item) => (
            <MyClassCard key={item._id} item={item} refetch={refetch} />
          ))}
      </div>
    </div>
  );
};

export default MyClasses;
