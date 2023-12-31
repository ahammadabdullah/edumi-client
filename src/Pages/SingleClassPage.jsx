import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import useAxiosSecure from "../Hooks/useAxiosSecure";
import PaymentModal from "../Components/Modals/PaymentModal";
import { useEffect, useState } from "react";
import useAuth from "../Hooks/useAuth";
import { Helmet } from "react-helmet";
import Loader from "../Components/Loader";

const SingleClassPage = () => {
  const { user, loading } = useAuth();
  const [isEnrolled, setIsEnrolled] = useState(false);
  let [isOpen, setIsOpen] = useState(false);
  const closeModal = () => {
    setIsOpen(false);
  };
  const { id } = useParams();
  const axiosSecure = useAxiosSecure();
  const {
    data: item,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["singleClass"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allclasses/${id}`);
      return res.data;
    },
  });
  useEffect(() => {
    axiosSecure
      .get(`/enrolledclasses/${id}?email=${user?.email}`)
      .then((res) => {
        if (res.data) {
          setIsEnrolled(true);
        }
      });
  }, [id, user?.email]);
  if (isLoading || loading) {
    return <Loader />;
  }
  const classInfo = {
    classId: item?._id,
    title: item?.title,
    name: item?.name,
    price: item?.price,
    image: item?.image,
    studentName: user?.displayName,
    studentEmail: user?.email,
  };

  return (
    <div className="max-w-7xl mx-auto mt-5 space-y-3 mb-20 px-10 ">
      <Helmet>
        <title>Class Details | Edumi</title>
      </Helmet>
      <img className="w-full" src={item?.image} alt="" />
      <h3 className="text-3xl md:text-4xl lg:text-5xl">{item?.title}</h3>
      <h4 className="text-xl md:text-2xl lg:text-3xl">
        Instructor: {item?.name}
      </h4>
      <div className="flex gap-5 text-md md:text-xl lg:text-2xl">
        <p>Price: {item?.price}$ </p>
        <p>Already Enrolled: {item?.totalEnrollment}</p>
      </div>
      <p className="text-xl">{item?.description}</p>
      <button
        disabled={isEnrolled}
        onClick={() => setIsOpen(true)}
        className={`btn py-2 px-3 text-white  bg-blue-500 hover:bg-blue-200 hover:text-blue-500 hover:font-semibold rounded ${
          isEnrolled && "!bg-blue-300"
        } `}
      >
        Enroll Now
      </button>
      <PaymentModal
        refetch={refetch}
        closeModal={closeModal}
        isOpen={isOpen}
        classInfo={classInfo}
      />
    </div>
  );
};

export default SingleClassPage;
