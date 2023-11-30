import { useQuery } from "@tanstack/react-query";
import about from "../../assets/about.jpg";
import achieve1 from "../../assets/achive-1.png";
import achieve2 from "../../assets/achive-2.png";
import achieve3 from "../../assets/achive-3.png";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
const WhyUs = () => {
  const axiosPublic = useAxiosPublic();
  const { data: statistics } = useQuery({
    queryKey: ["statistics"],
    queryFn: async () => {
      const res = await axiosPublic.get("/statistics");
      return res.data;
    },
  });
  return (
    <div className="bg-gray-200 mt-10 ">
      <div className="max-w-7xl mx-auto pt-20 pb-20">
        <h3 className="text-3xl text-center font-semibold pb-10"> Why Us ?</h3>
        <div className="flex flex-col items-center justify-center gap-20 md:flex-row">
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="md:w-1/2 flex flex-col items-end  justify-center gap-10 mx-auto"
          >
            <div className="bg-white rounded w-fit p-8">
              <div className="flex items-center gap-8">
                <div className="bg-blue-200 flex items-center rounded-full p-5">
                  <img src={achieve1} alt="" />
                </div>

                <div className="flex flex-col items-center">
                  <h3 className="font-semibold text-2xl">
                    {statistics?.totalUser}
                  </h3>
                  <p className="w-[122px]">Total User</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded w-fit p-8">
              <div className="flex items-center gap-8">
                <div className="bg-blue-200 flex items-center rounded-full p-5">
                  <img src={achieve2} alt="" />
                </div>

                <div className="flex flex-col items-center">
                  <h3 className="font-semibold text-2xl">
                    {statistics?.totalClasses}
                  </h3>
                  <p className="w-[122px]">Total Classes</p>
                </div>
              </div>
            </div>
            <div className="bg-white rounded w-fit p-8">
              <div className="flex items-center gap-8">
                <div className="bg-blue-200 flex items-center rounded-full p-5">
                  <img src={achieve3} alt="" />
                </div>

                <div className="flex flex-col items-center">
                  <h3 className="font-semibold text-2xl">
                    {statistics?.totalEnrollment}
                  </h3>
                  <p className="w-[122px]">Total Enrollment</p>
                </div>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="md:w-1/2 rounded hidden md:block h-[530px] md:pr-10"
          >
            <img className="h-full rounded" src={about} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyUs;
