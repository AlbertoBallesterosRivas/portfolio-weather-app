import { useState } from "react";
import axios from "axios";
import "../index.css";

const Form = ({ setCity, city, setWeather, setForecast, setNotification, setCityForCard, language }) => {
  let placeholder = null;
  switch (language) {
    case "ES":
      placeholder = "Buscar ciudad";
      break;
    case "EN":
      placeholder = "Search city";
      break;
    case "FR":
      placeholder = "Recherche de ville";
      break;
    default:
  }

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const key = process.env.REACT_APP_API_KEY;
    let lat = null
    let lon = null
    setCityForCard(city)
    
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
      )
      .then(({ data }) => {
        console.log("weather", data);
        //setWeather(data);
        lat = data.coord.lat;
        lon = data.coord.lon;

        setNotification(null)
        axios
          .get(
            `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`
          )
          .then(({ data }) => {
            console.log("forecast", data);
            setWeather(data.list[0]);
            setForecast(data.list)
            // data.list.forEach(element => {
            //     let date = new Date(element.dt * 1e3);
            //     console.log(date.toLocaleTimeString(), date.toLocaleDateString())
            // });
          });
      }).catch(error => {
        console.log('fail')
        setNotification(`No hay resultados de ${city}`)
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="relative">
        <input
          onChange={handleCityChange}
          value={city}
          type="text"
          placeholder={placeholder}
          className="w-96	h-9 rounded-full bg-[#337a9e] text-center text-white"
        />
        <svg
          onClick={handleSubmit}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          color="white"
          className="feather feather-search absolute top-1.5 right-2.5 cursor-pointer"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
        </svg>
      </div>
    </form>
  );
};

export default Form;
