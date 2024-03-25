import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ children, to, onClick }) => {
  return (
    <li className="my-4">
      <Link to={to} className="text-white text-2xl" onClick={onClick}>
        {children}
      </Link>
    </li>
  );
};

export default MenuItem;
