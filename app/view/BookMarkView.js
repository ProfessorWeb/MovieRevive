import View from './View';

class BookMarkView extends View {
  _parentElement = document.querySelector('.dropdown-menu');
  _generateMarkup() {
    return this._data.length >= 1
      ? this._data.map(this._markup).join('')
      : '<li><a class="dropdown-item" href="#">Empty</a></li>';
  }

  _markup(data) {
    return `<li><a class="dropdown-item" href="movie.html#${data.id}">${data.title}</a></li>`;
  }
}

export default new BookMarkView();
