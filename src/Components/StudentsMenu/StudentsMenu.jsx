import React from "react";
import { FaUserCog } from "react-icons/fa";
import MenuItem from "../Dashboard/MenuItem";

const StudentsMenu = () => {
  return (
    <>
      <MenuItem icon={FaUserCog} label="My Orders" address="my-orders" />
    </>
  );
};

export default StudentsMenu;
