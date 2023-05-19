import React from "react";
import { FaUserAlt } from "react-icons/fa";
import {AiOutlineShoppingCart} from "react-icons/ai";
import Searchbar from "./Searchbar";
import Locationbar from "./Locationbar";
import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../store/ui-slice";

const Navigation = () => {
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const handleScreen = () => {
    dispatch(uiActions.setSlideScreen());
  };
  const handleShowCart = () =>{
    dispatch(uiActions.setShowCart());
  }
  return (
    <div className="w-full h-fit ">
      <div className="w-full h-fit py-3 flex flex-wrap justify-between relative">
        <div className="hidden w-[15%] md:block"></div>
        <div className="w-[10%] h-12  px-4 md:px-0  py-2 ">
          <p className="font-signature font-semibold text-3xl hover:scale-x-105 cursor-pointer hover:text-red-400 duration-300 ">
            Foody
          </p>
        </div>
        <div className="hidden w-[50%] h-fit p-1 py-3 m-auto md:flex flex-wrap text-gray-500 rounded-xl bg-white border-[1px] border-gary-400 ">
          <div className="w-1/3 px-2 border-r-[1px] border-gray-300 flex flex-wrap">
            <Locationbar />
          </div>
          <div className="w-2/3 px-2 border-l-[1px] border-gray-300">
            <Searchbar />
          </div>
        </div>
        <div className="md:w-[25%] h-12 flex md:justify-center space-x-16 p-2 px-4 md:p-2 text-gray-500  font-light">
          {isLoggedIn && <button className="hidden md:block text-lg duration-300 hover:text-red-400">
            Log in
          </button>}{isLoggedIn &&
          <button className="hidden md:block text-lg duration-300 hover:text-red-400">
            Sign up
          </button> }
          <div
            onClick={handleShowCart}
            className=" w-fit h-fit rounded-full flex flex-row cursor-pointer"
          >
            
            <span className="text-red-500">
              <AiOutlineShoppingCart size={30} />
            </span>
            <p className="-mt-3 bg-red-600 text-white text-center text-xs p-[2px] w-5 h-5 rounded-full animate-pulse">
              {totalQuantity}
            </p>
          </div>
          <div
            onClick={handleScreen}
            className=" w-fit h-fit rounded-full border-2 border-red-300 p-2 cursor-pointer"
          >
            <span className="text-red-400">
              <FaUserAlt size={20} />
            </span>
          </div>
        </div>
        {/* <div className="w-[10%]"></div> */}
      </div>
    </div>
  );
};

export default Navigation;
