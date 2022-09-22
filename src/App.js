import { useState } from "react";
import axios from "axios";

const App = () => {
  const [city, setCity] = useState("");

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const key = process.env.WEATHER_APP_API_KEY;
    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
      )
      .then(({ data }) => {
        console.log(data);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">City:</label>
        <input
          onChange={handleCityChange}
          value={city}
          type="text"
          name="city"
        />
        <button type="submit">Find</button>
      </form>
    </div>
  );
};

export default App;