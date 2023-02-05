import { useState, useEffect } from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Header from "./components/Header";
import Notification from "./components/Notification";
import Footer from "./components/Footer";
import NewCityButton from "./components/NewCityButton";
import "./index.css";
import axios from "axios";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [notification, setNotification] = useState(null);
  const [cityForCard, setCityForCard] = useState("Motril");
  const [language, setLanguage] = useState("ES");
  const [scale, setScale] = useState("ºC");

  const getNewCity = () => {
    axios.get("https://restcountries.com/v3.1/all").then(({ data }) => {
      let capital = data[Math.floor(Math.random() * 200)].capital;

      setCity("");
      const key = process.env.REACT_APP_API_KEY;
      let lat = null;
      let lon = null;
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${capital}&appid=${key}&units=metric`
        )
        .then(({ data }) => {
          lat = data.coord.lat;
          lon = data.coord.lon;

          setNotification(null);
          axios
            .get(
              `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`
            )
            .then(({ data }) => {
              setCityForCard(capital);
              setWeather(data.list[0]);
              setForecast(data.list);
            });
        })
        .catch((error) => {
          setNotification(`No hay resultados de ${capital}`);
        });
    });
  };

  useEffect(() => {
    const key = process.env.REACT_APP_API_KEY;
    let lat = null;
    let lon = null;

    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityForCard}&appid=${key}&units=metric`
      )
      .then(({ data }) => {
        lat = data.coord.lat;
        lon = data.coord.lon;

        setNotification(null);
        axios
          .get(
            `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`
          )
          .then(({ data }) => {
            setWeather(data.list[0]);
            setForecast(data.list);
          });
      })
      .catch((error) => {
        setNotification(`No hay resultados de ${cityForCard}`);
      });
  }, []);

  return (
    <div className="backgroundClouds absolute w-full h-full flex flex-col">
      <div className="flex-[1_0_auto]">
        <Header
          language={language}
          setLanguage={setLanguage}
          scale={scale}
          setScale={setScale}
        >
          <Form
            setCity={setCity}
            city={city}
            setWeather={setWeather}
            setForecast={setForecast}
            setNotification={setNotification}
            setCityForCard={setCityForCard}
            language={language}
          />
        </Header>
        <NewCityButton getNewCity={getNewCity} language={language} />
        <div className="flex flex-col items-center ">
          <Notification message={notification} />
          <Weather
            weather={weather}
            city={cityForCard}
            forecast={forecast}
            language={language}
            scale={scale}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default App;
