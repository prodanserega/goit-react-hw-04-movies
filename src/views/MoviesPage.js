import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getBySearchMovies } from "../services/Api";

import MoviesList from "../components/MoviesList/MoviesList";
import SearchBar from "../components/SearchMovies/SearchMovies";

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [value, setValue] = useState("");

  useEffect(() => {
    if (!value) {
      return;
    }
    getBySearchMovies(value).then(({ results }) => {
      if (results.length === 0) {
        toast.error("There are no results. Try another value");
        return;
      }
      setMovies(results);
      toast.success("Movies on your value");
    });
  }, [value]);

  const onSubmit = (value) => {
    setValue(value);
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
