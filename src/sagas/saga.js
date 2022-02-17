import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import {
  FETCH_TRENDING_MOVIES_SUCCESS,
  FETCH_TRENDING_MOVIES_REQUEST,
  FETCH_TRENDING_MOVIES_FAILED,
} from "../redux/types";

const TRENDING_MOVIES_END_POINT =
  process.env.REACT_APP_TRENDING_MOVIES_END_POINT;
const API_KEY = process.env.REACT_APP_API_KEY;

//generater function

function* getTrendingMovies() {
  try {
    console.log(TRENDING_MOVIES_END_POINT, API_KEY);
    const response = yield call(() =>
      axios.get(TRENDING_MOVIES_END_POINT, { params: { api_key: API_KEY } })
    );
    yield put({
      type: FETCH_TRENDING_MOVIES_SUCCESS,
      payload: response.data.results,
    });
  } catch (error) {
    yield put({ type: FETCH_TRENDING_MOVIES_FAILED, payload: error.message });
  }
}

// watcher generater function
function* watcherTrendingMoviesSaga() {
  yield takeEvery(FETCH_TRENDING_MOVIES_REQUEST, getTrendingMovies);
}

export default watcherTrendingMoviesSaga;
