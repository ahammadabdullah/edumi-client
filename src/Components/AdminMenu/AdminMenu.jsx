import React from "react";
import MenuItem from "../Dashboard/MenuItem";
import { FaUserCog } from "react-icons/fa";

const AdminMenu = () => {
  return (
    <div>
      <MenuItem
        label={"All Users"}
        icon={FaUserCog}
        address={"/dashboard/all-users"}
      />
    </div>
  );
};

export default AdminMenu;
