import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../../styles";

const MenuItem = ({ text, link, onClick }) => {
  const handleClick = () => {
    onClick();
  };

  return (
    <div className="w-full">
      <Link
        to={link}
        className={`block my-4 hover:text-white transition-colors duration-300 ${styles.navMobileText}`}
        onClick={handleClick}
      >
        {text}
      </Link>
    </div>
  );
};

export default MenuItem;
