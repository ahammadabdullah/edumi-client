import React from "react";
import MenuItem from "../Dashboard/MenuItem";
import { FaUserCog, FaUsers } from "react-icons/fa";
import { SiGoogleclassroom } from "react-icons/si";

const AdminMenu = () => {
  return (
    <div>
      <MenuItem
        label={"All Classes"}
        icon={SiGoogleclassroom}
        address={"/dashboard/all-classes"}
      />
      <MenuItem
        label={"All Users"}
        icon={FaUsers}
        address={"/dashboard/all-users"}
      />
      <MenuItem
        label={"Teacher Requests"}
        icon={FaUserCog}
        address={"/dashboard/teacher-requests"}
      />
    </div>
  );
};

export default AdminMenu;
