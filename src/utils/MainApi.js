import { LINK_BACKEND } from '../constants/constants';

class MainApi {
  constructor() {
    this._baseUrl = LINK_BACKEND;
  }

  _getJson(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  register(name, email, password) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        name: name,
        password: password,
        email: email
      })
    }).then(this._getJson);
  }

  authorize = (email, password) => {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/signin`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        password: password,
        email: email
      })
    }).then(this._getJson);
  }

  getContent = (token) => {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      }
    }).then(this._getJson);
  };

  postUserInfo(email, name) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        email: email,
        name: name,
      })
    }).then(this._getJson);
  }

  getMovies() {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/movies`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      }
    }).then(this._getJson);
  }

  saveMovie(movie) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/movies`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        country: movie.country,
        director: movie.director,
        duration: String(movie.duration),
        year: movie.year,
        description: movie.description,
        image: `https://api.nomoreparties.co${movie.image.url}`,
        trailerLink: movie.trailerLink,
        thumbnail: `https://api.nomoreparties.co${movie.image.formats.thumbnail.url}`,
        movieId: String(movie.id),
        nameRU: movie.nameRU,
        nameEN: movie.nameEN
      })
    }).then(this._getJson);
  }

  deleteMovie(movieId) {
    const token = localStorage.getItem("jwt");
    return fetch(`${this._baseUrl}/movies/${movieId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`
      }
    }).then(this._getJson);
  }

}

const mainApi = new MainApi();
export default mainApi;