import { useParams } from "react-router-dom";
import TerModal from "../../Components/Modals/TerModal";
import { useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const ClassDetails = () => {
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  let [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth();
  const closeModal = () => {
    setIsOpen(false);
  };
  const openModal = () => {
    setIsOpen(true);
  };
  const { data } = useQuery({
    queryKey: ["assignment"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/students/assignments/${id}`);
      console.log(res.data);
      return res.data;
    },
  });
  const { data: isExist, refetch } = useQuery({
    queryKey: ["isAssignmentSubmitted"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/submittedAssignments/${id}`);
      console.log(res.data);
      return res.data;
    },
  });
  const handleSubmitAssignment = async (assignmentId) => {
    const info = {
      assignmentId: assignmentId,
      classId: id,
      studentName: user?.displayName,
      studentEmail: user?.email,
    };
    const { data } = await axiosSecure.post("/student/submitAssignment", info);
    console.log(data);
    if (data.insertedId) {
      toast.success("Submitted Successfully");
    } else {
      toast.error("Something went wrong");
    }
    refetch();
  };
  return (
    <div>
      <Helmet>
        <title>Dashboard | Class Details</title>
      </Helmet>
      <div>
        <button
          onClick={openModal}
          className="btn py-2 px-3 bg-blue-600 hover:bg-blue-200 text-white rounded"
        >
          Teaching Evaluation Report
        </button>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg my-10">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Deadline
              </th>
              <th scope="col" className="px-6 py-3">
                Submit
              </th>
            </tr>
          </thead>
          <tbody>
            {data?.length > 0 ? (
              data?.map((item) => {
                return (
                  <tr
                    key={item._id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item?.title}
                    </th>

                    <td className="px-6 py-4">{item?.description}</td>
                    <td className="px-6 py-4">{item?.deadLine}</td>
                    <td className="px-6 py-4">
                      <button
                        disabled={isExist.some(
                          (i) => i.assignmentId === item._id
                        )}
                        onClick={() => handleSubmitAssignment(item._id)}
                        className="disabled:cursor-not-allowed disabled:hover:bg-green-500 disabled:text-white btn py-2 px-3 rounded font-semibold hover:bg-green-200 bg-green-500 text-white hover:text-green-500"
                      >
                        {isExist?.some((i) => i.assignmentId === item._id)
                          ? "Submitted"
                          : "Submit"}
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
      {/* assignment list in tabular format */}
      <TerModal id={id} isOpen={isOpen} closeModal={closeModal} />
    </div>
  );
};

export default ClassDetails;
