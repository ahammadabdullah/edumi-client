import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import ClassCard from "../../Components/ClassCard";
const FeaturedClass = () => {
  const axiosPublic = useAxiosPublic();
  const { data } = useQuery({
    queryKey: ["featuredClass"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allclasses/sorted");
      return res.data;
    },
  });

  return (
    <div className="max-w-7xl mx-auto mt-20">
      <h3 className="text-3xl text-center pb-10">Featured Class</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {data &&
          data
            .slice(0, 6)
            .map((item) => <ClassCard key={item._id} item={item} />)}
      </div>
    </div>
  );
};

export default FeaturedClass;
