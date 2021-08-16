import axios from "axios";
import { toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  api_key: "053386d3f650ced58f98586754740b55",
  language: "en-US",

  page: 1,
};

const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w500/";

async function getTrendingMovies() {
  const { data } = await axios
    .get("/trending/movie/day")
    .then((data) => data)
    .catch(function (error) {
      toast.error(error);
    });
  return data;
}

async function getBySearchMovies(searchQuery) {
  const { data } = await axios
    .get("/search/movie?", {
      params: { query: searchQuery },
    })
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

async function getReviewsMovies(movieId) {
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
  BASE_IMAGE_URL,
};
