import { useState, useEffect } from "react";
import Details from "./Details";
import MiniIcon from "./MiniIcon";

const MiniCard = ({ day, opened, setOpened, language, scale }) => {
  const [mouseIn, setMouseIn] = useState(false);
  const [detailed, setDetailed] = useState(null);
  const [description, setDescription] = useState(null);
  const date = new Date(day.dt * 1000)
  const [dateString, setDateString] = useState(null);

  useEffect(() => {
    switch (language) {
      case "ES":
        switch (day.weather[0].main) {
          case "Clear":
            setDescription("Soleado");
            break;
          case "Rain":
            setDescription("Lluvia");
            break;
          case "Clouds":
            setDescription("Nublado");
            break;
          case "Snow":
            setDescription("Nieve");
            break;
          default:
            setDescription("Soleado");
        }
        break;
      case "EN":
        switch (day.weather[0].main) {
          case "Clear":
            setDescription("Clear");
            break;
          case "Rain":
            setDescription("Rain");
            break;
          case "Clouds":
            setDescription("Clouds");
            break;
          case "Snow":
            setDescription("Snow");
            break;
          default:
        }
        break;
      case "FR":
        switch (day.weather[0].main) {
          case "Clear":
            setDescription("Ensoleillé");
            break;
          case "Rain":
            setDescription("Pluie");
            break;
          case "Clouds":
            setDescription("Nuageux");
            break;
          case "Snow":
            setDescription("Neige");
            break;
          default:
        }
        break;
      default:
        setDescription(null);
    }
    let weekDay = date.toLocaleDateString(language, {
      weekday: "long",
    })
    setDateString(`${weekDay.charAt(0).toUpperCase() + weekDay.slice(1)}, ${date.getDate()}`)
  }, [language]);
  
if(opened !== day.dt && detailed !== "miniBackToBasic"){
  setDetailed("miniBackToBasic")
}
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
      className={`relative w-44 h-96 rounded-[22px] bg-gradient-to-b ${cardColor} text-white overflow-hidden 
      cursor-pointer mx-4 minicard ${
        mouseIn ? "shadow-clickable" : ""
      } ${detailed}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCard}
    >
      <div className="">
        <div>
        <p className="pl-8 pt-8 text-lg">{dateString}</p>
          <p className="pl-8 pt-8 text-lg">{description}</p>
          <p className="pl-8 pt-4 text-4xl">{Math.trunc(tempCelsius)}º</p>
        </div>
        <Details weather={day} mini={true} />
        {/* {detailed === "miniDetailed" ? <Details weather={day} mini={true} /> : ""} */}
      </div>

      <MiniIcon weather={day.weather[0].main} />
    </li>
  );
};

export default MiniCard;
