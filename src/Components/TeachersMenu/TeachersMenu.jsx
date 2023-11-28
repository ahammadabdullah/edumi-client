import React from "react";
import MenuItem from "../Dashboard/MenuItem";
import { FaUserCog } from "react-icons/fa";

const TeachersMenu = () => {
  return (
    <div>
      <MenuItem
        label={"My Classes"}
        icon={FaUserCog}
        address={"/dashboard/my-classes"}
      />
      <MenuItem
        label={"Add Class"}
        icon={FaUserCog}
        address={"/dashboard/add-class"}
      />
    </div>
  );
};

export default TeachersMenu;
