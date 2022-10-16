import clouds from "./clouds.png";
import sunny from "./sunny.png";
import rain from "./rain.png";
import snow from "./snow.png";

const Icon = ({ weather }) => {
  switch (weather) {
    case "Clouds":
      return (
        <div className="absolute w-52 top-[-55px] right-[-66px]">
          <img src={clouds} alt="" />
        </div>
      );
    case "Clear":
      return (
        <div className="absolute w-52 top-[-55px] right-[-66px]">
          <img src={sunny} alt="" />
        </div>
      );
    case "Rain":
      return (
        <div className="absolute w-52 top-[-55px] right-[-66px]">
          <img src={rain} alt="" />
        </div>
      );
    default:
    case "Snow":
      return (
        <div className="absolute w-52 top-[-55px] right-[-66px]">
          <img src={snow} alt="" />
        </div>
      );
  }
};

export default Icon;
