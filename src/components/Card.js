export default class Card {
  constructor({ data, handleCardClick }, templateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._handleCardClick = handleCardClick;
    this._templateSelector = templateSelector;
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
    this._setEventListeners();
    return this._element;
  }

  // _handleOpenPopup() {
  //   popupImgImage.src = this._link;
  //   popupImgImage.alt = this._name;
  //   popupImgTitle.textContent = this._name;
  //   // openPopup(popupImg);
  //   // popupImg.classList.add("popup_opened");
  //   // document.addEventListener("keydown", closePopupByEsc);
  // }

  // _handleClosePopup() {
  //   popupImgImage.src = "";
  //   popupImgTitle.textContent = "";
  //   popupImg.classList.remove("popup_opened");
  //   document.removeEventListener("keydown", closePopupByEsc);
  // }

  _setEventListeners() {
    this._cardImage
      .addEventListener("click", () => {
        this._handleCardClick(this._link, this._name);
      });
    // // popupImgCloseButton.addEventListener("click", () => {
    // //   this._handleClosePopup();
    // // });
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
