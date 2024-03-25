import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MenuIcon = ({ onClick }) => {
  return (
    <div className="cursor-pointer" onClick={onClick}>
      <FontAwesomeIcon icon={faBars} size="2x" className="text-white" />
    </div>
  );
};

export default MenuIcon;
