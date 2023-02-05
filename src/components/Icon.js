import clouds from "./clouds.png";
import sunny from "./sunny.png";
import rain from "./rain.png";
import snow from "./snow.png";
import useBreakpoints from "./useBreakPoints";

const Icon = ({ weather }) => {
  const { isXs, isSm, isMd } = useBreakpoints();

  let cloudsClasses = null
  let clearRainClasses = null
  let rainClasses = null

  if(isMd || isSm) {
    cloudsClasses = "w-[33%] top-[-26px] right-[-79px]"
    clearRainClasses = "w-[33%] top-[-40px] right-[-55px]"
    rainClasses = "w-[33%] top-[-40px] right-[-55px]"
  }
  else if (isXs) {
    return null
    // cloudsClasses = "w-[33%] top-[192px] right-[47px]"
    // clearRainClasses = "w-[33%] top-[192px] right-[47px]"
    // rainClasses = "w-[33%] top-[192px] right-[47px]"
  }
  else {
    cloudsClasses = "w-[21rem] top-[-54px] right-[-134px]"
  clearRainClasses = "w-52 top-[-55px] right-[-66px]"
  rainClasses = "w-52 top-[-55px] right-[-66px]"
  }
  
  switch (weather) {
    case "Clouds":
      return (
        <div className={`absolute ${cloudsClasses}`}>
          <img src={clouds} alt="" />
        </div>
      );
    case "Clear":
      return (
        <div className={`absolute ${clearRainClasses}`}>
          <img src={sunny} alt="" />
        </div>
      );
    case "Rain":
      return (
        <div className={`absolute ${rainClasses}`}>
          <img src={rain} alt="" />
        </div>
      );
    default:
    case "Snow":
      return (
        <div className={`absolute ${isMd || isSm ? "w-[33%]":"w-52"} top-[-40px] right-[-55px]`}>
          <img src={snow} alt="" />
        </div>
      );
  }
};

export default Icon;
