import { useState } from "react";
import "../index.css";
import MainCard from "./MainCard";
import MiniCard from "./MiniCard";
import useBreakpoints from "./useBreakPoints";

const Weather = ({ weather, city, forecast, language, scale }) => {
  const [opened, setOpened] = useState(null);
  const { isXs, isSm, isMd } = useBreakpoints();
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
  const nextDays = [
    { weather: firstDay, date: tomorrow },
    { weather: secondtDay, date: thirdDay },
    { weather: thirdDay2, date: fourthDay },
    { weather: fourthDay2, date: fifthDay },
    { weather: fifthDay2, date: sixthDay },
  ];

  if (isXs || isSm || isMd) {
    return (
      <div className="flex flex-col	items-center mt-4 w-full">
        <MainCard
          weather={weather}
          date={today}
          city={city}
          language={language}
          scale={scale}
        />
        <ul
          className={`flex flex-wrap justify-center items-center mt-10 mb-10 w-full ${
            isXs || isSm || isMd ? "flex-col" : ""
          }`}
        >
          {nextDays.map((day) => (
            <MainCard
              weather={day.weather}
              date={day.date}
              key={day.weather.dt}
              opened={opened}
              setOpened={setOpened}
              language={language}
              scale={scale}
            />
          ))}
        </ul>
      </div>
    );
  }
  return (
    <div className="flex flex-col	items-center mt-4 w-full">
      <MainCard
        weather={weather}
        date={today}
        city={city}
        language={language}
        scale={scale}
      />
      <ul
        className={`flex flex-wrap justify-center mt-10 mb-10 w-full ${
          isXs || isSm || isMd ? "flex-col" : ""
        }`}
      >
        {nextDays.map((day) => (
          <MiniCard
            day={day.weather}
            key={day.weather.dt}
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
