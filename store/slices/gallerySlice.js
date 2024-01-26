import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  images: [],
};

export const gallerySlice = createSlice({
  name: "gallery",
  initialState,
  reducers: {
    getImages: (state, action) => {
      state.images = action.payload;
    },
  },
});

export const galleryActions = gallerySlice.actions;
export const galleryReducer = gallerySlice.reducer;

export const galleryActionTypes = {
  GET_IMAGES: "gallery/GET_IMAGES",
};
