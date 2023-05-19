import { createSlice } from "@reduxjs/toolkit";
import img1 from "../assets/items/1.jpg";
import img2 from "../assets/items/2.jpg";
import img3 from "../assets/items/3.jpg";
import img4 from "../assets/items/4.jpg";
import img5 from "../assets/items/5.jpg";

const items = [
  {
    id: 1,
    name: "Idly",
    img: img1,
    restaurant: "Yati",
    location: "Vetlapalem, Kakinada",
  },
  {
    id: 2,
    name: "Masala Dosa - Special Chetuny",
    img: img2,
    restaurant: "Bakery",
    location: "Samalkota, Kakinada",
  },
  {
    id: 3,
    name: "Mysore Bonda",
    img: img3,
    restaurant: "Subbayya Hotek",
    location: "Vetlapalem, Kakinada",
  },
  {
    id: 4,
    name: "Mutton Biryani",
    img: img4,
    restaurant: "Yati",
    location: "Kakinada",
  },
  {
    id: 5,
    name: "Fry Piece Biryani",
    img: img5,
    restaurant: "Dhaba",
    location: "Rajahmundry, Kakinada",
  },
  {
    id: 6,
    name: "Mutton Biryani",
    img: img4,
    restaurant: "Yati",
    location: "Kakinada",
  },
  {
    id: 7,
    name: "Fry Piece Biryani",
    img: img5,
    restaurant: "Dhaba",
    location: "Rajahmundry, Kakinada",
  },
  {
    id: 8,
    name: "Mutton Biryani",
    img: img4,
    restaurant: "Yati",
    location: "Kakinada",
  },
  {
    id: 9,
    name: "Fry Piece Biryani",
    img: img5,
    restaurant: "Dhaba",
    location: "Rajahmundry, Kakinada",
  },
  {
    id: 10,
    name: "Masala Dosa - Special Chetuny",
    img: img2,
    restaurant: "Bakery",
    location: "Samalkota, Kakinada",
  },
  {
    id: 11,
    name: "Masala Dosa - Special Chetuny",
    img: img2,
    restaurant: "Bakery",
    location: "Samalkota, Kakinada",
  },
  {
    id: 12,
    name: "Masala Dosa - Special Chetuny",
    img: img2,
    restaurant: "Bakery",
    location: "Samalkota, Kakinada",
  },
];
const itemSlice = createSlice({
  name: "items",
  initialState: {
    searchList: [],
    itemsList: items,
    searchListSize: 0,
    searchItemsFound : false,
    showSearch:false,
    item: {
      id: 0,
      name: "",
      restaurant: "",
      location: "",
      image: "",
    },
  },
  reducers: {
    searchItems(state, action) {
      state.searchList = state.itemsList.filter((item) => {
        const itemName = item.name.toLocaleLowerCase().replace(" ", "");
        const input = action.payload.toLocaleLowerCase().replace(" ", "");
        return itemName.includes(input);
      });
      state.searchListSize = state.searchList.length;
      state.searchItemsFound =  state.searchListSize > 0  ? true : false;
      state.showSearch = true;
    },
  },
});

export const itemActions = itemSlice.actions;
export default itemSlice;
