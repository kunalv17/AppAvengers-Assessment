import React, { useState, useEffect, useMemo, useRef } from "react";
import JoditEditor from "jodit-react"; // Importing the JoditEditor component
import AutoSaveToast from "../shared/AutoSaveToast"; // Importing the AutoSaveToast component
import { JODIT_BUTTONS } from "../../constants"; // Importing the JODIT_BUTTONS constant
import { getContent, autoSave } from "../../services/index"; // Importing the getContent and autoSave functions from the services

const Body = () => {
  const [content, setContent] = useState(""); // State variable to store the content
  const [fetchingContent, setFetchingContent] = useState(false); // State variable to track whether content is being fetched

  const editor = useRef(null); // Ref for the JoditEditor component

  const config = useMemo(
    () => ({
      buttons: JODIT_BUTTONS, // Configuration object for JoditEditor, setting the buttons from JODIT_BUTTONS constant
      readonly: false,
      placeholder: "Enter your content here...",
      height: 1000,
      toolbarAdaptive: true,
    }),
    []
  );

  useEffect(() => {
    // Fetch initial content
    getContent().then((res) => {
      setContent(res);
    });
  }, []);

  useEffect(() => {
    let debounceTimer;

    setFetchingContent(true);

    debounceTimer = setTimeout(() => {
      // Autosave content after a debounce of 3000 milliseconds
      autoSave(content);
      setFetchingContent(false);
    }, 3000);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [content]);

  return (
    <div className="px-4 py-4 relative">
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        // onBlur={(newContent) => setContent(newContent)}
        onChange={(newContent) => setContent(newContent)}
      />
      {fetchingContent && <AutoSaveToast />}{" "}
      {/* Render AutoSaveToast component when content is being fetched */}
    </div>
  );
};

export default Body;
