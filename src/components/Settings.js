import { useState } from "react";
import SettingsSelect from "./SettingsSelect";

const Settings = ({ language, setLanguage, scale, setScale }) => {
  console.log("scale", scale);
  const [display, setDisplay] = useState(false);

  const handleSettingsClick = () => {
    setDisplay(!display);
  };

  return (
    <div
      onClick={handleSettingsClick}
      className="flex text-white absolute right-32 cursor-pointer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-globe"
        color="white"
      >
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="2" y1="12" x2="22" y2="12"></line>
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
      </svg>

      <span className="border-r border-solid border-white px-2.5">{language}</span>
      <span className="pl-2.5">{scale}</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="feather feather-chevron-down"
        color="white"
      >
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
      {display ? (
        <SettingsSelect
          currentScale={scale}
          setScale={setScale}
          currentLanguage={language}
          setLanguage={setLanguage}
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default Settings;
