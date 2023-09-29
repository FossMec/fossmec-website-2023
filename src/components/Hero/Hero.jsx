import "./Hero.css";
const Hero = () => {
  return (
    <div>
      <div
        id="home"
        className=" text-black mt-10 sm:mt-10 lg:mt-10  pt-16 md:mt-10 xl:mt-4 md:pt-10  "
      >
        <div className="grid max-w-screen-xl min-h-[100vh]  px-4  mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
          <div className="mr-auto  lg:col-span-7">
            <h2 className="max-w-2xl mb-4 text-3xl font-semibold text-left text-black md:text-6xl xl:text-7xl  ">
              <span className="text-red">FossMec</span> 2023
            </h2>
            <div
              data-aos="fade-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              data-aos-delay="400"
              className="flex gap-2 mt-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M14 13h-4v-4h4v4zm6-4h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4zm16-8v13.386c0 2.391-6.648 9.614-9.811 9.614h-14.189v-23h24zm-2 6h-20v15h11.362c4.156 0 2.638-6 2.638-6s6 1.65 6-2.457v-6.543z" />
              </svg>
              <p className="text-xl font-semibold mb-2">June 17th 2023</p>
            </div>

            <div className="flex gap-2 mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
              </svg>
              <p className="text-xl font-semibold mb-2">
                Model Engineering College , Thrikkakara
              </p>
            </div>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              DebUtsav is an upcoming conference that is set to bring together
              members of the Debian community to celebrate Free and Open Source
              Software (FOSS).
            </p>
            <div className="flex gap-2">
              <button className="inline-flex register bg-red   text-red-500 items-center justify-center px-10 py-3 mr-3 text-xl font-medium text-center   bg-primary-700 hover:bg-primary-800 ">
                Registeration Closed
                {/* <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg> */}
              </button>

              <a href="/#about">
                <button
                  data-aos="fade-in"
                  data-aos-offset="200"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="600"
                  data-aos-delay="500"
                  data-aos-anchor="home"
                  className="inline-flex  about-btn bg-transparent outline-maroon outline text-maroon  items-center justify-center px-10 py-3 mr-3 text-xl font-medium text-center   "
                >
                  About
                  {/* <svg
                className="w-5 h-5 ml-2 -mr-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg> */}
                </button>
              </a>
            </div>
          </div>
          <div
            data-aos="fade-in"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="600"
            data-aos-delay="500"
            className=" lg:mt-0 lg:col-span-5 lg:flex"
          >
            {/* <img
              data-aos="fade-zoom-in"
              data-aos-offset="200"
              data-aos-easing="ease-in-sine"
              data-aos-duration="600"
              data-aos-delay="800"
              src={image}
              alt="mockup"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
