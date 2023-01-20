import clouds from "./clouds.png";
import sunny from "./sunny.png";
import rain from "./rain.png";

const MiniIcon = ({ weather }) => {
  switch (weather) {
    case "Clouds":
      return (
        <div className="w-52 max-w-52">
          <img src={clouds} alt="" />;
        </div>
      );
    case "Clear":
      return (
        <div className="w-52">
          <img src={sunny} alt="" />
        </div>
      );
    case "Rain":
      return (
        <div className="w-52">
          <img src={rain} alt="" />
        </div>
      );
    default:
  }
};

export default MiniIcon;
