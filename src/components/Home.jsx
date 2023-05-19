import React from "react";
import { RxCross2 } from "react-icons/rx";
import { TiLocation } from "react-icons/ti";
import { FiSearch } from "react-icons/fi";
import Navigation from "./Navigation";
import LocationList from "./LocationList";
import SearchList from "./SearchList";
import { useDispatch, useSelector } from "react-redux";
import Locationbar from "./Locationbar";

import { uiActions } from "../store/ui-slice";
import { locationActions } from "../store/location-slice";

import Searchbar from "./Searchbar";
import Products from "./Products";
import CartItems from "./CartItems";

const Home = () => {
  const slideScreen = useSelector((state) => state.ui.slideScreen);
  const enableSearch = useSelector((state) => state.ui.enableSearch);
  const showCart = useSelector((state) => state.ui.showCart);

  // console.log(enableSearch);
  const screen = slideScreen
    ? " h-screen z-40 top-0 md:hidden "
    : " h-0 top-full z-20 ";

  const dispatch = useDispatch();
  const handleScreen = () => {
    dispatch(uiActions.setSlideScreen());
  };
  const enableLocation = useSelector((state) => state.ui.enableLocation);
  const screenTitle = useSelector((state) => state.ui.screenTitle);

  const showSearchItems = useSelector((state) => state.ui.showSearchItems);
  const showLocations = useSelector((state) => state.ui.showLocations);
  // console.log(showSearchItems);
  const handleSearchItems = () => {
    dispatch(uiActions.disableSearchItems());
    dispatch(uiActions.disableLocations());

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
  return (
    <div className="w-full h-fit" onClick={handleSearchItems}>
      <div className="w-full h-fit my-2 relative z-30  border-b-2 border-gray-300 shadow-md rounded-md sm:p-2 md:border-[1px] md:rounded-none md:border-gray-100 md:shadow-sm md:p-0">
        <Navigation />
      </div>
      <div className="md:hidden">
      {!showCart&& <Locationbar />}
      </div>

      <div className="w-full h-full top-auto absolute z-30">
        {showCart &&<CartItems />}
        {!showCart&&<Products />}
      </div>
      <div
        className={
          "w-full  absolute overflow-hidden duration-700 z-20 " + screen
        }
      >
        <div className="w-full h-[10%] bg-black opacity-70  "></div>
        <div className="w-full h-[90%] border-t-[2px] border-gray-600 rounded-2xl bg-white ">
          <div className="w-full h-fit flex flex-row text-gray-500 justify-between p-4 mt-2">
            <span className="text-xl">{screenTitle}</span>
            <span
              className="font-bold hover:text-red-400"
              onClick={handleScreen}
            >
              <RxCross2 size={25} />
            </span>
          </div>
          {enableLocation && !enableSearch && (
            <div className="w-full h-full border-2" onClick={handleSearchItems}>
              <div className="md:hidden w-full h-fit px-3 ">
                <p className="flex flex-row space-x-1 px-1">
                  <TiLocation size={30} className="text-red-400" />
                  <span className="text-xl font-bold ">Agra</span>
                </p>
                <div className="flex flex-row h-fit p-2 px-2 mt-4 text-gray-600 space-x-2 border-[1px] border-gray-500 rounded-3xl">
                  <span className="m-1">
                    <FiSearch size={22} />
                  </span>
                  <input 
                  type="text"
                  placeholder="Enter your location"
                  onChange={handleLocations}
                  className="w-full h-6 focus:outline-none text-xl" />
                </div>
                <div>
                  <LocationList />
                </div>
              </div>
            </div>
          )}

          {enableSearch && (
            <div className="w-full h-full border-2">
              <div className="md:hidden w-full h-fit px-3 ">
                <Searchbar />
                <div className="mt-2">
                  <SearchList />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="hidden w-1/2 mx-auto h-full md:flex flex-wrap duration-300 bg-transparent relative z-40">
        {showLocations && (
          <div className="w-1/2 h-fit bg-white">
            <LocationList />
          </div>
        )}
        <div className="w-1/3"></div>
        {showSearchItems && (
          <div className="w-2/3 h-fit bg-white">
            <SearchList />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
