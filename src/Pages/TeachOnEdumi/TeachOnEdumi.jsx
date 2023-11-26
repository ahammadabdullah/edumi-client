import { useForm } from "react-hook-form";
import useAuth from "../../Hooks/useAuth";

const TeachOnEdumi = () => {
  const { register, handleSubmit } = useForm();
  const { user } = useAuth();

  const onSubmit = (data) => {
    console.log(data);
  };

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
