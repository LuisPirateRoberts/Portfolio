import React, { useState, useEffect } from "react";
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
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [lastVisibilityChange, setLastVisibilityChange] = useState(0);

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

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const scrollingDown = prevScrollPos < currentScrollPos;

      if (
        (scrollingDown && lastVisibilityChange - currentScrollPos > 50) || // Hide after scrolling down 50px
        (!scrollingDown && currentScrollPos - lastVisibilityChange > 1) // Show after scrolling up 1px
      ) {
        setVisible(!scrollingDown);
        setLastVisibilityChange(currentScrollPos);
      }

      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos, lastVisibilityChange]);

  return (
    <nav
      className={`bg-black bg-opacity-40 ${
        isMenuOpen ? "" : "backdrop-blur-md"
      } text-white p-3 flex justify-between items-center sticky top-0 w-full z-50 transition-transform ${
        visible ? "" : "-translate-y-20"
      }`}
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
