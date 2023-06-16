import React, { useState } from "react"; // Importing React and useState hook
import Logo from "../../assets/logo.png"; // Importing the logo image
import Menu from "./Menu"; // Importing the Menu component
import { StarIcon, UserIcon } from "@heroicons/react/24/solid"; // Importing solid icons
import {
  ChatBubbleBottomCenterTextIcon,
  LockClosedIcon,
  VideoCameraIcon,
} from "@heroicons/react/24/outline"; // Importing outline icons

const Header = () => {
  const [docName, setDocName] = useState(""); // State variable for document name
  const [isFavourite, setIsFavourite] = useState(false); // State variable for favourite status

  return (
    <header>
      <div className="flex w-full items-center p-4 py-3 justify-between">
        <div className="flex items-center">
          <div>
            <img
              className="w-[34px] h-[34px] object-contain"
              src={Logo}
              alt="logo"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center">
              <span>
                <input
                  type="text"
                  value={docName}
                  onChange={(e) => setDocName(e.target.value)}
                  placeholder="Untitled Document"
                  className="rounded-md px-2 w-40 outline-none placeholder:text-gray-500"
                />
              </span>
              <span>
                <StarIcon
                  className={`h-4 w-4 ${
                    isFavourite ? "text-yellow-500" : "text-gray-400"
                  }`}
                  onClick={() => setIsFavourite(!isFavourite)}
                />
              </span>
            </div>
            <div>
              <Menu /> {/* It provides the menu bar of the app */}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="rounded-full p-2 hover:bg-gray-100">
            <ChatBubbleBottomCenterTextIcon className="h-6 w-6" />
          </div>
          <div className="rounded-full p-2 hover:bg-gray-100">
            <VideoCameraIcon className="h-6 w-6" />
          </div>
          <div className="rounded-full flex items-center gap-2 p-2 hover:bg-sky-200 px-4 bg-sky-100 font-semibold cursor-pointer">
            <span>
              <LockClosedIcon className="h-4 w-4 stroke-2" />
            </span>
            Share
          </div>
          <div className="rounded-full p-2 hover:bg-gray-100 cursor-pointer border">
            <UserIcon className="h-6 w-6 text-gray-300" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
