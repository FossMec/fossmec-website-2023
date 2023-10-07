import "./Hero.css";
const Hero = () => {
  return (
      <div>
        <div id="home" className="text-white flex flex-col flex-wrap box-content justify-center items-center min-h-screen mt-10 sm:mt-10 lg:mt-10  pt-16 md:mt-10 xl:mt-4 md:pt-10" >
          <h1 className="hero-headline text-8xl font-semibold max-w-5xl text-white text-center min-[320px]:text-6xl md:text-7xl lg:text-7xl xl:text-8xl">
            Open Source Software Foundation
          </h1>
          <p className="text-2xl max-w-5xl font-medium text-white text-center min-[320px]:text-xl lg:text-2xl xl:text-3xl mt-10">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          </p>
          <button className="join-us-button text-black font-semibold text-2xl rounded-full px-10 py-4 m-4 mt-10 min-[320px]:text-xl min-[320px]:px-6 min-[320px]:py-2">Join Us!</button>
        </div>
      </div>
  );
};

export default Hero;
