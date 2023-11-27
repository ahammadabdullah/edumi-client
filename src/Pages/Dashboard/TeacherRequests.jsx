import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";

const TeacherRequests = () => {
  const axiosSecure = useAxiosSecure();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["teacher-requests"],
    queryFn: async () => {
      const { data: res } = await axiosSecure.get("/teacherrequests");
      return res;
    },
  });
  console.log(data);
  const handleApprove = async (email) => {
    const { data } = await axiosSecure.put(`/teacherrequests/${email}`);
    console.log(data);
    if (data === "updated") {
      toast.success("Updated Successfully");
    } else {
      toast.error("Something went wrong");
    }
    refetch();
  };
  const handleDecline = async (email) => {
    const { data } = await axiosSecure.delete(`/teacherrequests/${email}`);
    console.log(data);
    if (deletedCount) {
      toast.success("Deleted Successfully");
    } else {
      toast.error("Something went wrong");
    }
    refetch();
  };

  return (
    <div>
      <h3 className="text-center text-3xl pb-10">
        Total Teachers requests: {data?.length}
      </h3>

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Image
              </th>
              <th scope="col" className="px-6 py-3">
                Experience
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3">
                Approve
              </th>
              <th scope="col" className="px-6 py-3">
                Decline
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
                      {item.name}
                    </th>
                    <td className="px-6 py-4">
                      <img className="w-12 rounded" src={item.image} alt="" />
                    </td>
                    <td className="px-6 py-4">{item.experience}</td>
                    <td className="px-6 py-4">{item.category}</td>
                    <td className="px-6 py-4">{item.status}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleApprove(item.email)}
                        className="btn py-2 px-3 rounded font-semibold hover:bg-green-200 bg-green-500 text-white hover:text-green-500"
                      >
                        Approve
                      </button>
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleDecline(item.email)}
                        className="btn py-2 px-3 rounded font-semibold hover:bg-red-200 bg-red-500 hover:text-red-500 text-white"
                      >
                        Decline
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

export default TeacherRequests;
