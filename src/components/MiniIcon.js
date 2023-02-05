import {
  useLayoutEffect,
  useState,
  useRef,
  useEffect,
  useCallback,
} from "react";
import clouds from "./clouds.png";
import sunny from "./sunny.png";
import rain from "./rain.png";
import snow from "./snow.png";
import styled from "styled-components";

const MiniIcon = ({ weather, detailed }) => {
  const [maxWidth, setMaxWidth] = useState("100%");

  const measuredRef = useCallback((node) => {
    if (node !== null) {
      //setWidth(node.getBoundingClientRect().width.toString());
      // setMaxWidth(`max-w-[${node.getBoundingClientRect().width}px]`);
      setMaxWidth(`${node.getBoundingClientRect().width}px`);
      // maxWidth = node.getBoundingClientRect().width
      // console.log("maxWidth", maxWidth);
      console.log("maxWidth", maxWidth);
    }
  }, []);
  console.log("maxWidth", maxWidth);
  // const [maxWidth, setMaxWidth] = useState(0);
  //setMaxWidth(ref.current.clientWidth);
  // useLayoutEffect(() => {
  //   setMaxWidth(ref.current.clientWidth);
  // }, []);

  let iconClass = null;
  switch (detailed) {
    case "miniDetailed":
      iconClass = "iconMovesLeft";
      break;
    case "miniBackToBasic":
      // iconClass = "miniBackToBasic";
      iconClass = "iconMovesRight";
      break;
    default:
      iconClass = "miniDefault";
      break;
  }

  // const styledDiv = styled.div`
  //   max-width: ${maxWidth};
  // `;
  console.log("WEATHER", weather);
  let imgSrc = null;
  let top = null;
  switch (weather) {
    case "Clouds":
      imgSrc = clouds;
      top = "top-[82px]";
      break
    case "Clear":
      imgSrc = sunny;
      top = "top-[60px]";
      break
    case "Rain":
      imgSrc = rain;
      top = "top-[63px]";
      break
    case "Snow":
      imgSrc = snow;
      top = "top-[67px]";
      break
    default:
  }

  return (
    <div
      ref={measuredRef}
      style={{ "--max-width": maxWidth }}
      // style={{"max-width": maxWidth}}
      // className={`w-40 absolute left-2 top-[232px] ${      max-w-[${maxWidth}]
      className={`maxWidth absolute left-1 ${iconClass} ${top}`}
    >
      <img src={imgSrc} alt="" />
    </div>
  );

  // switch (weather) {
  //   case "Clouds":
  //     return (
  //       <div
  //         // className={`w-40 absolute left-2 top-[264px] ${
  //           className={`w-[95%] mt-[44%] ${
  //           detailed === "miniDetailed" ? "iconMovesLeft" : ""
  //         } ${detailed === "miniBackToBasic" ? "iconMovesRight" : ""}`}
  //       >
  //         <img src={clouds} alt="" />
  //       </div>
  //     );
  //   case "Clear":
  //     return (
  //       <div ref={measuredRef}
  //       style={{'--max-width': maxWidth }}
  //       // style={{"max-width": maxWidth}}
  //         // className={`w-40 absolute left-2 top-[232px] ${      max-w-[${maxWidth}]
  //           className={`maxWidth absolute ${iconClass}`}

  //       >
  //         <img src={sunny} alt="" />
  //       </div>
  //     );
  //   case "Rain":
  //     return (
  //       <div
  //         className={`w-40 absolute left-2 top-[232px] ${
  //           detailed === "miniDetailed" ? "iconMovesLeft" : ""
  //         } ${detailed === "miniBackToBasic" ? "iconMovesRight" : ""} `}
  //       >
  //         <img src={rain} alt="" />
  //       </div>
  //     );
  //   default:
  //   case "Snow":
  //     return (
  //       <div
  //         className={`w-40 absolute left-2 top-[245px] ${
  //           detailed === "miniDetailed" ? "iconMovesLeft" : ""
  //         } ${detailed === "miniBackToBasic" ? "iconMovesRight" : ""} `}
  //       >
  //         <img src={snow} alt="" />
  //       </div>
  //     );
  // }
};

export default MiniIcon;
