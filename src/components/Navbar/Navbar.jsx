import React from "react";
import { styles } from "../../styles";
import MenuIcon from "./MenuIcon";
import MobileMenu from "./MobileMenu";
import { useMenuState } from "./useMenuState";
import { useWindowSize } from "./useWindowSize";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { showMenu, handleMenuClick } = useMenuState();
  const { width } = useWindowSize();

  return (
    <nav
      className={`${styles.padding} ${styles.heroParagraphText} flex justify-end items-center`}
    >
      {width <= 500 ? (
        <>
          {showMenu && <MobileMenu onClick={handleMenuClick} />}
          {!showMenu && <MenuIcon onClick={handleMenuClick} />}
        </>
      ) : (
        <div className="flex items-center">
          <Link
            to="/about"
            className="mr-6 hover:text-white transition-colors duration-300"
            onClick={handleMenuClick}
          >
            About
          </Link>
          <Link
            to="/experience"
            className="mr-6 hover:text-white transition-colors duration-300"
            onClick={handleMenuClick}
          >
            Experience
          </Link>
          <Link
            to="/projects"
            className="mr-6 hover:text-white transition-colors duration-300"
            onClick={handleMenuClick}
          >
            Projects
          </Link>
          <Link
            to="/contact"
            className="hover:text-white transition-colors duration-300"
            onClick={handleMenuClick}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
