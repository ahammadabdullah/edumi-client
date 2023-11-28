import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const AddClass = () => {
  const { user } = useAuth();
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();
  const onSubmit = async (data) => {
    const info = {
      name: user.displayName,
      email: user.email,
      title: data.title,
      description: data.description,
      price: parseFloat(data.price),
      image: data.imageURL,
      status: "pending",
    };
    const { data: res } = await axiosSecure.post("/addclass", info);
    console.log(res);
    if (res.insertedId) {
      toast.success("Class Added Successfully");
      reset();
      navigate("/dashboard/my-classes");
    } else {
      toast.error("Something went wrong");
    }
  };
  return (
    <div>
      <Helmet>
        <title>Dashboard | Add Class</title>
      </Helmet>
      <h3 className="text-3xl text-center">Add Class</h3>
      <div className="flex justify-center mt-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-3 w-[300px]">
            <label htmlFor="title"></label>
            <input
              {...register("title")}
              className="w-full"
              placeholder="Title"
              type="text"
              name="title"
            />
          </div>
          <div className="mt-3 w-[300px]">
            <label htmlFor="Price"></label>
            <input
              {...register("price")}
              className="w-full"
              placeholder="Price"
              type="number"
              name="price"
            />
          </div>
          <div className="mt-3 w-[300px]">
            <label htmlFor="description"></label>
            <input
              {...register("description")}
              className="w-full"
              placeholder="Description"
              type="text"
              name="description"
            />
          </div>
          <div className="mt-3 w-[300px]">
            <label htmlFor="imageURL"></label>
            <input
              {...register("imageURL")}
              className="w-full"
              placeholder="Image URL"
              type="text"
              name="imageURL"
            />
          </div>
          <div className="mt-4 flex justify-center">
            <button
              className="btn py-2 px-3 rounded text-white bg-blue-500 hover:bg-blue-200 hover:text-blue-500"
              type="submit"
            >
              {" "}
              Add Class
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddClass;
