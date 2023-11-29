import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet";

const MySingleClassPage = () => {
  const { id } = useParams();
  let [isOpen, setIsOpen] = useState(false);
  const axiosSecure = useAxiosSecure();
  function closeModal() {
    setIsOpen(false);
  }
  function openModal() {
    setIsOpen(true);
  }
  const { data: assignments, refetch } = useQuery({
    queryKey: ["assignments"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/assignments/${id}`);
      console.log(data);
      return data;
    },
  });
  const { data: item } = useQuery({
    queryKey: ["singleClass"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allclasses/${id}`);
      return res.data;
    },
  });
  const { data: submittedAssignments } = useQuery({
    queryKey: ["assignment"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/students/assignments/${id}`);
      console.log(res.data);
      return res.data;
    },
  });
  const handleCreate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const deadLine = form.deadLine.value;
    const info = {
      classId: id,
      title,
      description,
      deadLine,
    };
    console.log(info);
    const { data } = await axiosSecure.post("/assignments", info);
    console.log(data);
    if (data.insertedId) {
      toast.success("Assignment added successfully");
    } else {
      toast.error("Something went wrong");
    }
    refetch();
    closeModal();
  };
  return (
    <div className="space-y-10">
      <Helmet>
        <title>Dashboard | My Class</title>
      </Helmet>
      <div>
        <h3 className="text-4xl py-10 text-center">Class Progress: </h3>
        <div className="flex justify-around">
          <div className="bg-blue-500 hover:bg-blue-200 hover:text-blue-500 text-white w-[300px] rounded-lg h-[120px] flex items-center justify-center">
            <h3 className="text-3xl text-center ">
              Total Enrollment: {item?.totalEnrollment}
            </h3>
          </div>
          <div className="bg-green-500 hover:bg-green-200 hover:text-green-500 text-white w-[300px] rounded-lg h-[120px] flex items-center justify-center">
            <h3 className="text-3xl text-center ">
              Total Assignment: {assignments?.length}
            </h3>
          </div>
          <div className="bg-pink-500 hover:bg-pink-200 hover:text-pink-500 text-white w-[300px] rounded-lg h-[120px] flex items-center justify-center">
            <h3 className="text-3xl text-center ">
              Assignment Submitted: {submittedAssignments?.length}
            </h3>
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-4xl text-center pb-10">Create Assignment: </h3>
        <div className="flex justify-center">
          <button
            onClick={openModal}
            className="flex items-center gap-3 py-3 px-4 rounded-lg text-white bg-green-500 hover:bg-green-200 hover:text-green-500"
          >
            <FaPlus /> <span>Create</span>
          </button>
        </div>
      </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
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
            </tr>
          </thead>
          <tbody>
            {assignments?.length > 0 ? (
              assignments?.map((item) => {
                return (
                  <tr
                    key={item._id}
                    className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      {item.title}
                    </th>

                    <td className="px-6 py-4">{item.description}</td>
                    <td className="px-6 py-4">{item.deadLine}</td>
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
      <>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black/25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                    <Dialog.Title
                      as="h3"
                      className="text-lg text-center font-medium leading-6 text-gray-900"
                    >
                      Create Assignment
                    </Dialog.Title>
                    <div className="mt-2">
                      <form
                        className="flex flex-col items-center w-full"
                        onSubmit={handleCreate}
                      >
                        <div className="flex relative mt-3">
                          <label className=" absolute -top-2" htmlFor="title">
                            Title:
                          </label>
                          <input
                            className="mt-3 rounded"
                            type="text"
                            name="title"
                          />
                        </div>
                        <div className="flex relative mt-3">
                          <label
                            className=" absolute -top-2"
                            htmlFor="description"
                          >
                            description:
                          </label>
                          <input
                            className="mt-3 rounded"
                            type="text"
                            name="description"
                          />
                        </div>
                        <div className="flex relative mt-3">
                          <label
                            className=" absolute -top-2"
                            htmlFor="deadLine"
                          >
                            Deadline:
                          </label>
                          <input
                            className="mt-3 rounded"
                            type="date"
                            name="deadLine"
                          />
                        </div>

                        <div className="mt-4">
                          <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-3 rounded bg-green-500 hover:bg-green-200 text-white hover:text-green-500"
                          >
                            Create
                          </button>
                        </div>
                      </form>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </>
    </div>
  );
};

export default MySingleClassPage;
