import React from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";
import Loader from "../../Components/Loader";

const AllClasses = () => {
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["all classes "],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin/allclasses");
      return res.data;
    },
  });
  const handleSeeProgress = (id) => {
    navigate(`/dashboard/class-progress/${id}`);
  };
  const handleApprove = async (id) => {
    const { data } = await axiosSecure.put(`/admin/allclasses/approve/${id}`);
    if (data.modifiedCount) {
      toast.success("Approved Successfully");
    } else {
      toast.error("Something went wrong");
    }
    refetch();
  };
  const handleReject = async (id) => {
    const { data } = await axiosSecure.put(`/admin/allclasses/reject/${id}`);
    if (data.modifiedCount) {
      toast.success("Rejected Successfully");
    } else {
      toast.error("Something went wrong");
    }
    refetch();
  };

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      <Helmet>
        <title>Dashboard | All Classes</title>
      </Helmet>
      <h3 className="text-3xl text-center py-10">
        Total Class {data?.length}{" "}
      </h3>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>

              <th scope="col" className="px-6 py-3">
                Approve
              </th>
              <th scope="col" className="px-6 py-3">
                Reject
              </th>
              <th scope="col" className="px-6 py-3">
                See Progress
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.length > 0 ? (
              data?.map((item) => {
                return (
                  <tr
                    key={item?._id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item?.title}
                    </th>
                    <td className="px-6 py-4">
                      <img className="w-12 rounded" src={item?.image} alt="" />
                    </td>
                    <td className="px-6 py-4">{item?.email}</td>
                    <td className="px-6 py-4">{item?.status}</td>
                    <td className="px-6 py-4">
                      <button
                        disabled={
                          item?.status === "approved" ||
                          item?.status === "rejected"
                        }
                        onClick={() => handleApprove(item?._id)}
                        className="disabled:cursor-not-allowed disabled:hover:bg-green-500 disabled:text-white btn py-2 px-3 rounded font-semibold hover:bg-green-200 bg-green-500 text-white hover:text-green-500"
                      >
                        {item?.status === "approved"
                          ? "Approved"
                          : item?.status === "rejected"
                          ? "Rejected"
                          : "Approve"}
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        disabled={
                          item?.status === "approved" ||
                          item?.status === "rejected"
                        }
                        onClick={() => handleReject(item?._id)}
                        className="disabled:cursor-not-allowed disabled:hover:bg-red-500 disabled:text-white btn py-2 px-3 rounded font-semibold hover:bg-red-200 bg-red-500 text-white hover:text-red-500"
                      >
                        {item?.status === "approved"
                          ? "Approved"
                          : item?.status === "rejected"
                          ? "Rejected"
                          : "Reject"}
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        disabled={
                          item?.status === "pending" ||
                          item?.status === "rejected"
                        }
                        onClick={() => handleSeeProgress(item?._id)}
                        className="disabled:cursor-not-allowed disabled:hover:bg-blue-500 disabled:text-white btn py-2 px-3 rounded font-semibold hover:bg-blue-200 bg-blue-500 text-white hover:text-blue-500"
                      >
                        See Progress
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr className="px-6 py-4 !w-full text-center odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                No Pending Requests
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllClasses;
