import View from './View.js';
import MarkupMovieTop5 from './MarkupMovieTop5.js';

class top5Movie extends View {
  _generateMarkup() {
    return this._data
      .map(value => MarkupMovieTop5.render(value)) // render MarkupMovieTop5
      .join('')
      .trim('');
  }
}

export default new top5Movie();
