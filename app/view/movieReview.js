class top5Movie {
  _data;
  _parentElement = document.querySelector('.row');
  body = (document.querySelector('body').style.background = 'rgb(45, 52, 54)');

  render(data) {
    this._data = data;

    const markup = this._generateMarkup();
    if (!markup) return; // Guard Clauses
    this._parentElement.innerHTML = markup;
  }

  _generateMarkup() {
    const { Trailer, movie } = this._data.query; // object destructure

    return `<div class="card p-1 mx-auto movie-review" style="max-width: 100%">
    <div class="row g-0">
      <div class="col-md-4">
        <img
          src="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/${
            movie.poster_path
          }"
          class="img-fluid rounded-start"
          alt="..."
        />
        <div>
          <hr />
          <h6>Rating : ${movie.vote_average} ⭐</h6>
          <hr />
          <h6>genres : ${movie.genres.map(lang => lang.name)}</h6>
          <hr />
          <h6>languages : ${movie.spoken_languages.map(lang => lang.name)}</h6>
        </div>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <h5 class="card-title col 6">${movie.title}</h5>
          <hr />
          <p class="card-text">
           ${movie.overview}
          </p>
          <hr />
          ${
            Trailer.results.length === 0
              ? '<h5 class="text-center">No Trailler</h5>'
              : `<iframe
              src="https://www.youtube.com/embed/${Trailer.results[0].key}"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>`
          }
         
        </div>
      </div>
    </div>
    </div>`;
  }
}

export default new top5Movie();
