import {popupImgCloseButton, popupImgTitle, popupImgImage, popupImg, closePopupByEsc} from './index.js'

export default class Card {
  constructor(data) {
    this._name = data.name;
    this._link = data.link;
    this._trash = data.trash;
    this._like = data.like;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector("#card-template")
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector(".element__image").src = this._link;
    this._element.querySelector(".element__header").textContent = this._name;
    this._element.querySelector(".element__trash").src = this._trash;
    this._element.querySelector(".element__like").src = this._like;

    return this._element;
  }

  _handleOpenPopup() {
    popupImgImage.src = this._link;
    popupImgTitle.textContent = this._name;
    popupImg.classList.add("popup_opened");
    document.addEventListener("keydown", closePopupByEsc);
  }

  _handleClosePopup() {
    popupImgImage.src = "";
    popupImgTitle.textContent = "";
    popupImg.classList.remove("popup_opened");
    document.removeEventListener("keydown", closePopupByEsc);
  }

  _setEventListeners() {
    this._element
      .querySelector(".element__image")
      .addEventListener("click", () => {
        this._handleOpenPopup();
      });
    popupImgCloseButton.addEventListener("click", () => {
      this._handleClosePopup();
    });
    this._element
      .querySelector(".element__trash")
      .addEventListener("click", () => {
        this._element.remove();
      });
    this._element
      .querySelector(".element__like")
      .addEventListener("click", (evt) => {
        evt.target.classList.toggle("element__like_active");
      });
  }
}