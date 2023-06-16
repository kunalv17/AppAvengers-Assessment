import React from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline"; // Importing the ArrowPathIcon from Heroicons

const AutoSaveToast = () => {
  return (
    <div className="fixed bottom-10 right-10 z-50">
      {/* Rendering the auto-save toast */}
      <div className="bg-green-500 rounded-md p-2 text-white flex gap-2 items-center">
        {/* Rendering the spinning arrow icon */}
        <span className="animate-spin">
          <ArrowPathIcon className="h-5 w-5" />
        </span>
        {/* Rendering the "Saving..." text */}
        Saving...
      </div>
    </div>
  );
};

export default AutoSaveToast;
