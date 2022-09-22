import { useState } from "react";
import Form from './components/Form';
import Weather from "./components/Weather";

const App = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null)

  return (
    <div>
      <Form setCity={setCity} city={city} setWeather={setWeather} />
      <Weather weather={weather} />
    </div>
  );
};

export default App;