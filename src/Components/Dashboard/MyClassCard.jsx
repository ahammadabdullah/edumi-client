import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const MyClassCard = ({ item, refetch }) => {
  const { _id, name, email, description, title, price, image, status } =
    item || {};
  let [isOpen, setIsOpen] = useState(false);
  let [updateIsOpen, setUpdateIsOpen] = useState(false);
  const axiosSecure = useAxiosSecure();

  function closeModal() {
    setIsOpen(false);
  }
  function closeUpdateModal() {
    setUpdateIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  function openUpdateModal() {
    setUpdateIsOpen(true);
  }
  const handleDelete = async () => {
    console.log("delete", _id);
    const { data } = await axiosSecure.delete(`/myclasses/${_id}`);
    console.log(data);
    refetch();
    closeModal();
  };
  const handleUpdate = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const description = form.description.value;
    const price = form.price.value;
    const image = form.image.value;
    console.log(title, description, price, image);
  };
  return (
    <div className="w-[300px] p-3 bg-blue-100 rounded mx-auto">
      <div>
        <img className="rounded" src={image} alt="" />
      </div>
      <div className="pt-3">
        <h3 className="text-semibold text-xl">{title}</h3>
        <div className="flex justify-between font-semibold">
          <h3>{name}</h3>
          <h3>{price} $</h3>
        </div>
        <h3>
          Status: <span className="font-semibold">{status}</span>
        </h3>
        <h3 className=" ">{description}</h3>
      </div>
      <div className="flex justify-around mt-3">
        <button
          onClick={openModal}
          className="py-2 px-3 rounded bg-red-500 hover:bg-red-200 text-white hover:text-red-500"
        >
          {" "}
          Delete
        </button>
        <button
          onClick={openUpdateModal}
          className="py-2 px-3 rounded bg-blue-500 hover:bg-blue-200 text-white hover:text-blue-500"
        >
          {" "}
          Update
        </button>
      </div>
      <>
        <Transition appear show={updateIsOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeUpdateModal}>
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
                      Update
                    </Dialog.Title>
                    <div className="mt-2">
                      <form
                        className="flex flex-col items-center w-full"
                        onSubmit={handleUpdate}
                      >
                        <div className="flex relative mt-3">
                          <label className=" absolute -top-2" htmlFor="title">
                            Title:
                          </label>
                          <input
                            className="mt-3 rounded"
                            type="text"
                            name="title"
                            defaultValue={title}
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
                            defaultValue={description}
                          />
                        </div>
                        <div className="flex relative mt-3">
                          <label className=" absolute -top-2" htmlFor="price">
                            Price:
                          </label>
                          <input
                            className="mt-3 rounded"
                            type="number"
                            name="price"
                            defaultValue={price}
                          />
                        </div>
                        <div className="flex relative mt-3">
                          <label className=" absolute -top-2" htmlFor="image">
                            Image Url:
                          </label>
                          <input
                            className="mt-3 rounded"
                            type="text"
                            name="image"
                            defaultValue={image}
                          />
                        </div>
                        <div className="mt-4">
                          <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-3 rounded bg-green-500 hover:bg-green-200 text-white hover:text-green-500"
                          >
                            Update
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
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      Delete Confirmation
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        This action cannot be undone. Are you sure you want to
                        delete this?
                      </p>
                    </div>

                    <div className="mt-4">
                      <button
                        type="button"
                        className="inline-flex justify-center py-2 px-3 rounded bg-red-500 hover:bg-red-200 text-white hover:text-red-500"
                        onClick={handleDelete}
                      >
                        Yes! Delete
                      </button>
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

export default MyClassCard;
