import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import "./styles/MenuIcon.css";

const MenuIcon = ({ isMenuOpen, toggleMenu }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <FontAwesomeIcon
      icon={isMenuOpen ? faTimes : faBars}
      className={`text-white text-4xl cursor-pointer ${
        isMenuOpen ? "rotate" : clicked ? "rotateBack" : ""
      }`}
      onClick={() => {
        setClicked(true);
        toggleMenu();
      }}
    />
  );
};

export default MenuIcon;
