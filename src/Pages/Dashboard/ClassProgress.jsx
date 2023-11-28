import React from "react";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import FeedbackCard from "../../Components/Dashboard/FeedbackCard";

const ClassProgress = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const { data, refetch } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/ter/${id}`);
      return res.data;
    },
  });
  return (
    <div>
      <h3 className="text-3xl text-center py-10">
        Total Reports: {data?.length}
      </h3>
      <div className="flex flex-wrap gap-10 justify-center">
        {data &&
          data?.map((item) => <FeedbackCard key={item._id} item={item} />)}
      </div>
    </div>
  );
};

export default ClassProgress;
