import React from "react";
import MenuItem from "../Dashboard/MenuItem";
import { FaUserCog } from "react-icons/fa";

const AdminMenu = () => {
  return (
    <div>
      <MenuItem
        label={"All Classes"}
        icon={FaUserCog}
        address={"/dashboard/all-classes"}
      />
      <MenuItem
        label={"All Users"}
        icon={FaUserCog}
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
