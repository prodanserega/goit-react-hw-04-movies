import MoviesItem from "../MoviesItem/MoviesItem";

import style from "./MoviesList.module.css";

const MoviesList = ({ movies }) => {
  return (
    <ul className={style.list}>
      {movies.map((movie) => (
        <MoviesItem movie={movie} key={movie.id} />
      ))}
    </ul>
  );
};

export default MoviesList;
