import { createSlice } from "@reduxjs/toolkit";

const locations = [
    {
        id:1,
        name: "Railway Station",
        address : "Kakinada , Andhraoradesh"
    },
    {
        id:2,
        name: "Chraminar Hyderabad",
        address : "Telangana, India"
    },
    {
        id:3,
        name: "Samarlakota",
        address : "Kakinada , Andhraoradesh"
    },
    {
        id:4,
        name: "Vetlapalem",
        address : "Kakinada , Andhraoradesh"
    },
    {
        id:5,
        name: "Patna",
        address : "Bihar, India"
    }
];


const locationSlice = createSlice({
    name: "location",
    initialState:{
        locationList : [],
        noOfLocationsInList : 0,
        locationsFound: false,
        allLocations : [],
    },
    reducers:{
        setLocations(state){
            state.allLocations = locations;
        },

        searchLocations(state, action){
            state.locationList = state.allLocations.filter((location) =>{
                const locationName = location.name.toLocaleLowerCase();
                // const address = location.address.toLocaleLowerCase();

                const input = action.payload.toLocaleLowerCase();
                return locationName.includes(input) ;
            });

            state.noOfLocationsInList = state.locationList.length;
            state.locationsFound = state.noOfLocationsInList >0 ? true : false;

        },
    }
});

export const locationActions = locationSlice.actions;

export default locationSlice;