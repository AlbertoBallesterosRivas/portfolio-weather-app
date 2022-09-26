const Header = ({ children }) => {
  return (
    <div className="flex w-full bg-[#005986] h-24 items-center justify-around relative">
      <div className="flex justify-center items-center absolute left-32">
        <div className="flex items-end justify-center bg-white h-16 w-16">
          <h1 className="text-sky-700 font-bold leading-none text-sm mb-1.5 ml-1">
            The Weather App
          </h1>
        </div>
        <p className="text-white ml-5">A Portfolio Web App</p>
      </div>

      <div>{children}</div>

      <div className="flex text-white absolute right-32">
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
          className="feather feather-globe"
          color="white"
        >
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="2" y1="12" x2="22" y2="12"></line>
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
        </svg>
        <span className="border-r border-solid border-white px-2.5">ES</span>
        <span className="pl-2.5">ºC</span>
      </div>
    </div>
  );
};

export default Header;
