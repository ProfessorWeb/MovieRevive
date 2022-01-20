import * as model from './model.js';
import * as observ from './view/observe.js';

import top5MovieView from './view/top5MovieView.js';
import MovieTrendingView from './view/MovieTrendingVIew.js';
import SearchMovieView from './view/searchMovie.js';
import movieReview from './view/movieReview.js';

import 'core-js/stable';
import 'regenerator-runtime';

const top5Movie = async function () {
  const data = await model.getMovieTop5();
  const top5 = data.results.slice(0, 5);
  top5MovieView.render(top5);
};

const MovieTrending = async function () {
  const data = await model.getMovieTrending();
  const top5 = data.results.slice(0, 5);

  MovieTrendingView.render(top5);
};

const searchMovie = async function () {
  try {
    const query = SearchMovieView.getQuery();
    if (!query) return;
    const data = await model.SearchMovie(query);
    SearchMovieView.render(data.results);
  } catch (err) {
    throw err;
  }
};

const getMovieBYID = async function () {
  try {
    const movie_id = window.location.hash.slice(1);
    await model.getMovieID(movie_id);
    movieReview.render(model.state);
  } catch (err) {
    throw err;
  }
};

const init = function () {
  if (location.pathname === '/index.html' || location.pathname === '/') {
    top5Movie();
    MovieTrending();
  }

  if (location.pathname === '/movie.html') getMovieBYID();

  if (location.pathname === '/search-movie.html')
    SearchMovieView._addHandlerSearch(searchMovie);
};

init(); // Start App
