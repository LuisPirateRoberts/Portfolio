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
    { text: "About", link: "about" },
    { text: "Experience", link: "experience" },
    { text: "Projects", link: "projects" },
    { text: "Contact", link: "contact" },
  ];

  const toggleBodyScroll = (enableScroll) => {
    document.body.style.overflow = enableScroll ? "auto" : "hidden";
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  return (
    <nav
      className={`bg-black bg-opacity-40 ${
        isMenuOpen ? "" : "backdrop-blur-md"
      } text-white p-4 flex justify-between items-center fixed top-0 w-full z-50`}
    >
      <div>
        <Link
          to="/"
          className="flex items-center logo-container"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="Logo"
            className="h-8 mr-2 min-w-12 transform transition-transform hover:scale-150"
          />
        </Link>
      </div>
      {windowSize.width <= 500 ? (
        <>
          <div onClick={toggleMenu}>
            <MenuIcon isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
          </div>

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
              to={`#${item.link}`}
              className={`${styles.heroParagraphText} mx-4 hover:text-white transition-colors duration-300 hover:scale-110 transform transition-transform`}
              onClick={() => scrollToSection(item.link)}
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
