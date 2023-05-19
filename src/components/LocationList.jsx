import React from "react";
import { IoLocation } from "react-icons/io5";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MdOutlineMyLocation } from "react-icons/md";
import { useSelector } from "react-redux";

const LocationList = () => {
  const style =
    "w-full border-[1px] border-gray-100 rounded-xl p-2 cursor-pointer text-gray-600";
  const locationsFound = useSelector((state) => state.location.locationsFound);
  const locationList = useSelector((state) => state.location.locationList);
//   console.log(locationList);

  return (
    <div className="mt-3 md:m-0 w-full h-fit p-3 flex flex-col space-y-2 md:border-gray-300 md:shadow-md border-[1px] rounded-xl">
      {!locationsFound && (
        <div className={style}>
          <p className="flex flex-row ">
            <MdOutlineMyLocation className="text-red-500 mt-1" size={20} />
            <span className=" ml-1 mt-0">
              Detect Current Location
            </span>{" "}
          </p>
          <p className="mx-2 text-gray-400 text-sm">Use GPS</p>
        </div>
      )}
      {!locationsFound && (
        <div className={style + " mt-10"}>
          <p className="text">Recent Locations</p>
          <div className="flex flex-col mx-1 my-2">
            <p className="flex flex-row">
              <AiOutlineClockCircle className="mt-1" size={17} />
              <span className="ml-1 ">Kakinada, India</span>{" "}
            </p>
          </div>
        </div>
      )}

      {locationList.map((location) => (
        <div
          key={location.id}
          className="w-full border-[1px] border-gray-100 rounded-xl p-2 cursor-pointer text-gray-600"
        >
          <p className="flex flex-row ">
            <IoLocation className=" mt-1 text-red-400" size={15} />
            <span className=" mt-0 ">{location.name}</span>{" "}
          </p>
          <p className="text-gray-500 text-sm mx-0">{location.address}</p>
        </div>
      ))}
    </div>
  );
};

export default LocationList;
