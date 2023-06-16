import React, { useState } from "react";
import MenuItem from "./MenuItem"; // Importing the MenuItem component
import { MENU_ITEMS } from "../../constants/index/"; // Importing the MENU_ITEMS constant

const Menu = () => {
  const [isModalOpen, setIsModalOpen] = useState(-1); // State variable for tracking the open modal index

  return (
    <div className="flex">
      {/* Rendering menu items */}
      {MENU_ITEMS.map((menuItem, index) => (
        <MenuItem
          key={index}
          menuItem={menuItem}
          index={index}
          isModalOpen={isModalOpen === index}
          setIsModalOpen={setIsModalOpen}
        />
      ))}
    </div>
  );
};

export default Menu;
