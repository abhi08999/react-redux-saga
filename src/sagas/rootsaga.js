import { all } from 'redux-saga/effects';
import watcherTrendingMoviesSaga from './saga';


export default function* rootSaga() {
    yield all([watcherTrendingMoviesSaga()])
}