import React from "react";
import { useSelector } from "react-redux";

const SearchList = () => {
  const searchList = useSelector((state) => state.items.searchList);
  const searchItemsFound = useSelector((state) => state.items.searchItemsFound);
  const searchListSize = useSelector((state) => state.items.searchListSize);
  const showSearchItems = useSelector((state) => state.ui.showSearchItems);
  const overflowCondition =
    searchListSize > 4
      ? " overflow-y-scroll h-96 scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 "
      : " h-fit ";
  // console.log(showSearchItems);
  return (
    <>
      {showSearchItems && (
        <div
          className={
            "w-full p-3 flex flex-col space-y-2 border-gray-100 md:shadow-md  md:border-[1px] rounded-xl" +
            overflowCondition
          }
        >
          {searchList.map((item) => (
            <div
              key={item.id}
              className="w-full h-24 flex flex-wrap justify-center border-gray-200 border-[1px]  items-center cursor-pointer p-2 rounded-2xl"
            >
              <div className="w-1/4 h-fit items-center justify-center cursor-pointer">
                <img src={item.img} alt="item" className="w-24 rounded-lg" />
              </div>
              <div className="w-3/4 flex flex-col px-1">
                <p className="font-signature font-semibold">{item.name}</p>
                <p>{item.restaurant}</p>
                <p>{item.location}</p>
                <p></p>
              </div>
            </div>
          ))}
          {!searchItemsFound && (
            <div>
              <p>No result found !</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default SearchList;
