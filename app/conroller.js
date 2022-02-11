import * as model from './model.js';
import * as observ from './view/observe.js';

import top5MovieView from './view/top5MovieView.js';
import MovieTrendingView from './view/MovieTrendingVIew.js';
import SearchMovieView from './view/searchMovie.js';
import movieReview from './view/movieReview.js';
import BookMarkView from './view/BookMarkView.js';

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
    const MovieQuery = model.state.query;
    await model.getMovieID(movie_id);
    if (MovieQuery.bookmarks.some(book => book.id === +movie_id))
      MovieQuery.movie.bookmarkd = true;
    else MovieQuery.movie.bookmarkd = false;
    movieReview.render(model.state);
  } catch (err) {
    movieReview.rednerError();
  }
};

const AddBookMark = function () {
  const MovieQuery = model.state.query;
  const findIndex = MovieQuery.bookmarks.findIndex(
    index => index.id === MovieQuery.movie.id
  );

  if (!MovieQuery.bookmarks.some(book => book.id === MovieQuery.movie.id)) {
    MovieQuery.movie.bookmarkd = true;
    MovieQuery.bookmarks.push(MovieQuery.movie);
    location.reload();
  } else {
    MovieQuery.movie.bookmarkd = false;
    MovieQuery.bookmarks.splice(findIndex, 1);
    location.reload();
  }
  model.save();
};

const bookmark = function () {
  BookMarkView.render(model.state.query.bookmarks);
};

const init = function () {
  if (location.pathname === '/index.html' || location.pathname === '/') {
    top5Movie();
    MovieTrending();
    bookmark();
  }

  if (location.pathname === '/movie.html') {
    getMovieBYID();
    movieReview.addHandlerBookMark(AddBookMark);
  }

  if (location.pathname === '/search-movie.html') {
    SearchMovieView._addHandlerSearch(searchMovie);
    bookmark();
  }
};

init(); // Start App
