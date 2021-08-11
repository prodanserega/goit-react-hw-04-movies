import { useState, useEffect } from "react";

import PageHeading from "../components/PageHeading/PageHeading";
import MoviesList from "../components/MoviesList/MoviesList";
import { getTrendingMovies } from "../services/Api";

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    getTrendingMovies().then(({ results }) => setMovies(results));
  }, []);

  return (
    <>
      <PageHeading text="Trending today" />
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default Home;
