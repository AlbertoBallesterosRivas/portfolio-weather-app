import { useState, useEffect } from "react";
import Details from "./Details";
import Icon from "./Icon";
import MiniIcon from "./MiniIcon";

const MiniCard = ({ day, opened, setOpened }) => {
  const [mouseIn, setMouseIn] = useState(false);
  const [detailed, setDetailed] = useState(null);
  
  
if(opened != day.dt && detailed !== "miniBackToBasic"){
  setDetailed("miniBackToBasic")
}
  console.log("day", day);
  const tempKevin = day.main.temp;
  const tempCelsius = tempKevin - 273.15;

  const date = new Date(day.dt * 1000)

  const dateString = `${date.toLocaleDateString("en-EN", {
    weekday: "long",
  })}, ${date.getDate()}`;

  const handleMouseEnter = () => {
    setMouseIn(true);
  };

  const handleMouseLeave = () => {
    setMouseIn(false);
  };

  const handleCard = () => {
    if (!detailed || detailed === "miniBackToBasic") {
      setDetailed("miniDetailed");
      setOpened(day.dt)
    } else {
      setDetailed("miniBackToBasic");

    }
  };

  


  let cardColor = null;
  switch (day.weather[0].main) {
    case "Clouds":
      cardColor = "from-indigo-500 to-indigo-200";
      break;
    case "Clear":
      cardColor = "from-blue-500 to-blue-200";
      break;
    case "Rain":
      cardColor = "from-emerald-500 to-emerald-200";
      break;
    default:
  }

  return (
    <li
      className={`flex relative w-44 h-96 rounded-[22px] bg-gradient-to-b ${cardColor} text-white overflow-hidden 
      cursor-pointer mx-4 minicard ${
        mouseIn ? "shadow-clickable" : ""
      } ${detailed}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCard}
    >
      <div className="flex flex-col justify-between">
        <div>
        <p className="pl-8 pt-8 text-lg">{dateString}</p>
          <p className="pl-8 pt-8 text-lg">{day.weather[0].main}</p>
          <p className="pl-8 pt-4 text-4xl">{Math.trunc(tempCelsius)}º</p>
        </div>
        <MiniIcon weather={day.weather[0].main} />
      </div>

      {detailed === "miniDetailed" ? <Details weather={day} mini={true} /> : ""}
    </li>
  );
};

export default MiniCard;
