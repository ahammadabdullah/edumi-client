import { useEffect } from "react";
import Banner from "./Banner";
import FeaturedClass from "./FeaturedClass";
import { Helmet } from "react-helmet";
import Faq from "./Faq";
import WhyUs from "./WhyUs";
import BeInstructor from "./BeInstructor";
import NewsLetter from "./NewsLetter";
import Aos from "aos";
import "aos/dist/aos.css";
import Partners from "./Partners";
const Home = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div>
      <Helmet>
        {" "}
        <title>Home | Edumi</title>{" "}
      </Helmet>
      <Banner />
      <Partners />
      <FeaturedClass />
      <WhyUs />
      <BeInstructor />
      <Faq />
      <NewsLetter />
    </div>
  );
};

export default Home;
