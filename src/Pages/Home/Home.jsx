import React from "react";
import Banner from "./Banner";
import FeaturedClass from "./FeaturedClass";
import { Helmet } from "react-helmet";
import Faq from "./Faq";
import WhyUs from "./WhyUs";
import BeInstructor from "./BeInstructor";
import NewsLetter from "./NewsLetter";

const Home = () => {
  return (
    <div>
      <Helmet>
        {" "}
        <title>Home | Edumi</title>{" "}
      </Helmet>
      <Banner />
      <FeaturedClass />
      <WhyUs />
      <BeInstructor />
      <Faq />
      <NewsLetter />
    </div>
  );
};

export default Home;
