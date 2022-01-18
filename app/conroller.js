import * as model from './model.js';
import top5MovieView from './view/top5MovieView.js';
import MovieTrendingView from './view/MovieTrendingVIew.js';
import * as observ from './view/observe.js';

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

const init = function () {
  top5Movie();
  MovieTrending();
};

init(); // Start App
