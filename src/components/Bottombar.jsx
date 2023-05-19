import React from 'react';
import {AiFillHome} from "react-icons/ai";
import {MdDeliveryDining} from "react-icons/md"

const Bottombar = () => {
  return (
    <div className="w-full h-fit flex flex-row justify-between bg-gray-50 border-t-[1px] border-gray-200">
        <span><AiFillHome  size={20}/></span>
        <span><MdDeliveryDining size={20} /></span>
    </div>
  )
}

export default Bottombar