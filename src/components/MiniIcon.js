import { useState, useCallback } from "react";
import clouds from "./clouds.png";
import sunny from "./sunny.png";
import rain from "./rain.png";
import snow from "./snow.png";

const MiniIcon = ({ weather, detailed }) => {
  const [maxWidth, setMaxWidth] = useState("100%");

  const measuredRef = useCallback((node) => {
    if (node !== null) {
      setMaxWidth(`${node.getBoundingClientRect().width}px`);
    }
  }, []);

  let iconClass = null;
  switch (detailed) {
    case "miniDetailed":
      iconClass = "iconMovesLeft";
      break;
    case "miniBackToBasic":
      iconClass = "iconMovesRight";
      break;
    default:
      iconClass = "miniDefault";
      break;
  }

  let imgSrc = null;
  let top = null;
  switch (weather) {
    case "Clouds":
      imgSrc = clouds;
      top = "top-[82px]";
      break;
    case "Clear":
      imgSrc = sunny;
      top = "top-[60px]";
      break;
    case "Rain":
      imgSrc = rain;
      top = "top-[63px]";
      break;
    case "Snow":
      imgSrc = snow;
      top = "top-[67px]";
      break;
    default:
  }

  return (
    <div
      ref={measuredRef}
      style={{ "--max-width": maxWidth }}
      className={`maxWidth absolute left-1 ${iconClass} ${top}`}
    >
      <img src={imgSrc} alt="" className="max-w-[188px]" />
    </div>
  );
};

export default MiniIcon;
