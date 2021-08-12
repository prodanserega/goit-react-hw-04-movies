import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  api_key: "e0f5a2b3f12c3f7ea9352edce7e33432",

  page: 1,
};

async function getTrendingMovies() {
  const { data } = await axios
    .get(`/trending/movie/day?`)
    .then((data) => data)
    .catch(function (error) {
      toast.error(error);
    });
  return data;
}

async function getBySearchMovies(searchQuery, page = 1) {
  const { data } = await axios
    .get(`/search/movie?`)
    .then((data) => data)
    .catch(function (error) {
      toast.error(error);
    });
  return data;
}

async function getMovieDetails(movieId) {
  const { data } = await axios
    .get(`/movie/${movieId}`)
    .then((data) => data)
    .catch(function (error) {
      toast.error(error);
    });
  return data;
}

async function getCastMovies(movieId) {
  const { data } = await axios
    .get(`/movie/${movieId}/credits`)
    .then((data) => data);

  return data.cast;
}

async function getReviewsMovies(movieId, page = 1) {
  const { data } = await axios
    .get(`/movie/${movieId}/reviews`)
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
