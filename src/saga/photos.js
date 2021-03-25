import { put, takeLatest, call } from "redux-saga/effects";
import { fetchPhotos, deletePhoto, editPhoto, addPhoto } from "../api/photos";
import type from "../actions/constant";

function* fetchPhotoHandler(action) {
  try {
    const photos = yield call(fetchPhotos, action.payload);
    yield put({ type: type.GET_PHOTO_SUCCESS, payload: photos });
  } catch (error) {
    yield put({ type: type.GET_PHOTO_FAILED });
  }
}

function* deletePhotoHandler(action) {
  try {
    yield call(deletePhoto, action.payload);
  } catch (error) {
    console.log(error);
  }
}

function* editPhotoHandler(action) {
  try {
    yield call(editPhoto, action.payload);
  } catch (error) {
    console.log(error);
  }
}
function* addPhotoHandler(action) {
  try {
    yield call(addPhoto, action.payload);
  } catch (error) {
    console.log(error);
  }
}

function* photSaga() {
  yield takeLatest(type.GET_PHOTO_REQUEST, fetchPhotoHandler);
  yield takeLatest(type.DELETE_PHOTO_REQUEST, deletePhotoHandler);
  yield takeLatest(type.EDIT_PHOTO_REQUEST, editPhotoHandler);
  yield takeLatest(type.ADD_PHOTO_REQUEST, addPhotoHandler);
}

export default photSaga;
