import { useQuery } from "@tanstack/react-query";
import ClassCard from "../../Components/ClassCard";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet";

const AllClass = () => {
  const axiosPublic = useAxiosPublic();
  const { data, refetch } = useQuery({
    queryKey: ["all approved classes "],
    queryFn: async () => {
      const res = await axiosPublic.get("/allclasses");
      return res.data;
    },
  });
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <Helmet>
        <title>All Classes | Edumi</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.map((item, idx) => (
          <ClassCard key={idx} item={item} />
        ))}
      </div>
    </div>
  );
};

export default AllClass;
