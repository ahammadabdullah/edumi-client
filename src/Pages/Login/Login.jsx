import { IoLogoGoogle } from "react-icons/io5";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import useAuth from "../../Hooks/useAuth";
import { Helmet } from "react-helmet";
import { saveUser } from "../../Api/api";
import { useForm } from "react-hook-form";
import { ImSpinner9 } from "react-icons/im";

const Login = () => {
  const { googleLogin, signInWithEmailPass, loading } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const { register, handleSubmit } = useForm();

  const handleGoogleLogin = async () => {
    try {
      const result = await googleLogin();
      // set user to the data base
      const res = await saveUser(result.user);
      toast.success("Successfully logged in");
      navigate(location?.state ? location.state : "/home");
      console.log(res);
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleEmailLogin = async (data) => {
    const email = data.email;
    const password = data.password;
    signInWithEmailPass(email, password)
      .then(() => {
        toast.success("Successfully logged in");
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  return (
    <div className="bg-base-300 min-h-screen ">
      <Helmet>
        <title>Login</title>
      </Helmet>
      <div className="max-w-7xl mx-auto py-20">
        <div
          data-aos="fade-down"
          data-aos-duration="2000"
          className="md:w-2/4 w-[90%] bg-white text-center mx-auto"
        >
          <div className="w-3/4  mx-auto">
            {location?.state ? (
              <h3 className="text-3xl font-bold pt-20 pb-10 text-primary">
                You need to login first
              </h3>
            ) : (
              <h3 className="text-3xl font-bold pt-20 pb-10 text-primary">
                Login to your account
              </h3>
            )}

            <hr />
            <form onSubmit={handleSubmit(handleEmailLogin)} className="pt-10">
              <label className="block text-left">Email Address</label>
              <input
                {...register("email")}
                className="w-full bg-gray-100 py-5 pl-5 my-4 text-primary focus:border-primary  focus:outline-primary "
                type="email"
                name="email"
                placeholder="Email"
                required
              />
              <label className="block text-left">Password</label>
              <input
                {...register("password")}
                required
                className="w-full bg-gray-100 py-5 pl-5 my-4 text-primary focus:border-primary  focus:outline-primary"
                type="password"
                name="password"
                placeholder="Password"
              />

              <button
                className="btn hover:bg-blue-200 hover:border-blue-500 hover:text-blue-500 rounded-none w-full bg-blue-500 hover:border-2 hover:font-semibold  py-4 text-white my-4"
                type="submit"
              >
                {loading ? (
                  <ImSpinner9 className="m-auto animate-spin" size={24} />
                ) : (
                  "Login"
                )}
              </button>
            </form>
            <p className="pb-8">
              Dont’t Have An Account ?{" "}
              <Link
                state={location.state}
                to={"/register"}
                className=" font-bold hover:text-blue-500"
              >
                Register
              </Link>
            </p>

            <p className="border-t-2 w-[50%] mx-auto border-primary pt-8 py-5">
              Continue With
            </p>
            <div className="pb-8">
              <button
                onClick={handleGoogleLogin}
                className="w-full py-4 flex items-center justify-center gap-3 border-2  bg-blue-200 hover:border-blue-500 hover:text-blue-500 rounded-none  hover:border-2 hover:font-semibold "
              >
                {" "}
                <IoLogoGoogle /> <span className="font-bold">Google</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
