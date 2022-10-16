import { useState, useEffect } from "react";
import Icon from "./Icon";
import Details from "./Details";

const MainCard = ({ weather, city, language, scale }) => {
  // console.log("weather.weather[0].main", weather.weather[0].main);
  // console.log("language", language);
  const [detailed, setDetailed] = useState(null);
  const [mouseIn, setMouseIn] = useState(false);
  const [description, setDescription] = useState(null);
  const [dateString, setDateString] = useState(null);
  const date = new Date();

  useEffect(() => {
    switch (language) {
      case "ES":
        switch (weather.weather[0].main) {
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
        switch (weather.weather[0].main) {
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
        switch (weather.weather[0].main) {
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
    let month = date.toLocaleDateString(language, {
      month: "long",
    })
    setDateString(`${weekDay.charAt(0).toUpperCase() + weekDay.slice(1)}, ${date.getDate()} ${month}`)
  }, [language]);

  //
  // console.log("description", description);
  const tempKevin = weather.main.temp;
  const tempCelsius = tempKevin - 273.15;

  // const date = new Date();
  // const dateString = `${date.toLocaleDateString("en-EN", {
  //   weekday: "long",
  // })}, ${date.getDate()} ${date.toLocaleDateString("en-EN", {
  //   month: "long",
  // })}`;

  const handleCard = () => {
    if (!detailed || detailed === "backToBasic") {
      setDetailed("detailed");
    } else {
      setDetailed("backToBasic");
    }
  };

  const handleMouseEnter = () => {
    setMouseIn(true);
  };

  const handleMouseLeave = () => {
    setMouseIn(false);
  };

  let cardColor = null;
  switch (weather.weather[0].main) {
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
    <div
      onClick={handleCard}
      className={`relative w-1/2 h-40 rounded-[22px]  text-white
       overflow-hidden cursor-pointer ${detailed} bg-gradient-to-r ${cardColor} ${
        mouseIn ? "shadow-clickable" : ""
      }`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <h1 className="pl-10 pt-6 text-lg">{description}</h1>
      <div className="flex items-center">
        <p className="pl-10 pt-1 text-6xl">{Math.trunc(tempCelsius)}º</p>

        <div className="mx-8">
          <div className="w-px h-6 bg-gradient-to-t from-white to-transparent"></div>
          <div className="w-px h-6 bg-gradient-to-b from-white to-transparent"></div>
        </div>

        <div className="">
          <p>{dateString}</p>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-map-pin"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
              <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <span className="pl-2 capitalize-first">{city}</span>
          </div>
        </div>
      </div>

      <Icon weather={weather.weather[0].main} />

      {detailed === "detailed" ? <Details weather={weather} /> : ""}
    </div>
  );
};

export default MainCard;
