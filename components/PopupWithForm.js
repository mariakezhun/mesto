import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor({ popupSelector, callbackSubmitForm }) {
    super(popupSelector);
    this._callbackSubmitForm = callbackSubmitForm;
    this._popupForm = this._popup.querySelector(".popup__form");
    this._inputList = this._popup.querySelectorAll(".popup__input");
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }
  
  setEventListeners() {
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._callbackSubmitForm(this._getInputValues());
      this.close();
      this._popupForm.reset();
    });
    super.setEventListeners();
  }

  close() {
    this._popupForm.reset();
    super.close();
  }
}

// this._inputValues = {};
// this._popupInput.forEach((input) => {
//   this._inputValues[input.name] = input.value;
// });
// return this._inputValues;
// this._inputList = Array.from(
//   this._popupForm.querySelectorAll(".popup__input")
// );
// this._inputList = Array.from(
//   this._popupForm.querySelectorAll(".popup__input")
// );
// return { name: this._inputList[0].value, link: this._inputList[1].value };

// setInputValues(item) {
//   this._inputList.forEach((input) => {
//     input.value = item[input.name];
//   });
// }
