import { useState, useEffect, Suspense } from "react";
import {
  Switch,
  Route,
  NavLink,
  useParams,
  useHistory,
  useLocation,
  useRouteMatch,
} from "react-router-dom";
import MovieCard from "../../components/MovieCard/MovieCard";
import style from "../Movie/Movie.module.css";
import Cast from "../../components/Cast/Cast";
import Reviews from "../../components/Reviews/Reviews";
import { getMovieDetails } from "../../services/Api";

const Movie = () => {
  const history = useHistory();
  const location = useLocation();
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const { url } = useRouteMatch();

  useEffect(() => {
    getMovieDetails(movieId).then((movie) => setMovie(movie));
  }, [movieId]);

  const onGoBack = () => {
    history.push(location?.state?.from ?? "/");
    return;
  };

  return (
    <>
      {movie && (
        <>
          <button type="button" onClick={onGoBack} className={style.btn}>
            Go back
          </button>
          <div>
            <MovieCard movie={movie} />
            <h4 className={style.add_title}>Additional information:</h4>
            <NavLink
              to={{
                pathname: `${url}/cast`,
                state: { from: location?.state?.from ?? "/" },
              }}
              className={style.link}
              activeClassName={style.active}
            >
              Cast
            </NavLink>
            <NavLink
              to={{
                pathname: `${url}/reviews`,
                state: { from: location?.state?.from ?? "/" },
              }}
              className={style.link}
              activeClassName={style.active}
            >
              Reviews
            </NavLink>
          </div>

          <Suspense>
            <Switch>
              <Route path="/movies/:movieId/cast">
                <Cast />
              </Route>
              <Route path="/movies/:movieId/reviews">
                <Reviews />
              </Route>
            </Switch>
          </Suspense>
        </>
      )}
    </>
  );
};

export default Movie;
