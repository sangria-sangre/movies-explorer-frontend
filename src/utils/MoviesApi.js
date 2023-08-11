import { LINK_MOVIES } from '../constants/constants';

class MoviesApi {
  constructor() {
    this._baseUrl = LINK_MOVIES;
  }

  _getJson(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getMovies() {
    return fetch(`${this._baseUrl}`, {
      headers: {
        'Content-Type': 'application/json',
      }
    }).then(this._getJson);
  }

}

const moviesApi = new MoviesApi();
export default moviesApi;