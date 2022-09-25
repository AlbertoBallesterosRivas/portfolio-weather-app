import { useState } from "react";
import Details from "./Details";

const MiniCard = ({ day }) => {
  const [mouseIn, setMouseIn] = useState(false);
  const [detailed, setDetailed] = useState(null);

  console.log("day", day);
  const tempKevin = day.main.temp;
  const tempCelsius = tempKevin - 273.15;

  const handleMouseEnter = () => {
    setMouseIn(true);
  };

  const handleMouseLeave = () => {
    setMouseIn(false);
  };

  const handleCard = () => {
    if (!detailed || detailed === "miniBackToBasic") {
      setDetailed("miniDetailed");
    } else {
      setDetailed("miniBackToBasic");
    }
  };

  return (
    <li
      className={`flex w-44 h-96 rounded-[22px] bg-gradient-to-b from-blue-500 to-blue-200 text-white overflow-hidden 
    cursor-pointer minicard ${mouseIn ? "shadow-clickable" : ""} ${detailed}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCard}
    >
      <div>
        <p className="pl-8 pt-8 text-lg">{day.weather[0].main}</p>
        <p className="pl-8 pt-4 text-4xl">{tempCelsius.toFixed(2)}º</p>
      </div>
      {detailed === "miniDetailed" ? <Details weather={day} /> : ""}
    </li>
  );
};

export default MiniCard;
