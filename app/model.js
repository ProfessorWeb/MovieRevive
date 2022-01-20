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
  try {
    const data = await getJSON(`https://api.themoviedb.org/3/movie/top_rated`);
    return data;
  } catch (err) {
    throw err;
  }
};

export const getMovieTrending = async function () {
  try {
    const data = await getJSON(
      `https://api.themoviedb.org/3/trending/movie/day`
    );
    return data;
  } catch (err) {
    throw err;
  }
};

export const SearchMovie = async function (movie) {
  try {
    const data = await getJSONSearch(undefined, movie);
    return data;
  } catch (err) {
    throw err;
  }
};

export const getMovieID = async function (movie_id) {
  try {
    const data = await getJSON_BY_ID(movie_id);
    const TrailerID = await getJSON_Trailer(movie_id);

    state.query.movie = data;
    state.query.Trailer = TrailerID;

    return data;
  } catch (err) {
    throw err;
  }
};
