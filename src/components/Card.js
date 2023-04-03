export default class Card {
  constructor({
    data,
    templateSelector,
    userId,
    handleCardClick,
    handleCardDelete,
    handlePutLike,
    handleDeleteLike,
  }) {
    this._name = data.name;
    this._link = data.link;
    this._ownerId = data.owner._id;
    this._userId = userId;
    this._id = data._id;
    this._likes = data.likes;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handlePutLike = handlePutLike;
    this._handleDeleteLike = handleDeleteLike;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();

    this._cardImage = this._element.querySelector(".element__image");
    this._cardImage.src = this._link;
    this._cardImage.alt = this._name;
    this._element.querySelector(".element__header").textContent = this._name;
    this._trash = this._element.querySelector(".element__trash");
    this._like = this._element.querySelector(".element__like");
    this._likesCounter = this._element.querySelector(".element__like-counter");
    this._likesCounter.textContent = this._likes.length;
    this._hasTrash();
    this._hasLike();
    this._setEventListeners();
    return this._element;
  }

  deleteCard() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._link, this._name);
    });
    this._trash.addEventListener("click", () => {
      this._handleCardDelete(this._id);
    });
    this._like.addEventListener("click", () => {
      if (this._like.classList.contains("element__like_active")) {
        this._handleDeleteLike(this._id);
      } else {
        this._handlePutLike(this._id);
      }
    });
  }

  _hasTrash() {
    if (this._userId !== this._ownerId) {
      this._trash.remove();
    }
  }

  _hasLike() {
    if (
      this._likes.some((data) => {
        return this._userId === data._id;
      })
    ) {
      this._like.classList.add("element__like_active");
    }
  }

  likeCard(data) {
    this._likes = data.likes;
    this._likesCounter.textContent = this._likes.length;
    this._like.classList.toggle("element__like_active");
  }
}
