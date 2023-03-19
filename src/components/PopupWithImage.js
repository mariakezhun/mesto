import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor (popupSelector) {
    super(popupSelector);
    this._image = this._popup.querySelector(".popup__img");
    this._header = this._popup.querySelector(".popup__heading_type_image");
  }

  open (link, name) {
    this._image.src = link;
    this._image.alt = name;
    this._header.textContent = name;

    super.open();
  }
}