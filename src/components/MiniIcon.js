import clouds from "./clouds.png";
import sunny from "./sunny.png";
import rain from "./rain.png";

const MiniIcon = ({ weather }) => {
  switch (weather) {
    case "Clouds":
      return <img src={clouds} alt="" />;
    case "Clear":
      return (
        <div className="w-52 top-[-55px] right-[-66px]">
          <img src={sunny} alt="" />
        </div>
      );
    case "Rain":
      return (
        <div className="w-52 top-[-55px] right-[-66px]">
          <img src={rain} alt="" />
        </div>
      );
    default:
  }
};

export default MiniIcon;
