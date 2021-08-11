import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const KEY = "053386d3f650ced58f98586754740b55";
const BASE_URL = "https://api.themoviedb.org/3";

async function getTrendingMovies() {
  const { data } = await axios
    .get(`${BASE_URL}/trending/movie/day?api_key=${KEY}`)
    .then((data) => data)
    .catch(function (error) {
      toast.error(error);
    });
  return data;
}

async function getBySearchMovies(searchQuery, page = 1) {
  const { data } = await axios
    .get(
      `${BASE_URL}/search/movie?api_key=${KEY}&query=${searchQuery}&page=${page}include_adult=false`
    )
    .then((data) => data)
    .catch(function (error) {
      toast.error(error);
    });
  return data;
}

async function getMovieDetails(movieId) {
  const { data } = await axios
    .get(`${BASE_URL}/movie/${movieId}?api_key=${KEY}&language=en-US`)
    .then((data) => data)
    .catch(function (error) {
      toast.error(error);
    });
  return data;
}

async function getCastMovies(movieId) {
  const { data } = await axios
    .get(`${BASE_URL}/movie/${movieId}/credits?api_key=${KEY}&language=en-US`)
    .then((data) => data);

  return data.cast;
}

async function getReviewsMovies(movieId, page = 1) {
  const { data } = await axios
    .get(
      `${BASE_URL}/movie/${movieId}/reviews?api_key=${KEY}&language=en-US&page=${page}`
    )
    .then((data) => data);

  return data.results;
}

export {
  getTrendingMovies,
  getBySearchMovies,
  getCastMovies,
  getMovieDetails,
  getReviewsMovies,
};
