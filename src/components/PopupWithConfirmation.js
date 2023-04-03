import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor({ popupSelector }) {
    super(popupSelector);
    this._yesButton = this._popup.querySelector(".popup__form");
    this._button = this._popup.querySelector(".popup__button");
  }

  submit(evt) {
    this._handleSubmit = evt;
  }

  setEventListeners() {
    super.setEventListeners();

    this._yesButton.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmit({ id: this._id, cards: this._cards });
      this.close();
    });
  }

  open(id, cards) {
    super.open();
    this._id = id;
    this._cards = cards;
  }

  renderLoading(isLoading) {
    if (isLoading) {
      this._button.textContent = "Удаление..."
    }
    else{
      this._button.textContent = "Да"
    }
  }
}
