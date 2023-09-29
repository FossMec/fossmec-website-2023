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
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Temporibus illo impedit eveniet incidunt sed voluptate natus nostrum nobis necessitatibus cumque placeat fuga quidem, esse quasi sint quod minima ipsam aliquid?
            </p>
            <div className="flex gap-2">
        

            </div>
          </div>
      
        </div>
      </div>
    </div>
  );
};

export default Hero;
