import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import userIcon from "../../assets/user-icon.png";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["allusers"],
    queryFn: async () => {
      const { data: res } = await axiosSecure.get("/allusers");
      console.log(res);
      return res;
    },
  });
  const handleMakeAdmin = async (email) => {
    console.log(email);
    const { data } = await axiosSecure.put(`/make-admin/${email}`);
    console.log(data);
    if (data.modifiedCount) {
      toast.success("Updated Successfully");
    } else {
      toast.error("Something went wrong");
    }
    refetch();
  };
  return (
    <div>
      <Helmet>
        <title>Dashboard | All Users</title>
      </Helmet>
      <h3>Total Users:</h3>
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
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>

              <th scope="col" className="px-6 py-3">
                Make Admin
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
                      <img
                        className="w-12 rounded"
                        src={item.image ? item.image : userIcon}
                        alt=""
                      />
                    </td>
                    <td className="px-6 py-4">{item.email}</td>
                    <td className="px-6 py-4">{item.role}</td>
                    <td className="px-6 py-4">
                      <button
                        disabled={item.role === "Admin"}
                        onClick={() => handleMakeAdmin(item.email)}
                        className="disabled:cursor-not-allowed disabled:hover:bg-green-500 disabled:text-white btn py-2 px-3 rounded font-semibold hover:bg-green-200 bg-green-500 text-white hover:text-green-500"
                      >
                        {item.role === "Admin" ? "Admin" : "Make Admin"}
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

export default AllUsers;
