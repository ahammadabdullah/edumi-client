import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { toast } from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import auth from "../../config/config.firebase";
import { Helmet } from "react-helmet";

const Register = () => {
  const { createAccWithEmailPass } = useAuth();
  const navigate = useNavigate();
  // eslint-disable-next-line no-useless-escape
  const passRegex = /^(?=.*[A-Z])(?=.*[!@#\$%\^&\*])(?=.{6,})/;
  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const name = e.target.name.value;
    const photoURL = e.target.photo.value;

    // if (!passRegex.test(password)) {
    //   toast.error(
    //     "Passwords  must have 6 characters , a Upper Case character and special characters "
    //   );
    //   return;
    // }
    createAccWithEmailPass(email, password, name, photoURL)
      .then(() =>
        updateProfile(auth.currentUser, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => {
            toast.success("Successfully account created");
            navigate(location?.state ? location.state : "/");
          })
          .catch((err) => toast.error(err.message))
      )
      .catch((err) => toast.error(err.message));
  };

  return (
    <div>
      <div className="bg-base-300  ">
        <Helmet>
          <title>Register</title>
        </Helmet>
        <div className="max-w-7xl mx-auto pt-20">
          <div className="pb-20">
            <div className="md:w-2/4 w-[90%] bg-white text-center mx-auto ">
              <div className="w-3/4 mx-auto">
                <h3 className="text-3xl font-bold pt-20 pb-10 text-primary">
                  Register your account
                </h3>
                <hr />
                <form onSubmit={handleRegister} className="pt-10">
                  <label className="block text-left">Your Name</label>
                  <input
                    className="w-full bg-gray-100 py-5 pl-5 my-4 focus:outline-primary text-primary"
                    type="text"
                    name="name"
                    placeholder="Your Name"
                  />
                  <label className="block text-left">photo URL</label>
                  <input
                    className="w-full bg-gray-100 py-5 pl-5 my-4 focus:outline-primary text-primary"
                    type="text"
                    name="photo"
                    placeholder="photo URL"
                  />
                  <label className="block text-left">Email Address</label>
                  <input
                    className="w-full bg-gray-100 py-5 pl-5 my-4 focus:outline-primary text-primary"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                  />
                  <label className="block text-left">Password</label>
                  <input
                    className="w-full bg-gray-100 py-5 pl-5 my-4 focus:outline-primary text-primary"
                    type="password"
                    name="password"
                    placeholder="Password"
                    required
                  />
                  <input
                    className="btn hover:bg-secondary rounded-none w-full bg-primary text-white py-4  my-4"
                    type="submit"
                    value="Register"
                  />
                </form>
                <p className="py-8">
                  Already Have An Account ?{" "}
                  <Link to={"/login"} className=" font-bold text-primary">
                    Login Here
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
