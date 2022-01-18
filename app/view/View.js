export default class View {
  _data;
  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    if (!markup) return; // Guard Clauses
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
