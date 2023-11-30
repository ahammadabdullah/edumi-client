import { Link } from "react-router-dom";
import image from "../../assets/instructor.jpg";
const BeInstructor = () => {
  return (
    <div className="max-w-7xl mx-auto my-20 px-6">
      <div className="flex flex-col md:flex-row justify-center items-center gap-10">
        <div
          data-aos="fade-up"
          data-aos-duration="2000"
          className="md:w-1/2  flex md:justify-end "
        >
          <img className="lg:w-[80%] rounded-md" src={image} alt="" />
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className="md:w-1/2">
          <h3 className="text-3xl lg:mb-6">Become An Instructor</h3>
          <p className="md:w-2/3 lg:mb-10 mb-3">
            At Edumi, we believe in the power of knowledge-sharing, and we
            invite passionate individuals to join our community of instructors.
            Whether you're an expert in a specific field, a seasoned
            professional, or a skilled practitioner, we welcome you to become
            part of our educational platform.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link
              to={"/teachonedumi"}
              className=" py-2 px-4 rounded-md bg-blue-500 text-white hover:bg-blue-200 hover:text-blue-500"
            >
              {" "}
              Start Teaching Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeInstructor;
