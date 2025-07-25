import React from "react";

const LocationSearchPanel = (props) => {
  // console.log(props);

  const locations = [
    "B49, Vyas Nagar, Patna, Magistrate Colony, Patna",
    "Sector 12, Noida",
    "1st Cross, Malleswaram, Bengaluru",
    "Flat 203, Laxmi Heights, Kothrud, Pune",
  ];
  return (
    <div>
      {locations.map(function (elem, idx) {
        return (
          <div
            key={idx}
            onClick={() => {
              props.setVehiclePanelOpen(true);
              props.setpanelOpen(false);
            }}
            className="flex items-center border-2 active:border-black gap-2 rounded-lg px-2 pt-1 border-gray-50  justify-start pb-1 mt23 "
          >
            <h2 className="bg-[#eee] h-8 w-8 flex items-center justify-center rounded-full">
              <i className="ri-map-pin-2-line "></i>
            </h2>
            <h4 className="font-medium">{elem}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
