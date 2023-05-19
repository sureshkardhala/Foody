import { createSlice } from "@reduxjs/toolkit";
import img1 from "../assets/items/1.jpg";
import img2 from "../assets/items/2.jpg";
import img3 from "../assets/items/3.jpg";
import img4 from "../assets/items/4.jpg";
import img5 from "../assets/items/5.jpg";

const products = [
  {
    id: 1,
    name: "Idly",
    img: img1,
    restaurant: "Yati",
    location: "Vetlapalem, Kakinada",
    price:40,
    rating: "2.3"
  },
  {
    id: 2,
    name: "Masala Dosa - Special Chetuny",
    img: img2,
    restaurant: "Bakery",
    location: "Samalkota, Kakinada",
    price:60,
    rating: "4.0"

  },
  {
    id: 3,
    name: "Mysore Bonda",
    img: img3,
    restaurant: "Subbayya Hotek",
    location: "Vetlapalem, Kakinada",
    price:70,
    rating: "4.1"

  },
  {
    id: 4,
    name: "Mutton Biryani",
    img: img4,
    restaurant: "Yati",
    location: "Kakinada",
    price:60,
    rating:"4.9"
  },
  {
    id: 5,
    name: "Fry Piece Biryani",
    img: img5,
    restaurant: "Dhaba",
    location: "Rajahmundry, Kakinada",
    price:90,
    rating:"2.3"

  },
  {
    id: 6,
    name: "Mutton Biryani",
    img: img4,
    restaurant: "Yati",
    location: "Kakinada",
    price:120,
    rating:"3.4"

  },
  {
    id: 7,
    name: "Fry Piece Biryani",
    img: img5,
    restaurant: "Dhaba",
    location: "Rajahmundry, Kakinada",
    price:800,
    rating:"3.5"

  },
  {
    id: 8,
    name: "Mutton Biryani",
    img: img4,
    restaurant: "Yati",
    location: "Kakinada",
    price:400,
    rating:"5.0"

  },
  {
    id: 9,
    name: "Fry Piece Biryani",
    img: img5,
    restaurant: "Dhaba",
    location: "Rajahmundry, Kakinada",
    price:8000,
    rating:"4.0"

  },
  {
    id: 10,
    name: "Masala Dosa - Special Chetuny",
    img: img2,
    restaurant: "Bakery",
    location: "Samalkota, Kakinada",
    price:4000,
    rating:"2.0"

  },
  {
    id: 11,
    name: "Masala Dosa - Special Chetuny",
    img: img2,
    restaurant: "Bakery",
    location: "Samalkota, Kakinada",
    price:9000,
    rating:"2.0"
  },
  {
    id: 12,
    name: "Masala Dosa - Special Chetuny",
    img: img2,
    restaurant: "Bakery",
    location: "Samalkota, Kakinada",
    price:40000,
    rating: "3.5"
  },
];
const productSlice = createSlice({
  name: "products",
  initialState: {
    productList: products,
  },
  reducers: {
  },
});

export const productActions = productSlice.actions;
export default productSlice;
