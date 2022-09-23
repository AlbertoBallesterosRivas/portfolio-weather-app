import { useState } from "react";
import Form from "./components/Form";
import Weather from "./components/Weather";
import Header from "./components/Header";
import "./index.css";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  return (
    <div className="backgroundClouds absolute w-full h-full">
      <Header>
        <Form setCity={setCity} city={city} setWeather={setWeather} />
      </Header>

      <Weather weather={weather} city={city} />
    </div>
  );
};

export default App;
