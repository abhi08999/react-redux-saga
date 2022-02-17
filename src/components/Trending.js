import React, { useEffect } from 'react';
import Movie from './Movie';
import Loading from './Loading';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTrendingMoviesRequest } from '../redux/action';
import Error from './Error';



export function Trending() {

    const dispatch = useDispatch();
    const data = useSelector(state => state.trendingMovieReducer)
    useEffect(() => {
        dispatch(fetchTrendingMoviesRequest());
    }, [dispatch]);

    return (
        <section className='d-flex justify-content-around bg-secondary flex-wrap m-auto'>
            {data.loading && <Loading />}
            {!data.loading && data.error && <Error message={data.message} />}
            {!data.loading && !data.error && data.data.map((movie => < Movie key="{data.id}" movie={movie} />))}
        </section>
    )
}
export default Trending;