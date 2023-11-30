import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { Helmet } from "react-helmet";
import image from "../../assets/teacher.png";
const TeachOnEdumi = () => {
  const queryClient = useQueryClient();
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const navigate = useNavigate();

  const addRequest = async (teacherDetails) => {
    const res = await axiosSecure.post("/teachonedumi", teacherDetails);
    return res.data;
  };

  const { mutateAsync } = useMutation({
    mutationFn: async (teacherDetails) => {
      const res = await axiosSecure.post("/teachonedumi", teacherDetails);
      return res.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries("teacherRequests");
    },
  });

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
    try {
      const result = await mutateAsync(teacherDetails);
      if (result.insertedId) {
        toast.success("Request Submitted Successfully");
        navigate("/");
        return;
      } else {
        toast.error("Something went wrong");
      }
    } catch (error) {
      toast.error("Something went wrong");
    }
    // const { data: res } = await axiosSecure.post(
    //   "/teachonedumi",
    //   teacherDetails
    // );
    // if (res.insertedId) {
    //   toast.success("Request Submitted Successfully");
    //   navigate("/");
    //   return;
    // }
    // toast.error("Something went wrong");
  };
  const { data: isExist, isLoading } = useQuery({
    queryKey: ["teacher"],
    queryFn: async () => {
      const { data } = await axiosSecure.get(`/teacher/${user?.email}`);
      return data;
    },
  });
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
      <Helmet>
        <title>Teach On Edumi | Edumi</title>
      </Helmet>
      <h3 className="text-center text-2xl md:text-3xl lg:text-5xl">
        Want to Be a teacher ?{" "}
      </h3>
      <div className="flex items-center gap-10 lg:my-20 flex-col md:flex-row">
        <div className="w-1/2">
          <img src={image} alt="" />
        </div>
        <div className="flex justify-center w-1/2 ">
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
            <select
              {...register("experience")}
              className="mt-4"
              id="experience"
            >
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
    </div>
  );
};

export default TeachOnEdumi;
