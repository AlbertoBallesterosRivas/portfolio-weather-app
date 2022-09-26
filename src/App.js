import { useState } from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Header from "./components/Header";
import Notification from "./components/Notification";
import "./index.css";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [notification, setNotification] = useState(null);
  const [cityForCard, setCityForCard] = useState(null);


  return (
    <div className="backgroundClouds absolute w-full h-full">
      <Header>
        <Form
          setCity={setCity}
          city={city}
          setWeather={setWeather}
          setForecast={setForecast}
          setNotification={setNotification}
          setCityForCard={setCityForCard}
        />
      </Header>
      <div className="flex flex-col items-center ">
        <Notification message={notification} />
        <Weather weather={weather} city={cityForCard} forecast={forecast} />
      </div>
    </div>
  );
};

export default App;
