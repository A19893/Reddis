import { createSlice } from "@reduxjs/toolkit";
const initialState={
    isAuth:false,
}

export const AuthSlice=createSlice({
    name:"Authentication",
    initialState:initialState,
    reducers:{
        isAuthenticate:(state,action)=>{
            state.isAuth=true;
        },
        removeAuthenticate:(state,action)=>{
            state.isAuth=false;
        }
    }
})
export const {isAuthenticate}=AuthSlice.actions;
export default AuthSlice.reducer;