import React from "react";
import MenuItem from "../Dashboard/MenuItem";
import { FaUserCog } from "react-icons/fa";
import { GiTeacher } from "react-icons/gi";
import { PiChalkboardTeacherFill } from "react-icons/pi";

const TeachersMenu = () => {
  return (
    <div>
      <MenuItem
        label={"My Classes"}
        icon={GiTeacher}
        address={"/dashboard/my-classes"}
      />
      <MenuItem
        label={"Add Class"}
        icon={PiChalkboardTeacherFill}
        address={"/dashboard/add-class"}
      />
    </div>
  );
};

export default TeachersMenu;
