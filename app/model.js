import {
  getJSON,
  getJSONSearch,
  getJSON_BY_ID,
  getJSON_Trailer,
} from './helpers.js';

export const state = {
  query: {
    Trailer: {},
    movie: {},
  },
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
  const data = await getJSONSearch(undefined, movie);
  return data;
};

export const getMovieID = async function (movie_id) {
  const data = await getJSON_BY_ID(movie_id);
  const TrailerID = await getJSON_Trailer(movie_id);

  state.query.movie = data;
  state.query.Trailer = TrailerID;

  return data;
};
