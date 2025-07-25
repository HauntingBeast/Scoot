import React, { useRef, useState } from "react";
import logo2 from "../assets/logo.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";
const Home = () => {
  const [pickup, setpickup] = useState("");
  const [destination, setdestination] = useState("");
  const [panelOpen, setpanelOpen] = useState(false);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false);
  const [confirmedRidePanel, setconfirmedRidePanel] = useState(false);
  const vehiclePanelRef = useRef(null);
  const [waitingForDriver, setwaitingForDriver] = useState(false);
  const [lookingForDriver, setlookingForDriver] = useState(false);
  const confirmedRideRef = useRef(null);
  const lookingForDriverRef = useRef(null);
  const waitingForDriverRef = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
  };
  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          opacity: 1,
          padding: 15,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          opacity: 0,
          padding: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      if (vehiclePanelOpen) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanelOpen]
  );

  useGSAP(
    function () {
      if (confirmedRidePanel) {
        gsap.to(confirmedRideRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(confirmedRideRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmedRidePanel]
  );

  useGSAP(
    function () {
      if (lookingForDriver) {
        gsap.to(lookingForDriverRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(lookingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [lookingForDriver]
  );
  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriver]
  );

  return (
    <div className="h-screen relative overflow-hidden">
      <img className="w-40 absolute top-5" src={logo2} alt="logo" />
      <div
        onClick={() => {
          setVehiclePanelOpen(false);
        }}
        className="h-screen w-screen"
      >
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt="map"
        />
      </div>
      <div className=" flex flex-col justify-end absolute h-screen top-0 w-full ">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            ref={panelCloseRef}
            className="absolute top-3 right-4 text-3xl opacity-0 "
            onClick={() => {
              setpanelOpen(false);
            }}
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a Trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="relative">
              <div className="line absolute h-16 w-1 top-[33%] left-[4%] bg-gray-900 rounded-full"></div>
              <input
                className="bg-[#eee] px-12 py-2 text-base rounded-lg mt-5 w-full"
                type="text"
                value={pickup}
                onClick={() => {
                  setpanelOpen(true);
                }}
                onChange={(e) => {
                  setpickup(e.target.value);
                }}
                placeholder="Add a pick up location"
              />
              <input
                className="bg-[#eee] px-12 py-2 text-base rounded-lg mt-3 w-full"
                type="text"
                placeholder="Enter your Destination"
                onClick={() => {
                  setpanelOpen(true);
                }}
                value={destination}
                onChange={(e) => {
                  setdestination(e.target.value);
                }}
              />
            </div>
          </form>
        </div>
        <div ref={panelRef} className=" bg-white h-0 opacity-0">
          <LocationSearchPanel
            setpanelOpen={setpanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="fixed z-10 bottom-0 bg-white p-3 translate-y-full w-full px-3 py-10 pt-12"
      >
        <VehiclePanel
          setVehiclePanelOpen={setVehiclePanelOpen}
          setconfirmedRidePanel={setconfirmedRidePanel}
        />
      </div>
      <div
        ref={confirmedRideRef}
        className="fixed z-10 bottom-0 bg-white p-3 translate-y-full w-full px-3 py-6 pt-12"
      >
        <ConfirmedRide
          setconfirmedRidePanel={setconfirmedRidePanel}
          setlookingForDriver={setlookingForDriver}
        />
      </div>
      <div
        ref={lookingForDriverRef}
        className="fixed z-10 bottom-0 bg-white p-3 translate-y-full w-full px-3 py-6 pt-12"
      >
        <LookingForDriver setlookingForDriver={setlookingForDriver} />
      </div>
      <div
        ref={waitingForDriverRef}
        className="fixed z-10 bottom-0 bg-white p-3 translate-y-full w-full px-3 py-6 pt-12"
      >
        <WaitingForDriver setwaitingForDriver={setwaitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
