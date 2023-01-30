import clouds from "./clouds.png";
import sunny from "./sunny.png";
import rain from "./rain.png";
import snow from "./snow.png";

const MiniIcon = ({ weather, detailed }) => {
  switch (weather) {
    case "Clouds":
      return (
        <div
          className={`w-40 absolute left-2 top-[264px] ${
            detailed === "miniDetailed" ? "iconMovesLeft" : ""
          } ${detailed === "miniBackToBasic" ? "iconMovesRight" : ""}`}
        >
          <img src={clouds} alt="" />
        </div>
      );
    case "Clear":
      return (
        <div
          className={`w-40 absolute left-2 top-[232px] ${
            detailed === "miniDetailed" ? "iconMovesLeft" : ""
          } ${detailed === "miniBackToBasic" ? "iconMovesRight" : ""}`}
        >
          <img src={sunny} alt="" />
        </div>
      );
    case "Rain":
      return (
        <div
          className={`w-40 absolute left-2 top-[232px] ${
            detailed === "miniDetailed" ? "iconMovesLeft" : ""
          } ${detailed === "miniBackToBasic" ? "iconMovesRight" : ""} `}
        >
          <img src={rain} alt="" />
        </div>
      );
    default:
    case "Snow":
      return (
        <div
          className={`w-40 absolute left-2 top-[245px] ${
            detailed === "miniDetailed" ? "iconMovesLeft" : ""
          } ${detailed === "miniBackToBasic" ? "iconMovesRight" : ""} `}
        >
          <img src={snow} alt="" />
        </div>
      );
  }
};

export default MiniIcon;
