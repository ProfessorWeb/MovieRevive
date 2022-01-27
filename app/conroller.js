import * as model from './model.js';
import * as observ from './view/observe.js';

import top5MovieView from './view/top5MovieView.js';
import MovieTrendingView from './view/MovieTrendingVIew.js';
import SearchMovieView from './view/searchMovie.js';
import movieReview from './view/movieReview.js';

import 'core-js/stable'; //  Babel
import 'regenerator-runtime'; 

/* We use it.
Because of Babel.
It converts our code to es5 and that's why we need this model.
Because in ES5 there was no await.

await this is something new it came out in ES6. */

const top5Movie = async function () {
  try {
    const data = await model.getMovieTop5();
    const top5 = data.results.slice(0, 5);
    top5MovieView.render(top5);
  } catch (err) {
    throw err;
  }
};

const MovieTrending = async function () {
  try {
    const data = await model.getMovieTrending();
    const top5 = data.results.slice(0, 5);

    MovieTrendingView.render(top5);
  } catch (err) {
    throw err;
  }
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
