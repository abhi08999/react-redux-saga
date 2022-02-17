import { FETCH_TRENDING_MOVIES_FAILED, FETCH_TRENDING_MOVIES_REQUEST, FETCH_TRENDING_MOVIES_SUCCESS } from './types';

const initialState = {
    loading: false,
    data: [],
    error: null
}

const trendingMovieReducer = (state = initialState, action) => {

    switch (action.type) {
        case FETCH_TRENDING_MOVIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_TRENDING_MOVIES_SUCCESS:
            return {
                ...state,
                data: action.payload,
                loading: false
            }
        case FETCH_TRENDING_MOVIES_FAILED:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default trendingMovieReducer;