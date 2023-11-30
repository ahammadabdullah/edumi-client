import { useQuery } from "@tanstack/react-query";
import ClassCard from "../../Components/ClassCard";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { Helmet } from "react-helmet";
import { useState } from "react";
import Loader from "../../Components/Loader";

const AllClass = () => {
  const axiosPublic = useAxiosPublic();
  const [page, setPage] = useState(0);
  const { data, refetch, isLoading } = useQuery({
    queryKey: ["all approved classes ", page],
    queryFn: async () => {
      const res = await axiosPublic.get(`/allclasses?page=${page}`);
      return res.data;
    },
  });
  const { result, classCount } = data || {};
  const totalPage = Math.ceil(classCount / 10);
  console.log(totalPage);
  if (isLoading) {
    return <Loader />;
  }
  return (
    <div className="max-w-7xl mx-auto mt-10">
      <Helmet>
        await
        <title>All Classes | Edumi</title>
      </Helmet>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {result &&
          result?.map((item, idx) => <ClassCard key={idx} item={item} />)}
      </div>
      <div className="flex flex-col items-center">
        <span className="text-sm text-gray-700 dark:text-gray-400">
          Showing{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {page + 1}
          </span>{" "}
          to{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {result?.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900 dark:text-white">
            {classCount}
          </span>{" "}
          Entries
        </span>
        <div className="inline-flex mt-2 xs:mt-0">
          <button
            disabled={page === 0}
            onClick={() => setPage(page - 1)}
            className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-blue-500 rounded-s hover:bg-blue-200 hover:text-blue-500 disabled:bg-blue-200 disabled:hover:text-blue-500 disabled:text-blue-500"
          >
            <svg
              className="w-3.5 h-3.5 me-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13 5H1m0 0 4 4M1 5l4-4"
              />
            </svg>
            Prev
          </button>
          <button
            disabled={page === totalPage - 1}
            onClick={() => setPage(page + 1)}
            className="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-blue-500 border-0 border-s rounded-e hover:bg-blue-200 hover:text-blue-500 disabled:bg-blue-200 disabled:hover:text-blue-500 disabled:text-blue-500"
          >
            Next
            <svg
              className="w-3.5 h-3.5 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllClass;
