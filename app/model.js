import { API_KEY } from './config.js';
import { getJSON, getJSONSearch } from './helpers.js';

const state = {
  query: {},
  results: [],
};

export const getMovieTop5 = async function () {
  const data = await getJSON(`https://api.themoviedb.org/3/movie/top_rated`);

  return data;
};

export const getMovieTrending = async function () {
  const data = await getJSON(`https://api.themoviedb.org/3/trending/movie/day`);

  return data;
};

export const SearchMovie = async function (movie) {
  const data = getJSONSearch(undefined, movie);

  return data;
};
