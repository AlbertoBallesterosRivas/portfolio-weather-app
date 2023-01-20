import linkedinsvg from "./linkedin.svg";

const Footer = () => {
  return (
    <div className="flex w-full bg-[#005986] h-24 items-center justify-around shrink-0	">
      <a href="https://www.linkedin.com/in/alberto-ballesteros-rivas-651327221/">
        <img src={linkedinsvg} alt="" className="white-svg" />
      </a>

      <p className="flex">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="feather feather-mail"
          color="white"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
          <polyline points="22,6 12,13 2,6"></polyline>
        </svg>
        <span className="text-white">
          ballesterosrivasa@gmail.com
        </span>
      </p>
    </div>
  );
};

export default Footer;
