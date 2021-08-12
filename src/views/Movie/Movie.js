import { useState, useEffect } from "react";
import { useParams, useHistory, useLocation } from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";
import style from "../Movie/Movie.module.css";

import { getMovieDetails } from "../../services/Api";

const Movie = () => {
  const history = useHistory();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    getMovieDetails(movieId).then((movie) => setMovie(movie));
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/");
  };

  return (
    <>
      <button type="button" onClick={onGoBack} className={style.btn}>
        Go back
      </button>
      {movie && (
        <>
          <MovieCard movie={movie} />
        </>
      )}
    </>
  );
};

export default Movie;
