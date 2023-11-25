import React from "react";

const ClassCard = ({ item }) => {
  console.log(item);
  const { title, name, price, image, shortDescription, totalEnrollment } = item;
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
        <p>{shortDescription}</p>
      </div>
      <div className="flex justify-center">
        <button className="btn py-1 px-2 text-white bg-blue-700">
          Enroll Now
        </button>
      </div>
    </div>
  );
};

export default ClassCard;
