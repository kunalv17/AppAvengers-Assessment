import React from "react";
import { Squares2X2Icon } from "@heroicons/react/24/outline"; // Importing the Squares2X2Icon from Heroicons

const MenuItemModal = () => {
  return (
    <div className="absolute bg-white border rounded-sm w-56 py-2 shadow-sm z-50 ease-in duration-150">
      {/* Rendering the menu items */}
      {[1, 2, 3, 4, , "|", 5, 6, 7, "|", 8, 9, 10].map((item, index) =>
        item === "|" ? (
          // Rendering a horizontal line as a separator
          <hr key={index} />
        ) : (
          // Rendering a menu option
          <div
            className="px-4 py-1 flex gap-2 items-center cursor-pointer hover:bg-gray-100 text-gray-800"
            key={index}
          >
            <span>
              <Squares2X2Icon className="w-4 h-4 stroke-[1]" />
            </span>
            <span>{"Option"}</span>
          </div>
        )
      )}
    </div>
  );
};

export default MenuItemModal;
