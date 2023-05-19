import React from "react";
import { FiSearch } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { itemActions } from "../store/items-slice";
import { uiActions } from "../store/ui-slice";

const Searchbar = () => {
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    e.preventDefault();
    let input = e.target.value;
    if (input.length > 0) {
      dispatch(itemActions.searchItems(input));
      dispatch(uiActions.enableSearchItems());
    } else {
      dispatch(uiActions.disableSearchItems());
    }
  };
  return (
    <>
      <div className="hidden w-full  bg-white h-5 md:flex flex-row-reverse space-x-3 md:flex-row ">
        <button
          type="submit"
          className="w-[5%] hover:text-red-400 duration-300"
        >
          <FiSearch size={22} />
        </button>
        <input
          type="text"
          placeholder="Search for restaurant, cusine or dish"
          className="w-[90%] ml-1  focus:outline-none"
          onChange={handleSearch}
          onClick={handleSearch}
        />
      </div>
      <div className="flex flex-row h-fit p-2 px-2 mt-4 text-gray-600 space-x-2 border-[1px] border-gray-500 rounded-3xl md:hidden ">
        <span className="m-1">
          <FiSearch size={22} />
        </span>
        <input
          type="text"
          placeholder="Search for restaurant, cusine or dish"
          className="w-full h-6 focus:outline-none text-xl"
          onChange={handleSearch}
          onClick={handleSearch}
        />
      </div>
    </>
  );
};

export default Searchbar;
