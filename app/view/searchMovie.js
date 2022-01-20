import View from './View.js';

class SearchMovieView extends View {
  _parentElement = document.querySelector('.search-movie-container');
  _inputSearch = document.querySelector('.value-search');
  form = document.querySelector('form');

  getQuery() {
    const query = this._inputSearch.value;
    this._clearInput();
    return query;
  }

  _clearInput() {
    this._inputSearch.value = '';
  }

  _addHandlerSearch(handler) {
    this.form.addEventListener('submit', function (e) {
      e.preventDefault();

      /* Style */
      document.getElementById('movie-block').style.backgroundColor = '#fff';
      document.querySelector('.container').classList.remove('hidden');
      document.querySelector('.search-movie-container').innerHTML = '';

      handler();
    });
  }

  _generateMarkup() {
    return this._data.map(this.markup).join('');
  }

  markup(result) {
    return `<div class="card ${result.poster_path ?? 'hidden'}">
    <img
      src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${
        result.poster_path
      }"
      class="card-img-top"
      alt="..."
    />
    <div class="card-body">
      <p class="card-text text-center">
      <a href="movie.html#${result.id}" class="link-dark">
       ${result.title}</a>
      </p>
    </div>
  </div>`;
  }
}
export default new SearchMovieView();
