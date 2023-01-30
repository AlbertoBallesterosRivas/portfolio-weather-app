import { useState, useEffect } from "react";

const Details = ({ weather, mini, language, detailed }) => {
  const [detailsStrings, setDetailsStrings] = useState({
    humidity: "Humedad",
    visibility: "Visibilidad",
    wind: "Viento",
  });

  let windDirection = null;
  const degrees = weather.wind.deg;
  if (degrees <= 22 && degrees >= 338) {
    windDirection = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-arrow-up"
      >
        <line x1="12" y1="19" x2="12" y2="5"></line>
        <polyline points="5 12 12 5 19 12"></polyline>
      </svg>
    );
  } else if (degrees > 22 && degrees < 68) {
    windDirection = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-arrow-up-right"
      >
        <line x1="7" y1="17" x2="17" y2="7"></line>
        <polyline points="7 7 17 7 17 17"></polyline>
      </svg>
    );
  } else if (degrees >= 68 && degrees <= 112) {
    windDirection = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-arrow-right"
      >
        <line x1="5" y1="12" x2="19" y2="12"></line>
        <polyline points="12 5 19 12 12 19"></polyline>
      </svg>
    );
  } else if (degrees > 112 && degrees < 158) {
    windDirection = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-arrow-down-right"
      >
        <line x1="7" y1="7" x2="17" y2="17"></line>
        <polyline points="17 7 17 17 7 17"></polyline>
      </svg>
    );
  } else if (degrees >= 158 && degrees <= 202) {
    windDirection = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-arrow-down"
      >
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <polyline points="19 12 12 19 5 12"></polyline>
      </svg>
    );
  } else if (degrees > 202 && degrees < 248) {
    windDirection = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-arrow-down-left"
      >
        <line x1="17" y1="7" x2="7" y2="17"></line>
        <polyline points="17 17 7 17 7 7"></polyline>
      </svg>
    );
  } else if (degrees >= 248 && degrees <= 292) {
    windDirection = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-arrow-left"
      >
        <line x1="19" y1="12" x2="5" y2="12"></line>
        <polyline points="12 19 5 12 12 5"></polyline>
      </svg>
    );
  } else if (degrees > 292 && degrees < 338) {
    windDirection = (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-arrow-up-left"
      >
        <line x1="17" y1="17" x2="7" y2="7"></line>
        <polyline points="7 17 7 7 17 7"></polyline>
      </svg>
    );
  }

  useEffect(() => {
    switch (language) {
      case "ES":
        setDetailsStrings({
          humidity: "Humedad",
          visibility: "Visibilidad",
          wind: "Viento",
        });
        break;
      case "EN":
        setDetailsStrings({
          humidity: "Humidity",
          visibility: "Visibility",
          wind: "Wind",
        });

        break;
      case "FR":
        setDetailsStrings({
          humidity: "Humidité",
          visibility: "Visibilité",
          wind: "Vent",
        });
        break;
      default:
        setDetailsStrings({
          humidity: "Humedad",
          visibility: "Visibilidad",
          wind: "Viento",
        });
    }
  }, [language]);

  return (
    <ul
      className={`mt-9  ${mini ? "absolute left-[177px] w-3/4" : "w-1/2"} ${
        detailed === "miniDetailed" ? "detailsAppear" : ""
      } ${detailed === "miniBackToBasic" ? "detailsDisappear" : ""}`}
    >
      <li className={`flex w-full justify-between py-2.5`}>
        <p className="flex pl-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-thermometer"
          >
            <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"></path>
          </svg>
          <span className="pl-2">Max./Min.</span>
        </p>
        <span>
          {Math.trunc(weather.main.temp_min - 273.15)}º/
          {Math.trunc(weather.main.temp_max - 273.15)}º
        </span>
      </li>
      <li
        className={`flex w-full border-t border-solid border-grey justify-between py-2.5`}
      >
        <p className="flex pl-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-droplet"
          >
            <title>Humidity</title>
            <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"></path>
          </svg>
          <span className="pl-2">{detailsStrings.humidity}</span>
        </p>
        <span>{weather.main.humidity}%</span>
      </li>
      <li className="flex w-full border-t border-solid border-grey justify-between items-center">
        <div className="flex items-center pl-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-down"
            >
              <line x1="12" y1="5" x2="12" y2="19"></line>
              <polyline points="19 12 12 19 5 12"></polyline>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-arrow-up"
            >
              <line x1="12" y1="19" x2="12" y2="5"></line>
              <polyline points="5 12 12 5 19 12"></polyline>
            </svg>
          </div>

          <p className="pl-2">
            <span>Presión</span>
          </p>
        </div>
        <span>{weather.main.pressure}mb</span>
      </li>
      <li
        className={`flex w-full border-t border-solid border-grey justify-between py-2.5`}
      >
        <p className="flex pl-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-eye"
          >
            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </svg>
          <span className="pl-2">{detailsStrings.visibility}</span>
        </p>
        <span>{weather.visibility}m</span>
      </li>
      <li
        className={`flex w-full border-t border-solid border-grey justify-between py-2.5`}
      >
        <p className="flex pl-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-wind"
          >
            <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"></path>
          </svg>
          <span className="pl-2">{detailsStrings.wind}</span>
        </p>
        <p className="flex">
          {windDirection}
          <span className="ml-1">{weather.wind.speed} km/h</span>
        </p>
      </li>
    </ul>
  );
};

export default Details;
