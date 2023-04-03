export default class Api {
  constructor({ url, headers }) {
    this._headers = headers;
    this._url = url;
  }

  _status(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getCards() {
    return fetch(`${this._url}cards`, { headers: this._headers }).then(
      this._status
    );
  }

  addCards({ name, link }) {
    return fetch(`${this._url}cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, link }),
    }).then(this._status);
  }

  deleteCards(_id) {
    return fetch(`${this._url}cards/${_id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._status);
  }

  getUserInfo() {
    return fetch(`${this._url}users/me`, { headers: this._headers }).then(
      this._status
    );
  }

  addUserInfo(data) {
    return fetch(`${this._url}users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ name: data.name, about: data.about }),
    }).then(this._status);
  }

  editAvatar(data) {
    return fetch(`${this._url}users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar: data.avatar }),
    }).then(this._status);
  }

  putLike(_id) {
    return fetch(`${this._url}cards/${_id}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._status);
  }

  deleteLike(_id) {
    return fetch(`${this._url}cards/${_id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._status);
  }
  
}
