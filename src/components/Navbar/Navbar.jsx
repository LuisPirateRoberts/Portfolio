import React from "react";
import { Link } from "react-router-dom";
import { styles } from "../../styles";
import { logo } from "../../assets";
import MenuIcon from "./MenuIcon";
import MobileMenu from "./MobileMenu";
import useMenuState from "./useMenuState";
import useWindowSize from "./useWindowSize";

const Navbar = () => {
  const { isMenuOpen, toggleMenu, closeMenu } = useMenuState();
  const windowSize = useWindowSize();
  const menuItems = [
    { text: "About", link: "/about" },
    { text: "Experience", link: "/experience" },
    { text: "Projects", link: "/projects" },
    { text: "Contact", link: "/contact" },
  ];

  const toggleBodyScroll = (enableScroll) => {
    document.body.style.overflow = enableScroll ? "auto" : "hidden";
  };

  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <div>
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-8 mr-2 min-w-12" />
        </Link>
      </div>
      {windowSize.width <= 500 ? (
        <>
          <MenuIcon isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          <MobileMenu
            isMenuOpen={isMenuOpen}
            menuItems={menuItems}
            closeMenu={closeMenu}
            toggleBodyScroll={toggleBodyScroll}
          />
        </>
      ) : (
        <div className="flex items-center">
          {menuItems.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className={`${styles.heroParagraphText} mx-4 hover:text-white transition-colors duration-300`}
            >
              {item.text}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
