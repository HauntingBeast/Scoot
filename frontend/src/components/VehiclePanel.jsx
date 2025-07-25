import React from "react";

const VehiclePanel = (props) => {
  return (
    <div>
      <h5
        onClick={() => {
          props.setVehiclePanelOpen(false);
        }}
        className="p-1 text-center absolute top-0 w-[93%]"
      >
        <i className="ri-arrow-down-wide-line text-3xl text-gray-500"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Choose a vehicle</h3>
      <div
        onClick={() => {
          props.setconfirmedRidePanel(true);
          props.setVehiclePanelOpen(false);
        }}
        className="flex items-center justify-between p-3 mb-2  w-full border-2 bg-gray-100 active:border-black rounded-xl"
      >
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,w_956,h_637/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt="car"
        />
        <div className="w-1/2">
          <h4 className="font-medium text-base  ">
            Bike{" "}
            <span>
              {" "}
              <i className="ri-user-3-fill">4</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            Ride through the traffic
          </p>
        </div>
        <h2 className="font-semibold text-lg">$193</h2>
      </div>
      <div
        onClick={() => {
          props.setconfirmedRidePanel(true);
          props.setVehiclePanelOpen(false);
        }}
        className="flex items-center justify-between p-3 mb-2  w-full border-2 bg-gray-100 active:border-black rounded-xl"
      >
        <img
          className="h-12"
          src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png"
          alt="auto"
        />
        <div className="w-1/2">
          <h4 className="font-medium text-base  ">
            Auto{" "}
            <span>
              {" "}
              <i className="ri-user-3-fill">4</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            affordable usual rides
          </p>
        </div>
        <h2 className="font-semibold text-lg">$193</h2>
      </div>
      <div
        onClick={() => {
          props.setconfirmedRidePanel(true);
          props.setVehiclePanelOpen(false);
        }}
        className="flex items-center justify-between p-3 mb-2  w-full border-2 bg-gray-100 active:border-black rounded-xl"
      >
        <img
          className="h-12"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt="car"
        />
        <div className="w-1/2">
          <h4 className="font-medium text-base  ">
            Mini{" "}
            <span>
              {" "}
              <i className="ri-user-3-fill">4</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-normal text-xs text-gray-600">
            affordable compact rides
          </p>
        </div>
        <h2 className="font-semibold text-lg">$193</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;
