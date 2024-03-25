import { useState } from "react";

export const useMenuState = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuClick = () => {
    setShowMenu(!showMenu);
  };

  return { showMenu, handleMenuClick };
};
