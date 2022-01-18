import * as model from './model.js';
import * as observ from './view/observe.js';
import top5MovieView from './view/top5MovieView.js';
import MovieTrendingView from './view/MovieTrendingVIew.js';
import SearchMovieView from './view/searchMovie.js';
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
    const query = SearchMovieView.getQuery;
    if (!query) return;
    const data = await model.SearchMovie(query);
    searchMovie.render(data);
  } catch (err) {
    throw err;
  }
};

const init = function () {
  // top5Movie();
  // MovieTrending();

  SearchMovieView._addHandlerSearch(searchMovie);
};

init(); // Start App
