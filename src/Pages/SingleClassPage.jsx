import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
const SingleClassPage = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { data: item } = useQuery({
    queryKey: ["singleClass"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allclasses/${id}`);
      return res.data;
    },
  });
  const { _id, title, name, price, image, shortDescription, totalEnrollment } =
    item;
  return (
    <div className="max-w-7xl mx-auto mt-5 space-y-3 mb-20">
      <img className="w-full" src={image} alt="" />
      <h3 className="text-3xl md:text-4xl lg:text-5xl">{title}</h3>
      <h4 className="text-xl md:text-2xl lg:text-3xl">Instructor: {name}</h4>
      <div className="flex gap-5 text-md md:text-xl lg:text-2xl">
        <p>Price: {price}$ </p>
        <p>Already Enrolled: {totalEnrollment}</p>
      </div>
      <p className="text-xl">{shortDescription}</p>
      <button className="btn py-2 px-3 text-white bg-blue-600">
        Enroll Now
      </button>
    </div>
  );
};

export default SingleClassPage;
