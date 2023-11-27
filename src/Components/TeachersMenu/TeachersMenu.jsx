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
    </div>
  );
};

export default TeachersMenu;
