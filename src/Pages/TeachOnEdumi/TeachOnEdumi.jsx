import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const TeachOnEdumi = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const { data: isExist, isLoading } = useQuery({
    queryKey: ["teacher"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/teacher/${user?.email}`);
      return data;
    },
  });
  console.log(isExist);
  const onSubmit = async (data) => {
    console.log(data);
    const teacherDetails = {
      userId: user?._id,
      name: data.name,
      email: user?.email,
      image: data.image,
      experience: data.experience,
      category: data.category,
      status: "pending",
    };
    const { data: res } = await axiosSecure.post(
      "/teachonedumi",
      teacherDetails
    );
    if (res.insertedId) {
      toast.success("Request Submitted Successfully");
      navigate("/");
      return;
    }
    toast.error("Something went wrong");
  };
  if (isLoading) {
    return <div className="text-center">Loading</div>;
  }
  if (isExist.status === "pending") {
    return (
      <div className="text-center min-h-screen flex w-full justify-center items-center">
        <h3 className="text-3xl">
          Your Request is already Submitted. Wait for admin review.
        </h3>
      </div>
    );
  }
  return (
    <div className="mt-5 mb-10 max-w-7xl mx-auto">
      <h3 className="text-center text-2xl md:text-3xl lg:text-5xl">
        Want to Be a teacher ?{" "}
      </h3>
      <div className="flex justify-center pt-10">
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="name">Name: </label>
          <input
            {...register("name")}
            type="text"
            defaultValue={user?.displayName}
            name="name"
            id="name"
            placeholder="Your Name"
          />
          <br />
          <label htmlFor="image">Image: </label>
          <input
            {...register("image")}
            className="mt-4"
            type="text"
            defaultValue={user?.photoURL}
            name="image"
            id="image"
            placeholder="Your image Link"
          />
          <br />
          <label htmlFor="experience">Experience: </label>
          <select {...register("experience")} className="mt-4" id="experience">
            Experience
            <option value="beginner">beginner</option>
            <option value="experienced">experienced</option>
            <option value="some idea">some idea</option>
          </select>
          <br />
          <label htmlFor="category">Category: </label>
          <select {...register("category")} className="mt-4" id="category">
            Experience
            <option value="web development">web development</option>
            <option value="digital marketing">digital marketing</option>
            <option value="Self Development">Self Development</option>
            <option value="Blockchain">Blockchain</option>
            <option value="MS Office">MS Office</option>
          </select>
          <br />
          <input
            type="submit"
            className="btn py-2 px-3 mt-10 text-white bg-blue-600"
            value="Submit For Review"
          />
        </form>
      </div>
    </div>
  );
};

export default TeachOnEdumi;
