import { useState, useEffect } from "react";
import Details from "./Details";
import MiniIcon from "./MiniIcon";

const MiniCard = ({ day, opened, setOpened, language, scale }) => {
  const [mouseIn, setMouseIn] = useState(false);
  const [detailed, setDetailed] = useState(null);
  const [description, setDescription] = useState(null);
  const date = new Date(day.dt * 1000);
  const [dateString, setDateString] = useState(null);
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    switch (scale) {
      case "ºF":
        setTemperature(1.8 * (day.main.temp - 273.15) + 32);
        break;
      case "ºC":
        setTemperature(day.main.temp - 273.15);
        break;
      default:
    }
  }, [day, scale]);

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
    });
    setDateString(
      `${weekDay.charAt(0).toUpperCase() + weekDay.slice(1)}, ${date.getDate()}`
    );
  }, [language, day]);

  if (
    opened !== day.dt &&
    detailed !== "miniBackToBasic" &&
    detailed !== null
  ) {
    setDetailed("miniBackToBasic");
  }

  const handleMouseEnter = () => {
    setMouseIn(true);
  };

  const handleMouseLeave = () => {
    setMouseIn(false);
  };

  const handleCard = () => {
    if (!detailed || detailed === "miniBackToBasic") {
      setDetailed("miniDetailed");
      setOpened(day.dt);
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
    case "Snow":
      cardColor = "from-[#284e93] to-[#d0e1fa]";
      break;
    default:
  }

  return (
    <li
      className={`flex flex-col	items-center justify-start w-[10%] h-[500px] mt-[30px] rounded-[22px] bg-gradient-to-b ${cardColor} text-white overflow-hidden 
      cursor-pointer mx-4 relative minicard ${
        mouseIn ? "shadow-clickable" : ""
      } ${detailed} ${detailed === "miniDetailed" ? "w-[20%]" : ""}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleCard}
    >
      <div className="flex flex-col items-center justify-center w-full ">
        {/* <div className="min-w-[80px] ml-8"> */}
          <p className="text-lg mt-8">{dateString}</p>
          <p className="text-lg mt-4">{description}</p>
          <p className="text-4xl mt-4">{Math.trunc(temperature)}º</p>
        {/* </div> */}
      </div>
      <div className="flex w-full relative">
        <Details
          key={day.dt}
          weather={day}
          mini={true}
          language={language}
          detailed={detailed}
        />
        <MiniIcon weather={day.weather[0].main} detailed={detailed} />
      </div>
    </li>
  );
};

export default MiniCard;
