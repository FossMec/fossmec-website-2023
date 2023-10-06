import "./Events.css";
import Boxes from "./Boxes";
const Events = () => {
  return (
    <div className=" bg-[#E6F4F4] flex flex-col items-center main-cont">
      <h1 className="text-[#041B3E] text-[82px] mt-20 font-semibold">EVENTS</h1>
      <div className="sub-cont flex mt-10 items-center">
        <Boxes />
        <Boxes />
        <Boxes />
      </div>
    </div>
  );
};

export default Events;
