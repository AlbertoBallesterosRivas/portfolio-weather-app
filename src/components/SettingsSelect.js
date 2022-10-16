const SettingsSelect = ({
  currentScale,
  setScale,
  currentLanguage,
  setLanguage,
}) => {
  console.log("currentScale", currentScale);
  console.log("currentLanguage", currentLanguage);
  const handleEsclick = () => {
    setLanguage("ES");
  };

  const handleEnclick = () => {
    setLanguage("EN");
  };

  const handleFrclick = () => {
    setLanguage("FR");
  };

  const handleFclick = () => {
    setScale("ºF");
  };

  const handleCclick = () => {
    setScale("ºC");
  };

  return (
    <div className="flex absolute bottom-[-62px] right-[-90px] bg-white text-blue-600 rounded-full settings">
      <div className="border rounded-full">
        <span onClick={handleFclick} className={`px-4 rounded-full ${currentScale === "ºF" ? "selected" : ""}`}>
          ºF
        </span>
        <span onClick={handleCclick} className={`px-4 rounded-full ${currentScale === "ºC" ? "selected" : ""}`}>
          ºC
        </span>
      </div>
      <div className="border rounded-full ml-1.5">
        <span
          onClick={handleEsclick}
          className={`px-4 rounded-full ${currentLanguage === "ES" ? "selected" : ""}`}
        >
          ES
        </span>
        <span
          onClick={handleEnclick}
          className={`px-4 rounded-full ${currentLanguage === "EN" ? "selected" : ""}`}
        >
          EN
        </span>
        <span
          onClick={handleFrclick}
          className={`px-4 rounded-full ${currentLanguage === "FR" ? "selected" : ""}`}
        >
          FR
        </span>
      </div>
    </div>
  );
};

export default SettingsSelect;
