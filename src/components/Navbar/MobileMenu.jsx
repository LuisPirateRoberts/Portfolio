import React from "react";
import MenuIcon from "./MenuIcon";
import MenuItem from "./MenuItem";
import { styles } from "../../styles";

const MobileMenu = ({ isMenuOpen, menuItems, closeMenu }) => {
  return (
    <div
      className={`bg-primary fixed inset-0 bg-da z-50 ${
        isMenuOpen ? "" : "hidden"
      }`}
    >
      <div className="flex justify-end p-4">
        <MenuIcon isMenuOpen={isMenuOpen} toggleMenu={closeMenu} />
      </div>
      <div className={`flex flex-col h-full ${styles.padding}`}>
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
