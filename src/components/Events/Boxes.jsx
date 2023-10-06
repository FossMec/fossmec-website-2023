import React from "react";
import "./Events.css";
const Boxes = () => {
  return (
    <div className=" bg-[#0C2445]  box-cont ml-4 flex flex-col">
      <div className="flex justify-center items-center my-6">
        <div className="bg-[#E0E2E3] rounded inner-box "></div>
      </div>
      <div className="mx-8">
        <h3 className="text-[#E6F4F4] text-[36px] font-semibold mb-1">TITLE</h3>
        <p className="text-[#D9D9D9] text-[24px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore{" "}
        </p>
      </div>
    </div>
  );
};

export default Boxes;
