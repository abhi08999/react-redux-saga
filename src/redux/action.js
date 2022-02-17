import { FETCH_TRENDING_MOVIES_FAILED, FETCH_TRENDING_MOVIES_REQUEST, FETCH_TRENDING_MOVIES_SUCCESS } from './types';


export const fetchTrendingMoviesRequest = () => {
    return {
        type: FETCH_TRENDING_MOVIES_REQUEST
    }
}

export const fetchTrendingMoviesSuccess = (data) => {
    return {
        type: FETCH_TRENDING_MOVIES_SUCCESS,
        payload: data
    }
}

export function fetchTrendingMoviesFailed(message) {
    return {
        type: FETCH_TRENDING_MOVIES_FAILED,
        payload: message
    }
}
