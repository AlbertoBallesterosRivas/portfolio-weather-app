import "../index.css";
import sunny from "./sunny.png";
const Weather = ({ weather, city }) => {
  if (!weather) {
    return null;
  }

  const date = new Date();

  return (
    <div className="flex w-4/6 h-40 rounded-lg bg-gradient-to-r from-blue-500 to-blue-200 text-white overflow-hidden">
      <div>
        <p className="pl-8 pt-8 text-lg">{weather.weather[0].description}</p>
        <p className="pl-8 pt-4 text-6xl">{weather.main.temp}º</p>
      </div>
      <div className="divider"></div>
      <div>
        <p>{date.toDateString()}</p>
        <p>{city}</p>
      </div>
      <img src={sunny} alt="" />
    </div>
  );
};

export default Weather;
