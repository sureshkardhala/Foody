import React, { useState } from "react";
import { BsCaretDownFill } from "react-icons/bs";
import { FiSearch } from "react-icons/fi";
import { TiLocation } from "react-icons/ti";
import { useDispatch } from "react-redux";
import { uiActions } from "../store/ui-slice";
import { locationActions } from "../store/location-slice";

const Locationbar = () => {
  const dispatch = useDispatch();

  const handleLocationScreen = () => {
    dispatch(uiActions.setSlideScreen("location"));
  };

  const handleSearchScreen = () => {
    dispatch(uiActions.setSlideScreen("search"));
  };

  const handleLocations = (e) => {
    e.preventDefault();
    let input = e.target.value;
    if (input.length > 0) {
      dispatch(locationActions.setLocations());
      dispatch(locationActions.searchLocations(input));
      dispatch(uiActions.enableLocations());
    } else {
      dispatch(uiActions.disableLocations());
    }
  };
  const [buttonState, setButtonState] = useState(false);
  const handleButton = () => {
    setButtonState(!buttonState);
    if (buttonState) {
      dispatch(uiActions.disableLocations());
    } else {
      dispatch(uiActions.enableLocations());
    }
  };

  return (
    <>
      <div className="hidden w-full h-5 md:flex bg-white flex-row">
        <span className="text-red-400 hover:text-gray-400 duration-300 cursor-pointer">
          <TiLocation size={20} />
        </span>
        <input
          type="text"
          placeholder="Location"
          className="ml-2 h-full w-40 focus:outline-none focus-within:text-gray-400"
          onChange={handleLocations}
          onClick={handleLocations}
        />
        <span className="text-gray-400 my-1 cursor-pointer hover:text-red-400 hover:rotate-180 duration-400">
          <BsCaretDownFill size={15} />
        </span>
      </div>
      <div className="md:hidden w-full h-fit my-6 mt-8 p-1  flex flex-row justify-between bg-white  text-gray-600 md:flex-row">
        <div className=" h-7">
          <p
            className="flex flex-row space-x-1 px-1"
            onClick={handleLocationScreen}
          >
            <TiLocation size={25} className="text-red-400" />
            <span className="text-xl font-bold ">Agra</span>
          </p>
        </div>
        <div className="w-1/6 h-7 flex justify-center hover:text-red-400">
          <FiSearch size={25} onClick={handleSearchScreen} />
        </div>
      </div>
      
    </>
  );
};

export default Locationbar;
