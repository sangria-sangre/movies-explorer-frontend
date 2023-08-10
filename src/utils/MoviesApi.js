class MoviesApi {
  constructor() {
      this._baseUrl = 'https://api.nomoreparties.co/beatfilm-movies';
  }

  _getJson(res) {
      if (res.ok) {
          return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
      //const token = localStorage.getItem("jwt");
      return fetch(`${this._baseUrl}`, {
          headers: {
              'Content-Type': 'application/json',
              //'authorization': `Bearer ${token}`
          }
      }).then(this._getJson);
  }

}

const moviesApi = new MoviesApi();
export default moviesApi;