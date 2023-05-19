import React from "react";
import { useSelector } from "react-redux";
import Product from "./Product";


const Products = () => {
  const productList = useSelector((state) => state.products.productList);
 

  return (
    <>
    <ul className="w-full h-full flex flex-wrap justify-center mt-6  sm:px-2 md:px-20">
      {productList.map((product) => (
      <li
      className="w-92 md:w-80 border-[2px] border-gray-300 h-fit flex flex-col cursor-pointer rounded-2xl mx-4 my-6 md:my-8 overflow-hidden "
      key={product.id}>  
      <Product 
            id ={product.id}
            image = {product.img}
            name = {product.name}
            rating = {product.rating}
            location = {product.location}
            restaurant ={product.restaurant}
            price={product.price}
        />
         </li>
      ))}
    </ul>
  </>
  );
};

export default Products;
