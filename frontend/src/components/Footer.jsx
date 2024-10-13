import React from "react";
import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* Left Section */}
        <div>
          <img className="mb-5 w-40" src={Logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            We are dedicated to maintaining crop growth in sustainable
            agriculture with innovation and ethical practices.Dive into the
            annual essence of Genetics, where every year unfolds a new chapter
            of commitment illuminated by insightful data.
          </p>
        </div>
        {/* Center Section */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* Right Section */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>+91 82135 61478</li>
            <li>needlesscat9763@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2024@ AgriHub - All Right Reserved | NeedlessCat
        </p>
      </div>
    </div>
  );
};

export default Footer;
