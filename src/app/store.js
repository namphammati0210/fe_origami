import { configureStore } from "@reduxjs/toolkit";
import authReducer from "features/auth/loggedInSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
