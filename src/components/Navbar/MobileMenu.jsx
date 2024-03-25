import React from "react";
import { Link } from "react-router-dom";

const MobileMenu = ({ onClick }) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-100 flex justify-center items-center menu-animation"
      onClick={onClick}
    >
      <ul className="text-white text-2xl">
        <li className="my-4">
          <Link to="/about" onClick={onClick}>
            About
          </Link>
        </li>
        <li className="my-4">
          <Link to="/experience" onClick={onClick}>
            Experience
          </Link>
        </li>
        <li className="my-4">
          <Link to="/projects" onClick={onClick}>
            Projects
          </Link>
        </li>
        <li className="my-4">
          <Link to="/contact" onClick={onClick}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
