export const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

export const formObj = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
//контейнер для карточек
export const cardsContainer = ".elements";
//темплейт карточек
export const cardsTemplate = "#card-template";
//селектор попап добавления
export const selectorPopupAdd = ".popup_type_add";
//селектор попап редактирования
export const selectorPopupEdit = ".popup_type_edit";
//селекторы попапа добавления
export const selectorprofileName = ".profile__name";
export const selectorprofileDescription = ".profile__description";
//попапы
export const popupEdit = document.querySelector(".popup_type_edit");
export const popupAdd = document.querySelector(".popup_type_add");
export const popupImg = document.querySelector(".popup_type_image");
//кнопки открытия
export const popupEditOpeneButton = document.querySelector(
  ".profile__edit-button"
);
export const popupAddOpeneButton = document.querySelector(
  ".profile__add-button"
);
//кнопки закрытия
export const popupEditCloseButton = popupEdit.querySelector(".popup__close");
export const popupAddCloseButton = popupAdd.querySelector(".popup__close");
export const popupImgCloseButton = popupImg.querySelector(".popup__close");
//элементы попапа редактирования
export const profileName = document.querySelector(".profile__name");
export const profileJob = document.querySelector(".profile__description");
export const formElementPopupEdit = popupEdit.querySelector(".popup__form");
export const nameInput = formElementPopupEdit.querySelector(
  ".popup__input_type_name"
);
export const jobInput = formElementPopupEdit.querySelector(
  ".popup__input_type_job"
);
//элементы попапа с фото
export const popupImgTitle = popupImg.querySelector(
  ".popup__heading_type_image"
);
export const popupImgImage = popupImg.querySelector(".popup__img");
//кнопка отправки формы попапа добавления
export const popupAddSubmitButton = popupAdd.querySelector(".popup__button");
//инпуты попапа добавления
export const titleInput = popupAdd.querySelector(".popup__input_type_title");
export const linkInput = popupAdd.querySelector(".popup__input_type_link");
export const popupAddFormElement = popupAdd.querySelector(".popup__form");
