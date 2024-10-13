import React, { useContext } from "react";
import { AdminContext } from "../context/AdminContext";
import { NavLink } from "react-router-dom";
import HomeIcon from "../assets/home_icon.svg";
import PeopleIcon from "../assets/people_icon.svg";

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);

  return (
    <div className="min-h-screen bg-white borer-r">
      {aToken && (
        <ul className="text-[#515151] mt-5 ">
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#F2FFF3] border-r-4 border-primary" : ""
              }`
            }
            to={"/admin-dashboard"}
          >
            <img src={HomeIcon} alt="" /> <p>Dashboard</p>
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              `flex items-center gap-3 py-3.5 px-3 md:px-9 md:min-w-72 cursor-pointer ${
                isActive ? "bg-[#F2FFF3] border-r-4 border-primary" : ""
              }`
            }
            to={"/admin-crop-prediction"}
          >
            <img src={PeopleIcon} alt="" /> <p>Crop Prediction</p>
          </NavLink>
        </ul>
      )}
    </div>
  );
};

export default Sidebar;
