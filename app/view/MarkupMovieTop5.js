import View from './View.js';

class previewView extends View {
  _parentElement = document.querySelector('.top5-row');

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
export default new previewView();
