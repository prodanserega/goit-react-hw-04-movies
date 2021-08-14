import style from "../MovieCard/MovieCard.module.css";
// import { BASE_IMAGE_URL } from "../../services/Api";

const MovieCard = ({ movie }) => {
  return (
    <div>
      {/* <img
        className={style.img}
        src={`${BASE_IMAGE_URL}${movie.poster_path}`}
        alt={movie.original_title}
        width="300"
      /> */}
      <div className={style.info}>
        <h2>{movie.original_title}</h2>
        <p className={style.info_item}>
          User score:
          <span className={style.info_sum}>{movie.vote_average}</span>
        </p>
        <p className={style.info_item}>
          Overview:
          <span className={style.info_sum}>{movie.overview}</span>
        </p>
        <p className={style.info_item}>
          Genres:
          <span className={style.info_sum}>
            {movie.genres.map((genre) => genre.name).join(" / ")}
          </span>
        </p>
      </div>
    </div>
  );
};

export default MovieCard;
