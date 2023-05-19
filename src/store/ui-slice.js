import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    slideScreen: false,
    enableLocation: false,
    enableSearch: false,
    enableFilter: false,
    enableProfile: false,
    screenTitle: "",
    showSearchItems: false,
    showLocations: false,
    showCart: false,
  },
  reducers: {
    setSlideScreen(state, action) {
      state.slideScreen = !state.slideScreen;
      if (action.payload === "location") {
        state.enableLocation = !state.enableLocation;
        state.screenTitle = "Search Location";
      }
      if (action.payload === "search") {
        state.enableSearch = !state.enableSearch;
        state.screenTitle = "Search your favourite item";
      }
      if (action.payload === "profile") {
        state.enableProfile = !state.enableProfile;
        state.screenTitle = "";
      }
      if (action.payload === "filter") {
        state.enableFilter = !state.enableFilter;
        state.screenTitle = "";
      }
      if (action.payload === undefined || action.payload === null) {
        state.enableFilter = false;
        state.enableLocation = false;
        state.enableProfile = false;
        state.enableSearch = false;
        state.screenTitle = "";
      }
    },
    enableSearchItems(state) {
      state.showSearchItems = true;
    },
    disableSearchItems(state) {
      state.showSearchItems = false;
    },
    enableLocations(state) {
      state.showLocations = true;
    },
    disableLocations(state) {
      state.showLocations = false;
    },
    setShowCart(state) {
      state.showCart = !state.showCart;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;
