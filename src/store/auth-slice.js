import {createSlice} from '@reduxjs/toolkit';


const authSlice = createSlice({
    name:'auth',
    initialState: {
        isLoggedIn: false,
        newUser:false,
        userInfo:{}
    },
    reducers:{
        setNewUser(state){
            state.newUser = !state.newUser;
        },
        register(state, action){
            state.isLoggedIn=true;
            state.isLoggedIn=true;
            state.userInfo = action.payload;
            console.log(state.userInfo);
        },
        login(state, action){
            state.isLoggedIn=true;
            state.userInfo = action.payload;
            console.log(state.userInfo);
        },
        logout(state){
            state.isLoggedIn= false;
        }
    }
});

export const authActions = authSlice.actions;

export default authSlice;