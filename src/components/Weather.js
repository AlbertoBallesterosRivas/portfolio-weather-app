import { useState } from "react";
import "../index.css";
import MainCard from "./MainCard";
import MiniCard from "./MiniCard";

const Weather = ({ weather, city, forecast, language, scale }) => {
  const [opened, setOpened] = useState(null)

  if (!weather || !forecast) {
    return null;
  }

  const today = new Date();

  let tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 1);
  const tomorrowFormattedMonth = `${tomorrow.getMonth() + 1}`;
  const tomorrowFormatted = `${tomorrow.getFullYear()}-${tomorrowFormattedMonth.padStart(
    2,
    "0"
  )}-${tomorrow.getDate()} 12:00:00`;

  let thirdDay = new Date();
  thirdDay.setDate(today.getDate() + 2);
  const thirdDayFormattedMonth = `${thirdDay.getMonth() + 1}`;
  const thirdDayFormatted = `${thirdDay.getFullYear()}-${thirdDayFormattedMonth.padStart(
    2,
    "0"
  )}-${thirdDay.getDate()} 12:00:00`;

  let fourthDay = new Date();
  fourthDay.setDate(today.getDate() + 3);
  const fourthDayFormattedMoth = `${fourthDay.getMonth() + 1}`;
  const fourthDayFormatted = `${fourthDay.getFullYear()}-${fourthDayFormattedMoth.padStart(
    2,
    "0"
  )}-${fourthDay.getDate()} 12:00:00`;

  let fifthDay = new Date();
  fifthDay.setDate(today.getDate() + 4);
  const fifthDayFormattedMoth = `${fifthDay.getMonth() + 1}`;
  const fifthDayFormatted = `${fifthDay.getFullYear()}-${fifthDayFormattedMoth.padStart(
    2,
    "0"
  )}-${fifthDay.getDate()} 12:00:00`;

  let sixthDay = new Date();
  sixthDay.setDate(today.getDate() + 5);
  const sixthDayFormattedMoth = `${sixthDay.getMonth() + 1}`;
  const sixthDayFormatted = `${sixthDay.getFullYear()}-${sixthDayFormattedMoth.padStart(
    2,
    "0"
  )}-${sixthDay.getDate()} 00:00:00`;

  const nextDays = forecast.filter(
    (element) =>
      element.dt_txt === tomorrowFormatted ||
      element.dt_txt === thirdDayFormatted ||
      element.dt_txt === fourthDayFormatted ||
      element.dt_txt === fifthDayFormatted ||
      element.dt_txt === sixthDayFormatted
  );

  return (
    <div className="flex flex-col	items-center mt-16 w-3/4">
      <MainCard weather={weather} city={city} language={language} scale={scale} />
      <ul className="flex flex-wrap justify-between mt-10">
        {nextDays.map((day) => (
          <MiniCard day={day} key={day.dt_tx} opened={opened} setOpened={setOpened} language={language} scale={scale} />
        ))}
      </ul>
    </div>
  );
};

export default Weather;
