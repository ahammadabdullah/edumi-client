import image1 from "../../assets/coursera.png";
import image2 from "../../assets/udemy.png";
import image3 from "../../assets/png-transparent-microsoft-logo-microsoft-thumbnail.png";
const Partners = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto mt-10">
        <h3 className="text-3xl text-center py-10">Partners</h3>
        <div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="flex flex-col md:flex-row items-center justify-center "
          >
            <img className="h-[150px] w-[200px]" src={image2} alt="" />
            <h3 className=" md:w-1/2 px-10">
              Udemy, a renowned online learning platform, collaborates with us
              to offer a diverse range of courses. Together, we provide learners
              with access to top-notch educational resources, fostering
              continuous growth and skill development.
            </h3>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="flex flex-col md:flex-row items-center justify-center  "
          >
            <img className="h-[150px] w-[200px]" src={image1} alt="" />
            <h3 className=" md:w-1/2 px-10">
              Coursera, a renowned online learning platform, collaborates with
              us to empower learners globally. Together, we bring a myriad of
              courses taught by industry experts, fostering a dynamic and
              accessible learning environment. Join us on Coursera to embark on
              a journey of knowledge acquisition and skill enhancement.
            </h3>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="flex flex-col md:flex-row items-center justify-center "
          >
            <img className="h-[150px] w-[200px]" src={image3} alt="" />
            <h3 className=" md:w-1/2 px-10">
              Microsoft, a technology giant, joins forces with us to catalyze
              digital transformation. Through our partnership, we leverage
              Microsoft's expertise to enhance our platform, providing users
              with cutting-edge tools and technologies for success.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
