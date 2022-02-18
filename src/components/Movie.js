const BASE_IMAGE_URL = process.env.REACT_APP_BASE_IMAGE_URL;

export function Movie({ movie }) {
  return (
    <div className="movie">
      <img src={BASE_IMAGE_URL + movie.poster_path}  alt="cover" />
      <div className="movie_info">
        <h5>{movie.original_title || movie.title || movie.name}</h5> 
      </div>

      <div className="movie_overview">
       <h2> overview:</h2>
      <p>{movie.overview}</p> 
      </div>
      
    </div>
  )
}

export default Movie;