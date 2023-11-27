import { useState } from "react";
import Logo from "../../Components/Logo";
import useAuth from "../../Hooks/useAuth";
import { GrLogout } from "react-icons/gr";
import { FcSettings } from "react-icons/fc";
import { AiOutlineBars } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";
import MenuItem from "../../Components/Dashboard/MenuItem";
import StudentsMenu from "../../Components/StudentsMenu/StudentsMenu";
import TeachersMenu from "../../Components/TeachersMenu/TeachersMenu";
import AdminMenu from "../../Components/AdminMenu/AdminMenu";
import { useNavigate } from "react-router-dom";
// import MenuItem from './MenuItem'
const Sidebar = () => {
  const { logOut } = useAuth();
  const [isActive, setActive] = useState(false);
  const navigate = useNavigate();
  // const [role] = useRole();

  //   For guest/host menu item toggle button

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive);
  };
  const handleLogout = () => {
    logOut().then(() => {
      navigate("/home");
    });
  };
  return (
    <div>
      <>
        {/* Small Screen Navbar */}
        <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
          <div>
            <div className="block cursor-pointer p-4 font-bold">
              <Logo />
            </div>
          </div>

          <button
            onClick={handleToggle}
            className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
          >
            <AiOutlineBars className="h-5 w-5" />
          </button>
        </div>

        {/* Sidebar */}
        <div
          className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
            isActive && "-translate-x-full"
          }  md:translate-x-0  transition duration-200 ease-in-out`}
        >
          <div>
            <div>
              <div className="w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-blue-100 mx-auto">
                <Logo />
              </div>
            </div>

            {/* Nav Items */}
            <div className="flex flex-col justify-between flex-1 mt-6">
              <nav>
                <MenuItem
                  icon={BsGraphUp}
                  label="Statistics"
                  address="/dashboard"
                />
                <StudentsMenu />
                <TeachersMenu />
                <AdminMenu />
                {/* Host Menu Items */}
                {/* {role === "guest" && <GuestMenu />}
                {role === "host" ? toggle ? <HostMenu /> : <GuestMenu /> : ""}
                {role === "admin" && <AdminMenu />} */}
              </nav>
            </div>
          </div>

          <div>
            <hr />

            <MenuItem
              icon={FcSettings}
              label="Profile"
              address="/dashboard/profile"
            />
            <button
              onClick={handleLogout}
              className="flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform"
            >
              <GrLogout className="w-5 h-5" />

              <span className="mx-4 font-medium">Logout</span>
            </button>
          </div>
        </div>
      </>
    </div>
  );
};

export default Sidebar;
