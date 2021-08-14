import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getBySearchMovies } from "../../src/services/Api";

import MoviesList from "../components/MoviesList/MoviesList";
import SearchBar from "../components/SearchMovies/SearchMovies";

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!query) {
      return;
    }
    getBySearchMovies(query).then(({ results }) => {
      if (results.length === 0) {
        toast.error("There are no results. Try another query");
        return;
      }
      setMovies(results);
      toast.success("Movies on your query");
    });
  }, [query]);
  console.log(getBySearchMovies);
  const onSubmit = (query) => {
    setQuery(query);
    setMovies([]);
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {movies && <MoviesList movies={movies} />}
    </>
  );
};

export default MoviesPage;
