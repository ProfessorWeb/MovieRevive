import View from './View.js';

class SearchMovieView extends View {
  _parentElement = document.querySelector('.search-movie');
  _inputSearch = document.querySelector('.value-search');

  getQuery() {
    const query = this._inputSearch.value;
    return query;
  }

  _addHandlerSearch(handler) {
    window.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }

  _generateMarkup() {
    return `<div class="card">
            <img
              src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${this._data.poster_path}"
              class="card-img-top"
              alt="..."
            />
            <div class="card-body">
              <p class="card-text text-center">
              <a href="#" class="link-dark">
               ${this._data.title}</a>
              </p>
            </div>
          </div>`;
  }
}
export default new SearchMovieView();
