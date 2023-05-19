import React from "react";
import { useSelector } from "react-redux";
import { BiRupee } from "react-icons/bi";
import CartItem from "./CartItem";

const CartItems = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const TotalPrice = useSelector((state) => state.cart.TotalPrice);
  const noItemsFound = totalQuantity > 0 ? false : true;

  return (
    <div className="w-full h-fit flex flex-wrap md:justify-between sm:p-2 md:p-4 bg-gray-200 md:px-40">
        <ul className="w-full h-fit md:w-2/3 flex flex-wrap p-2 border-[1px] border-gray-200 justify-center ">
           {cartItems.map((item) =>(
            <li 
            key={item.id}
            className="w-full md:w-2/3 flex flex-col border-[1px] border-gray-300 p-1 rounded-md shadow-xl bg-white mt-4">
            <CartItem  
            id ={item.id}
            image = {item.image}
            name = {item.name}
            rating = {item.rating}
            location = {item.location}
            restaurant ={item.restaurant}
            price={item.price}
            quantity={item.quantity}
            totalPrice={item.totalPrice}
            />
            </li> 
            ))}
            {
              noItemsFound &&
              <li className="w-full md:w-2/3 flex flex-col border-[1px] border-gray-300 rounded-md shadow-xl bg-white mt-4 p-4">
                No items found in cart
              </li>
            }
        </ul>
        <div className="w-full h-fit md:w-1/4 border-[1px] shadow-xl border-gray-200 bg-white rounded-lg p-4 py-10 md:ml-2 m-0">
            <div className="w-full flex flex-row ">
                Subtotal ({totalQuantity} items) : <span className="py-1"><BiRupee /></span>{TotalPrice} 
            </div>
            <button className="w-full border-gray-200 border-[1px] mt-6 h-10 rounded-xl bg-yellow-300 text-sm">Proceed to Buy</button>
        </div>

    </div>
  );
};

export default CartItems;