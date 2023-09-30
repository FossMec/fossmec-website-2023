
import "./Navbar.css";
import { useState } from "react";
import logo from '../../assets/fosspng.svg'

const Navbar = () => {
  const [scrollbar, setscrollbar] = useState(false);
  const [mobilenav, setmobilenav] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setscrollbar(true);
    } else {
      setscrollbar(false);
    }
  };

  // window.addEventListener("scroll", handleScroll);
  const handleHamburger = () => {
    setmobilenav(!mobilenav);
  };

  return (
    <div
      className={`w-screen h-[70px] flex flex-row items-center  px-6 md:px-0 justify-center py-3 fixed top-0 z-40  ${
        scrollbar ? "bg-white text-black" : "bg-white"
      }`}
    >
      <a className="bg-blue-900 rounded-[999px] justify-start" href="/">
        <img src={logo} alt="debutsav kochi logo" className="h-[50px] items-start justify-start" />
      </a>
      <button
        onClick={handleHamburger}
        className="text-black text-4xl block md:hidden mr-3"
      >
        {mobilenav ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
          >
            <path
              fill="#000"
              d="M19.8 4.8l-0.6-0.6c-0.4-0.4-1-0.4-1.4 0L12 10.6 5.2 3.8c-0.4-0.4-1-0.4-1.4 0l-0.6 0.6c-0.4 0.4-0.4 1 0 1.4L10.6 12 3.8 18.8c-0.4 0.4-0.4 1 0 1.4l0.6 0.6c0.4 0.4 1 0.4 1.4 0L12 13.4l6.8 6.8c0.4 0.4 1 0.4 1.4 0l0.6-0.6c0.4-0.4 0.4-1 0-1.4L13.4 12l6.8-6.8c0.4-0.4 0.4-1 0-1.4z"
            />
          </svg>
        ) : (
          <svg viewBox="0 0 100 80" width="40" height="25">
            <rect width="100" height="15"></rect>
            <rect y="30" width="100" height="15"></rect>
            <rect y="60" width="100" height="15"></rect>
          </svg>
        )}
      </button>
      <div
        className={`text-black transition-all duration-300 ease-in-out font-medium md:static md:w-max md:h-max md:pt-0 md:bg-transparent md:block md:mr-3 fixed top-0 w-screen pt-24 h-screen text-center  items-center ${
          mobilenav
            ? "right-0 flex flex-col  gap-8 bg-white  z-[-1]  "
            : "right-full flex flex-col gap-8 text-opacity-0  "
        }`}
      >
        <a
          href="/"
          className="group text-black transition-all duration-300 ease-in-out md:ml-8"
          onClick={handleHamburger}
        >
          <span className="bg-left-bottom text-xl font-normal bg-gradient-to-r from-red to-red bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration ease-out">
            Home
          </span>
        </a>
        <a
          className="group text-black transition-all duration-300 ease-in-out md:ml-8"
          href="/becomesponsor"
        >
          <span className="bg-left-bottom text-xl font-normal bg-gradient-to-r from-red to-red bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration ease-out">
            Sponsors
          </span>
        </a>
        <a
          className="group text-black transition-all duration-300 ease-in-out md:ml-8"
          href="/#EventSchedule"
        >
          <span className="bg-left-bottom text-xl font-normal bg-gradient-to-r from-red to-red bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration ease-out">
            Schedule
          </span>
        </a>
        <a
          className="group text-black transition-all duration-300 ease-in-out md:ml-8"
          href="/#speakers"
        >
          <span className="bg-left-bottom text-xl font-normal bg-gradient-to-r from-red to-red bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration ease-out">
            Speakers
          </span>
        </a>
        <a
          className="group text-black transition-all duration-300 ease-in-out md:ml-8"
          href="/#contact"
          onClick={handleHamburger}
        >
          <span className="bg-left-bottom text-xl font-normal bg-gradient-to-r from-red to-red bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
            Contact
          </span>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
