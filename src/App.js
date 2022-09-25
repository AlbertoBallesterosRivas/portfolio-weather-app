import { useState } from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Header from "./components/Header";

import "./index.css";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  return (
    <div className="backgroundClouds absolute w-full h-full">
      <Header>
        <Form setCity={setCity} city={city} setWeather={setWeather} setForecast={setForecast} />
      </Header>

      <Weather weather={weather} city={city} forecast={forecast} />
    </div>
  );
};

export default App;
