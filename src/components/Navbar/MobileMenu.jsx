import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "./MenuIcon";
import { styles } from "../../styles";

const MobileMenu = ({ isMenuOpen, menuItems, closeMenu, toggleBodyScroll }) => {
  useEffect(() => {
    if (isMenuOpen) {
      toggleBodyScroll(false);
    } else {
      toggleBodyScroll(true);
    }
  }, [isMenuOpen, toggleBodyScroll]);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  return (
    <div
      className={`bg-primary fixed inset-0 z-50 ${
        isMenuOpen
          ? "ease-out duration-300 opacity-100 pointer-events-auto"
          : "ease-in duration-200 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex justify-end p-4">
        <MenuIcon isMenuOpen={isMenuOpen} toggleMenu={closeMenu} />
      </div>
      <div
        className={`flex flex-col ${styles.padding} overflow-y-auto max-h-screen pb-20`}
      >
        {menuItems.map((item, index) => (
          <Link
            key={index}
            to={`#${item.link}`}
            className={`${styles.navMobileText} my-2 hover:text-white transition-colors duration-300`}
            onClick={() => {
              scrollToSection(item.link);
              closeMenu();
            }}
          >
            {item.text}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
