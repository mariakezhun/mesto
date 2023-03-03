//импорты
import  Card  from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { initialCards } from "./initialCards.js"
//попапы
const popupEdit = document.querySelector(".popup_type_edit");
const popupAdd = document.querySelector(".popup_type_add");
export const popupImg = document.querySelector(".popup_type_image");
//кнопки открытия
const popupEditOpeneButton = document.querySelector(".profile__edit-button");
const popupAddOpeneButton = document.querySelector(".profile__add-button");
//кнопки закрытия
const popupEditCloseButton = popupEdit.querySelector(".popup__close");
const popupAddCloseButton = popupAdd.querySelector(".popup__close");
export const popupImgCloseButton = popupImg.querySelector(".popup__close");
//элементы попапа редактирования
const profileName = document.querySelector(".profile__name");
const profileJob = document.querySelector(".profile__description");
const formElementPopupEdit = popupEdit.querySelector(".popup__form");
const nameInput = formElementPopupEdit.querySelector(".popup__input_type_name");
const jobInput = formElementPopupEdit.querySelector(".popup__input_type_job");
//элементы попапа с фото
export const popupImgTitle = popupImg.querySelector(".popup__heading_type_image");
export const popupImgImage = popupImg.querySelector(".popup__img");
const cardsContainer = document.querySelector(".elements");
//кнопка отправки формы попапа добавления
const popupAddSubmitButton = popupAdd.querySelector(".popup__button");
//инпуты попапа добавления
const titleInput = popupAdd.querySelector(".popup__input_type_title");
const linkInput = popupAdd.querySelector(".popup__input_type_link");
const popupAddFormElement = popupAdd.querySelector(".popup__form");

//функция открытия
export const openPopup = function (popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closePopupByEsc);
};
//функция закрытия
const closePopup = function (popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closePopupByEsc);
};
//функция закрытия по оверлею
const closePopupByOverlay = function (evt) {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.currentTarget);
  }
};
//функция закрытия по Esc
export const closePopupByEsc = function (evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector(".popup_opened"));
  }
};
//функция отправки формы попапа редактирования
function handleFormSubmitPopupEdit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup(popupEdit);
}

initialCards.forEach((item) => {
  const card = new Card(item, "#card-template");
  const cardElement = card.generateCard();

  document.querySelector(".elements").append(cardElement);
});


/*
//функция карточки
function createCard(item) {
  const card = cardTemplate.cloneNode(true);
  const cardTitle = (card.querySelector(".element__header").textContent =
    item.name);
  const cardImg = card.querySelector(".element__image");
  cardImg.src = item.link;
  cardImg.alt = item.name;
  card.querySelector(".element__like").addEventListener("click", (evt) => {
    evt.target.classList.toggle("element__like_active");
  });
  card.querySelector(".element__trash").addEventListener("click", () => {
    card.remove();
  });

  cardImg.addEventListener("click", function () {
    openPopup(popupImg);

    popupImgTitle.textContent = cardTitle;
    popupImgImage.src = cardImg.src;
    popupImgImage.alt = cardTitle;
  });

  return card;
}
//функция добавления начальных карточек на странице
function renderCards() {
  const cards = initialCards.map((item) => {
    return createCard(item);
  });

  cardsContainer.append(...cards);
}

renderCards();
*/
const formObj = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const profileFormValidator = new FormValidator(formObj, formElementPopupEdit);
const addFormValidator = new FormValidator(formObj, popupAddFormElement);

profileFormValidator.enableValidation();
addFormValidator.enableValidation();
//функция добавления новой карточки
const addNewCard = (evt) => {
  evt.preventDefault();

  const inputObj = {
    name: titleInput.value,
    link: linkInput.value,
  };

  const card = new Card(inputObj, "#card-template").generateCard();
  cardsContainer.prepend(card);

  closePopup(popupAdd);
  popupAddFormElement.reset();
  addFormValidator.disabledButton();
  // popupAddSubmitButton.classList.add('popup__button_disabled');
  // popupAddSubmitButton.disabled = true;
};

//обработчик события сохранения изменений добавленной карточки
popupAddFormElement.addEventListener("submit", addNewCard);

//обработчик события открытия попапа редактирования
popupEditOpeneButton.addEventListener("click", function () {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
});
//обработчик события открытия попапа добавления
popupAddOpeneButton.addEventListener("click", function () {
  openPopup(popupAdd);
});
//обработчик события закрытия попапа редактирования
popupEditCloseButton.addEventListener("click", function () {
  closePopup(popupEdit);
});
//обработчик события закрытия попапа добавления
popupAddCloseButton.addEventListener("click", function () {
  closePopup(popupAdd);
});
//обработчик события сохранения изменений в попапе редактирования
formElementPopupEdit.addEventListener("submit", handleFormSubmitPopupEdit);

popupEdit.addEventListener("click", closePopupByOverlay);
popupAdd.addEventListener("click", closePopupByOverlay);
popupImg.addEventListener("click", closePopupByOverlay);

popupImgCloseButton.addEventListener("click", function () {
  closePopup(popupImg);
});
