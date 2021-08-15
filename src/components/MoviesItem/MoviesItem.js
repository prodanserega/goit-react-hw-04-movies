import { Link, useLocation } from "react-router-dom";
import style from "./MoviesItem.module.css";

const MovieItem = ({ movie }) => {
  const location = useLocation();
  return (
    <li className={style.item}>
      <Link
        className={style.link}
        to={{
          pathname: `/movies/${movie.id}`,
          state: { from: useLocation() },
        }}
      >
        {movie.title}
      </Link>
    </li>
  );
};

export default MovieItem;
