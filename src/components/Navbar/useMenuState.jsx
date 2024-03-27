import { useState } from "react";

const useMenuState = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return { isMenuOpen, toggleMenu, closeMenu };
};

export default useMenuState;
