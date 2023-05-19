import React from 'react'
import { AiOutlineStar } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import { BsCartPlus } from "react-icons/bs";
import { GrLocation } from "react-icons/gr";
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';

const Product = ({id, image, name, rating, location, restaurant, price}) => {
    const dispatch = useDispatch();
    const handleAddToCart = () =>{
        dispatch(cartActions.addToCart({
            id,
            image,
            name,
            rating,
            location,
            restaurant,
            price
        }))
    }
  return (
 <>
    <div className="w-96 md:w-full h-fit  ">
      <img
        src={image}
        className=" h-48  w-full object-fill "
        alt=""
      />
    </div>
    <div className="w-full p-2 space-y-2 mt-4">
      <div className="w-full flex flex-row justify-between ">
        <p className="w-4/6 truncate text-lg font-signature">
          {name}{" "}
        </p>
        <div className="w-18 h-8 bg-green-600 text-white justify-center flex flex-row rounded-lg p-1 px-2 space-x-1">
          <p>{rating}</p>
          <span className="mt-1">
            <AiOutlineStar />
          </span>
        </div>
      </div>
      <div className="w-full flex flex-row justify-between ">
        <div className="w-4/6 flex flex-row">
          <span className=" mr-1 py-1">
            <GrLocation size={18} />
          </span>
          <p className="w-4/6 truncate">
            {restaurant + " , " + location}
          </p>
        </div>
        <p className="w-2/6 flex flex-row px-8">
          <span>
            <BiRupee size={15} className="mt-1" />
          </span>
          {price} 
        </p>
      </div>
      <div>
        <button className="w-full h-9 bg-red-400 text-gray-50 rounded-xl p-1 flex flex-row justify-center "
        onClick={handleAddToCart}>
         <p>Add Item </p>
          <span>
            <BsCartPlus className="mt-1" />
          </span>
        </button>
      </div>
    </div>
  </>
  )
}

export default Product