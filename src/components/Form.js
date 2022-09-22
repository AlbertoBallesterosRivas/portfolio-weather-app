import axios from "axios";

const Form = ({ setCity, city, setWeather }) => {
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const key = process.env.REACT_APP_API_KEY;

    axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`
      )
      .then(({ data }) => {
        console.log(data);
        setWeather(data);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="city">City:</label>
      <input onChange={handleCityChange} value={city} type="text" name="city" />
      <button type="submit">Find</button>
    </form>
  );
};

export default Form;