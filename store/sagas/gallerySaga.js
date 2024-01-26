import { call, put, takeLatest } from "redux-saga/effects";
import { galleryActionTypes, galleryActions } from "../slices/gallerySlice";
import GalleryService from "../services/GalleryService";

export const fetchGallery = function* (action) {
  try {
    const response = yield call(GalleryService.fetchImages);
    console.log("first response", response.data);
    yield put(galleryActions.getImages(response?.data.slice(0, 10)));
  } catch (errors) {
    console.log("Error");
  } finally {
    console.log("first Finally");
  }
};

export default function* gallerySaga() {
  yield takeLatest(galleryActionTypes.GET_IMAGES, fetchGallery);
}
