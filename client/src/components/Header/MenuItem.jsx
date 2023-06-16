import React from "react";
import MenuItemModal from "./MenuItemModal"; // Importing the MenuItemModal component

const MenuItem = ({ menuItem, index, isModalOpen, setIsModalOpen }) => {
  return (
    <div className="relative">
      {/* Menu item */}
      <div
        className="px-2 py-1 hover:bg-gray-100 rounded-md cursor-pointer text-sm"
        onClick={() => setIsModalOpen((prev) => (prev === index ? -1 : index))}
      >
        {menuItem}
      </div>

      {/* Render the modal if isModalOpen is true */}
      {isModalOpen && <MenuItemModal />}
    </div>
  );
};

export default MenuItem;
