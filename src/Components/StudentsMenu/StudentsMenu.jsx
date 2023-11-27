import React from "react";
import { FaUserCog } from "react-icons/fa";
import MenuItem from "../Dashboard/MenuItem";

const StudentsMenu = () => {
  return (
    <>
      <MenuItem
        icon={FaUserCog}
        label="My Enrolled Classes"
        address="/dashboard/my-enrolled-classes"
      />
      <MenuItem
        icon={FaUserCog}
        label="My Orders"
        address="/dashboard/my-orders"
      />
    </>
  );
};

export default StudentsMenu;
