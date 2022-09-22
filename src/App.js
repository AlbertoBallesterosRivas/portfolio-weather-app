import { useState } from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";
import "./index.css";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  return (
    <div className="backgroundClouds absolute w-full h-full">
      <Form setCity={setCity} city={city} setWeather={setWeather} />
      <Weather weather={weather} city={city} />
    </div>
  );
};

export default App;