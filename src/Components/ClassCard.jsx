import React from "react";
import { Link } from "react-router-dom";

const ClassCard = ({ item }) => {
  const { _id, title, name, price, image, description, totalEnrollment } =
    item || {};
  return (
    <div className="w-[300px] mx-auto flex flex-col justify-between">
      <div>
        <img src={image} alt="" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>Instructor: {name}</p>
        <div className="flex justify-between">
          <p>Price: {price}$</p>
          <p>Enrolled: {totalEnrollment}</p>
        </div>
        <p>{description}</p>
      </div>
      <div className="flex justify-center">
        <button className="btn py-1 px-2 text-white bg-blue-700">
          <Link to={`/allclasses/${_id}`}>Enroll Now</Link>
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
