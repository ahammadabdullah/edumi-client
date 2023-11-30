import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://edumi-blush.vercel.app/",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
