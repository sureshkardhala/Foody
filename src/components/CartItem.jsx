import React from 'react'
import { AiOutlineStar } from "react-icons/ai";
import { BiRupee } from "react-icons/bi";
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';


const CartItem = ({id, image, name, rating, location, restaurant, price, quantity, totalPrice}) => {
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
    const handleFromDeleteCart = () =>{
        dispatch(cartActions.deleteFromCart({
            id,
            quantity
        }))
    }
  return (
    <div>
                <div className="w-full flex flex-row border-b-[1px] border-gray-200 p-1 ">
                <div className="w-1/4 h-fit">
                    <img src={image} alt="" className="w-24 h-18 rounded-xl"/>
                </div>
                <div className="w-3/4 flex flex-col px-2 md:px-0">
                    <div className="w-full flex flex-row justify-between">
                        <p className="w-full md:w-2/3 truncate">{name}</p>
                        <p className="hidden w-1/3 text-xs md:flex flex-row">Price : <span ><BiRupee className="mt-[2px]" /></span>{price}</p>
                    </div>
                    <div className="w-full flex flex-row justify-between">
                        <p className="w-full md:w-2/3 truncate">{restaurant + " " +location}</p>
                        <p className="hidden md:block w-1/3 text-xs">Quantity : {quantity}</p>
                    </div>
                    <div className="flex flex-row  text-white w-12 h-6 p-1 bg-green-600 px-2 rounded-lg text-xs">
                       <p>{rating}</p> <span className="m-[1px]"><AiOutlineStar /></span>
                    </div>
                    <div className="w-full flex flex-row justify-between text-xs md:hidden mt-1">
                        <p className="w-1/2 flex flex-row ">Price :<span ><BiRupee className="m-[1px]"/></span> {price}</p>
                        <p className="w-1/2 ">Quantity : {quantity}</p>
                    </div>
                </div>
                </div>
                <div className="w-full">
                <div className="w-full flex flex-row justify-between my-2">
                        <div className="w-40 h-10 border-[1px] text-gray-500 border-gray-200 font-semibold flex flex-row justify-between py-1 px-4 rounded-2xl">
                            <button className="w-1/3 text-xl rounded-md bg-green-600 text-white duration-300"
                            onClick={handleAddToCart}>+</button>
                            <button className="w-1/3  text-sm">{quantity}</button>
                            <button className="w-1/3 text-xl  rounded-md bg-red-600 text-white duration-300"
                            onClick={handleFromDeleteCart}>-</button>

                        </div>
                        <div className="w-1/3 text-xs h-10 py-3 flex flex-row">Sub Total : <span ><BiRupee className="mt-[2px]"/></span> {totalPrice} </div>
                    </div>

                </div>
            </div>
  )
}

export default CartItem