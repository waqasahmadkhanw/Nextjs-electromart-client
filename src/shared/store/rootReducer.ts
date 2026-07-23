import { authReducer } from "@/modules/auth/store";
import { combineReducers } from "@reduxjs/toolkit";

// Import feature reducers here
// import authReducer from "@/modules/auth/store/authSlice";

export const rootReducer = combineReducers({
  auth: authReducer,

});