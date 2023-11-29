import React from "react";
import { FaBookReader, FaUserCog } from "react-icons/fa";
import MenuItem from "../Dashboard/MenuItem";
import { VscListUnordered } from "react-icons/vsc";

const StudentsMenu = () => {
  return (
    <>
      <MenuItem
        icon={FaBookReader}
        label="My Enrolled Classes"
        address="/dashboard/my-enrolled-classes"
      />
      <MenuItem
        icon={VscListUnordered}
        label="My Orders"
        address="/dashboard/my-orders"
      />
    </>
  );
};

export default StudentsMenu;
