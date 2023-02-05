import Settings from "./Settings";
import useBreakpoints from "./useBreakPoints";

const Header = ({ children, language, setLanguage, scale, setScale }) => {
  const { isXs, isSm } = useBreakpoints();

  return (
    <div className="flex w-full bg-[#005986] h-24 items-center justify-around relative">
      {isXs ? "" : <div className={`flex justify-center items-center ${isXs || isSm ? "w-1/5": "w-1/3"}`}>
        <div className="flex items-end justify-center bg-white h-16 w-16">
          <h1 className="text-sky-700 font-bold leading-none text-sm mb-1.5 ml-1">
            The Weather App
          </h1>
        </div>
        {isXs || isSm ? "" : <p className="text-white ml-5">A Portfolio Web App</p>}
      </div>}
      

      <div className={`${isXs || isSm ? "w-[50%]": "w-1/3"}`}>{children}</div>

      <Settings
        language={language}
        setLanguage={setLanguage}
        scale={scale}
        setScale={setScale}
      />
    </div>
  );
};

export default Header;
