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
      console.log("all", data);
      console.log("random data", data[Math.floor(Math.random() * 200)]);
      setCityForCard(data[Math.floor(Math.random() * 200)].capital);
      const key = process.env.REACT_APP_API_KEY;
      let lat = null;
      let lon = null;
      console.log("cityForCard pre axios", cityForCard);
      axios
        .get(
          `http://api.openweathermap.org/data/2.5/weather?q=${
            data[Math.floor(Math.random() * 200)].capital
          }&appid=${key}&units=metric`
        )
        .then(({ data }) => {
          console.log("cityForCard then", cityForCard);
          console.log("weather", data);
          lat = data.coord.lat;
          lon = data.coord.lon;

          setNotification(null);
          axios
            .get(
              `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`
            )
            .then(({ data }) => {
              console.log("forecast", data);
              setWeather(data.list[0]);
              setForecast(data.list);
            });
        })
        .catch((error) => {
          console.log("fail");
          setNotification(
            `No hay resultados de ${
              data[Math.floor(Math.random() * 200)].capital
            }`
          );
        });
    });
  };

  useEffect(() => {
    const key = process.env.REACT_APP_API_KEY;
    let lat = null;
    let lon = null;
    // setCityForCard(city)

    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityForCard}&appid=${key}&units=metric`
      )
      .then(({ data }) => {
        console.log("weather", data);
        //setWeather(data);
        lat = data.coord.lat;
        lon = data.coord.lon;

        setNotification(null);
        axios
          .get(
            `http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${key}`
          )
          .then(({ data }) => {
            console.log("forecast", data);
            setWeather(data.list[0]);
            setForecast(data.list);
            // data.list.forEach(element => {
            //     let date = new Date(element.dt * 1e3);
            //     console.log(date.toLocaleTimeString(), date.toLocaleDateString())
            // });
          });
      })
      .catch((error) => {
        console.log("fail");
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
