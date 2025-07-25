import React from "react";

const ConfirmedRide = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setconfirmedRidePanel(false);
        }}
        className="p-1 text-center absolute top-0 w-[93%]"
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-400"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm your ride</h3>
      <div className="flex justify-between flex-col items-center gap-2">
        {" "}
        <img
          className="h-20"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt="car"
        />
        <div className="w-full flex flex-col mt-5 ">
          <div className="flex items-center gap-5 p-3 border-b-2">
            {" "}
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562-11/A</h3>
              <p className="text-base text-gray-600 -mt-1">
                kankariy talab, ahmedabad
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5 p-3 border-b-2">
            {" "}
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
        <button
          onClick={() => {
            props.setconfirmedRidePanel(false);
            props.setlookingForDriver(true);
          }}
          className="w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg "
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmedRide;
