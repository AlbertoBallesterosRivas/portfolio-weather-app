import { useState } from "react";
import "../index.css";
import MainCard from "./MainCard";
import MiniCard from "./MiniCard";

const Weather = ({ weather, city, forecast, language, scale }) => {
  const [opened, setOpened] = useState(null);

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
  )}-${
    tomorrow.getDate() < 10 ? "0" + tomorrow.getDate() : tomorrow.getDate()
  } 12:00:00`;

  let thirdDay = new Date();
  thirdDay.setDate(today.getDate() + 2);
  const thirdDayFormattedMonth = `${thirdDay.getMonth() + 1}`;
  const thirdDayFormatted = `${thirdDay.getFullYear()}-${thirdDayFormattedMonth.padStart(
    2,
    "0"
  )}-${
    thirdDay.getDate() < 10 ? "0" + thirdDay.getDate() : thirdDay.getDate()
  } 12:00:00`;

  let fourthDay = new Date();
  fourthDay.setDate(today.getDate() + 3);
  const fourthDayFormattedMoth = `${fourthDay.getMonth() + 1}`;
  const fourthDayFormatted = `${fourthDay.getFullYear()}-${fourthDayFormattedMoth.padStart(
    2,
    "0"
  )}-${
    fourthDay.getDate() < 10 ? "0" + fourthDay.getDate() : fourthDay.getDate()
  } 12:00:00`;

  let fifthDay = new Date();
  fifthDay.setDate(today.getDate() + 4);
  const fifthDayFormattedMoth = `${fifthDay.getMonth() + 1}`;
  const fifthDayFormatted = `${fifthDay.getFullYear()}-${fifthDayFormattedMoth.padStart(
    2,
    "0"
  )}-${
    fifthDay.getDate() < 10 ? "0" + fifthDay.getDate() : fifthDay.getDate()
  } 12:00:00`;

  let sixthDay = new Date();
  sixthDay.setDate(today.getDate() + 5);
  const sixthDayFormattedMoth = `${sixthDay.getMonth() + 1}`;
  const sixthDayFormatted = `${sixthDay.getFullYear()}-${sixthDayFormattedMoth.padStart(
    2,
    "0"
  )}-${
    sixthDay.getDate() < 10 ? "0" + sixthDay.getDate() : sixthDay.getDate()
  } 00:00:00`;

  let firstDay = forecast.find((element) =>
    element.dt_txt.includes(tomorrowFormatted)
  );
  let secondtDay = forecast.find((element) =>
    element.dt_txt.includes(thirdDayFormatted)
  );
  let thirdDay2 = forecast.find((element) =>
    element.dt_txt.includes(fourthDayFormatted)
  );
  let fourthDay2 = forecast.find((element) =>
    element.dt_txt.includes(fifthDayFormatted)
  );
  let fifthDay2 = forecast.find((element) =>
    element.dt_txt.includes(sixthDayFormatted)
  );
  const nextDays = [firstDay, secondtDay, thirdDay2, fourthDay2, fifthDay2];

  return (
    <div className="flex flex-col	items-center mt-4 w-3/4">
      <MainCard
        weather={weather}
        city={city}
        language={language}
        scale={scale}
      />
      <ul className="flex flex-wrap justify-between mt-10 mb-10">
        {nextDays.map((day) => (
          <MiniCard
            day={day}
            key={day.dt}
            opened={opened}
            setOpened={setOpened}
            language={language}
            scale={scale}
          />
        ))}
      </ul>
    </div>
  );
};

export default Weather;
