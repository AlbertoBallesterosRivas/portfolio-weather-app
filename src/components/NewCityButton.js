import { useState } from "react";

const NewCityButton = ({ getNewCity, language }) => {
  const [mouseIn, setMouseIn] = useState(false);
  let buttonText = null;

  switch (language) {
    case "ES":
      buttonText = "Buscar ciudad aleatoria";
      break;
    case "EN":
      buttonText = "Search random city";
      break;
    case "FR":
      buttonText = "Rechercher une ville au hasard";
      break;
    default:
  }

  const handleMouseEnter = () => {
    setMouseIn(true);
  };

  const handleMouseLeave = () => {
    setMouseIn(false);
  };

  return (
    <button
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={getNewCity}
      className={`flex items-center bg-[#1b4de4] text-[#fffffb] rounded-full ml-6 mt-6 ${mouseIn ? "shadow-button" : ""}`}
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
        className="feather feather-refresh-ccw ml-3.5"
        color="white"
      >
        <polyline points="1 4 1 10 7 10"></polyline>
        <polyline points="23 20 23 14 17 14"></polyline>
        <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
      </svg>
      <span className="my-1 mx-3.5">{buttonText}</span>
    </button>
  );
};

export default NewCityButton;
