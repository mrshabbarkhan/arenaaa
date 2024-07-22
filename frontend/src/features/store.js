import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import projectReducer from "./project/projectSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    project: projectReducer,
  },
});

export default store;
