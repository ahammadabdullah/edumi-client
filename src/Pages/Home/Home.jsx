import React from "react";
import Banner from "./Banner";
import FeaturedClass from "./FeaturedClass";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        {" "}
        <title>Home | Edumi</title>{" "}
      </Helmet>
      <Banner />
      <FeaturedClass />
    </div>
  );
};

export default Home;
