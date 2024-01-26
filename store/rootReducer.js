import { combineReducers } from "@reduxjs/toolkit";
import { counterReducer } from "./slices/counterSlice";
import { galleryReducer } from "./slices/gallerySlice";

const rootReducer = combineReducers({
  counter: counterReducer,
  gallery: galleryReducer,
});

export default rootReducer;
