import View from './View.js';

class top5Movie extends View {
  _parentElement = document.querySelector('.top5-row');
  _generateMarkup() {
    return this._data.map(this._markup).join('');
  }

  _markup(result) {
    return `<div class="card">
            <img
              src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${result.poster_path}"
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

export default new top5Movie();
