import React from "react";

const WaitingForDriver = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setwaitingForDriver(false);
        }}
        className="p-1 text-center absolute top-0 w-[93%]"
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-400"></i>
      </h5>
      <div className="flex items-center justify-between">
        <img
          className="h-14"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt="car"
        />
        <div className="text-right">
          <h2 className="text-lg font-medium">Piyush</h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">UP04 AB 1234</h4>
          <p className="text-sm text-gray-600">Maruti Suzuki Alto</p>
        </div>
      </div>
      <div className="flex justify-between flex-col items-center gap-2">
        <div className="w-full flex flex-col mt-5 ">
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562-11/A</h3>
              <p className="text-base text-gray-600 -mt-1">
                kankariy talab, ahmedabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            <i className="text-lg ri-map-pin-line"></i>
            <div>
              <h3 className="text-lg font-medium">562-11/A</h3>
              <p className="text-base text-gray-600 -mt-1">
                kankariy talab, ahmedabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 ">
            {" "}
            <i className=" text-lg ri-cash-line"></i>
            <div>
              <h3 className="text-lg font-medium">$123</h3>
              <p className="text-base text-gray-600 -mt-1">cash</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WaitingForDriver;
