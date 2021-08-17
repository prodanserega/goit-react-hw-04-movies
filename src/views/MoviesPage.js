import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getBySearchMovies } from "../services/Api";
import { useHistory, useLocation } from "react-router-dom";
import MoviesList from "../components/MoviesList/MoviesList";
import SearchBar from "../components/SearchMovies/SearchMovies";

const MoviesPage = () => {
  const [movies, setMovies] = useState(null);
  const [query, setQuery] = useState("");
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (location.search === "") {
      return;
    }
    const newSearch = new URLSearchParams(location.search).get("query");
    setQuery(newSearch);
  }, [history, location]);

  useEffect(() => {
    query && getMovies();
  }, [query]);

  const getMovies = () => {
    getBySearchMovies(query).then(({ results }) => {
      if (results.length === 0) {
        toast.error("There are no results. Try another query");
        return;
      }
      setMovies(results);
    });
  };

  const onSubmit = (query) => {
    setQuery(query);
    setMovies([]);
    history.push({ ...location, search: `query=${query}` });
  };

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {movies && <MoviesList movies={movies} data={movies} />}
    </>
  );
};

export default MoviesPage;
