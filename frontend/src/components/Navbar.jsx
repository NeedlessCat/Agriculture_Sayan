import React, { useContext, useState } from "react";
import Logo from "../assets/logo.png";
import ProfileLogo from "../assets/profile_logo.png";
import DropDown from "../assets/dropdown_icon.svg";
import MenuIcon from "../assets/menu_icon.svg";
import Cross from "../assets/cross_icon.png";
import { NavLink, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);
  const { token, setToken } = useContext(AppContext);

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
  };

  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400">
      <img
        onClick={() => navigate("/")}
        className="w-44 cursor-pointer"
        src={Logo}
        alt=""
      />

      <div className="hidden md:inline-flex bg-[#f5f5f0] py-2 px-4 rounded-full gap-6 text-sm">
        <NavLink
          to="/"
          className="text-[#3d7d3d] font-medium hover:text-[#2c5c2c] transition-colors"
        >
          HOME
        </NavLink>
        <NavLink
          to={"/about"}
          className="text-gray-600 hover:text-[#3d7d3d] transition-colors"
        >
          ABOUT
        </NavLink>
        <NavLink
          to="/crop-recommendation"
          className="text-gray-600 hover:text-[#3d7d3d] transition-colors"
        >
          CROP RECOMMENDATION
        </NavLink>
        <NavLink
          to="/contact"
          className="text-gray-600 hover:text-[#3d7d3d] transition-colors"
        >
          CONTACT
        </NavLink>
      </div>

      <div className="flex items-center">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img className="w-8 rounded-full" src={ProfileLogo} alt="" />
            <img className="w-2.5" src={DropDown} alt="" />
            <div className="absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block">
              <div className="min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4">
                <p onClick={logout} className="hover:text-black cursor-pointer">
                  Logout
                </p>
              </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate("/login")}
            className="bg-primary2 text-white px-8 py-3 rounded-full font-light hidden md:block"
          >
            Create Account
          </button>
        )}
        <img
          onClick={() => setShowMenu(true)}
          className="w-6 md:hidden"
          src={MenuIcon}
          alt=""
        />
        {/* Mobile Menu */}
        <div
          className={`${
            showMenu ? "fixed w-full" : "h-0 w-0"
          } md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}
        >
          <div className="flex items-center justify-between px-5 py-6">
            <img className="w-36" src={Logo} alt="" />
            <img
              className="w-7"
              onClick={() => setShowMenu(false)}
              src={Cross}
              alt=""
            />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-medium">
            <NavLink onClick={() => setShowMenu(false)} to="/">
              <p className="px-4 py-2 rounded inline-block">HOME</p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/about">
              <p className="px-4 py-2 rounded inline-block">ABOUT</p>
            </NavLink>
            <NavLink
              onClick={() => setShowMenu(false)}
              to="/crop-recommendation"
            >
              <p className="px-4 py-2 rounded inline-block">
                CROP RECOMMENDATION{" "}
              </p>
            </NavLink>
            <NavLink onClick={() => setShowMenu(false)} to="/contact">
              <p className="px-4 py-2 rounded inline-block">CONTACT</p>
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// import React, { useState } from "react";
// import Logo from "../assets/logo.png";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <div className="relative">
//       <div className="flex items-center justify-between text-sm py-4">
//         <img className="w-44 cursor-pointer" src={Logo} alt="" />

//         {/* Desktop Navigation */}
//         <nav className="hidden md:inline-flex bg-[#f5f5f0] py-2 px-4 rounded-full gap-6 text-sm">
//           <NavLink className="text-[#3d7d3d] font-medium hover:text-[#2c5c2c] transition-colors">
//             HOME
//           </NavLink>
//           <NavLink className="text-gray-600 hover:text-[#3d7d3d] transition-colors">
//             ABOUT
//           </NavLink>
//           <NavLink className="text-gray-600 hover:text-[#3d7d3d] transition-colors">
//             CROP RECOMMENDATION
//           </NavLink>
//           <NavLink className="text-gray-600 hover:text-[#3d7d3d] transition-colors">
//             CONTACT
//           </NavLink>
//         </nav>

//         <button className="bg-primary2 text-white px-8 py-3 rounded-full font-light hidden md:block">
//           Create Account
//         </button>

//         {/* Mobile Menu Button */}
//         <button
//           className="md:hidden p-2"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={1.5}
//             stroke="currentColor"
//             className="w-6 h-6"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d={
//                 isMenuOpen
//                   ? "M6 18L18 6M6 6l12 12"
//                   : "M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
//               }
//             />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ease-in-out ${
//           isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
//         }`}
//       >
//         <nav className="flex flex-col p-4">
//           <NavLink className="py-2 text-[#3d7d3d] font-medium hover:text-[#2c5c2c] transition-colors">
//             HOME
//           </NavLink>
//           <NavLink className="py-2 text-gray-600 hover:text-[#3d7d3d] transition-colors">
//             ABOUT
//           </NavLink>
//           <NavLink className="py-2 text-gray-600 hover:text-[#3d7d3d] transition-colors">
//             CROP RECOMMENDATION
//           </NavLink>
//           <NavLink className="py-2 text-gray-600 hover:text-[#3d7d3d] transition-colors">
//             CONTACT
//           </NavLink>
//           <button className="mt-4 bg-primary2 text-white px-8 py-3 rounded-full font-light w-full">
//             Create Account
//           </button>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
