import React, { useEffect } from "react";
import MenuIcon from "./MenuIcon";
import MenuItem from "./MenuItem";
import { styles } from "../../styles";

const MobileMenu = ({ isMenuOpen, menuItems, closeMenu, toggleBodyScroll }) => {
  useEffect(() => {
    if (isMenuOpen) {
      toggleBodyScroll(false);
    } else {
      toggleBodyScroll(true);
    }
  }, [isMenuOpen, toggleBodyScroll]);

  return (
    <div
      className={`bg-primary fixed inset-0 z-50 ${
        isMenuOpen
          ? "ease-out duration-300 transform translate-y-0"
          : "ease-in duration-200 transform -translate-y-full"
      }`}
    >
      <div className="flex justify-end p-4">
        <MenuIcon isMenuOpen={isMenuOpen} toggleMenu={closeMenu} />
      </div>
      <div
        className={`flex flex-col ${styles.padding} overflow-y-auto max-h-screen pb-20`}
      >
        {menuItems.map((item, index) => (
          <MenuItem
            key={index}
            text={item.text}
            link={item.link}
            onClick={closeMenu}
          />
        ))}
      </div>
    </div>
  );
};

export default MobileMenu;
