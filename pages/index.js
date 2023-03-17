//импорты
import Card from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
import {
  initialCards,
  popupAdd,
  popupEdit,
  cardsContainer,
  formElementPopupEdit,
  popupAddFormElement,
  formObj,
  popupAddOpeneButton,
  popupEditOpeneButton,
  // popupEditOpeneButton,
  // popupAddOpeneButton,
  // popupEditCloseButton,
  // popupAddCloseButton,
  // popupImg,
  // popupImgCloseButton,
} from "../utils/constants.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";

const openPopupImage = new PopupWithImage(".popup_type_image");
openPopupImage.setEventListeners();

const newCard = (item) => {
  const card = new Card(
    {
      data: item,
      handleCardClick: (link, name) => {
        openPopupImage.open(link, name);
      },
    },
    "#card-template"
  );
  const cardElement = card.generateCard();
  return cardElement;
};

const newSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      return newCard(item);
    },
  },
  cardsContainer
);

newSection.renderItems();

const popupAddForm = new PopupWithForm({
  popupSelector: ".popup_type_add",
  callbackSubmitForm: (formData) => {
    newSection.addItem(newCard(formData));
    addFormValidator.disabledButton();
  },
});

popupAddForm.setEventListeners();

const newUserInfo = new UserInfo({
  nameSelector: ".profile__name",
  aboutSelector: ".profile__description",
});

const popupEditForm = new PopupWithForm({
  popupSelector: ".popup_type_edit",
  callbackSubmitForm: (item) => {
    newUserInfo.setUserInfo(item);
    profileFormValidator.disabledButton();
  },
});

popupEditForm.setEventListeners();

const profileFormValidator = new FormValidator(formObj, formElementPopupEdit);
const addFormValidator = new FormValidator(formObj, popupAddFormElement);

profileFormValidator.enableValidation();
addFormValidator.enableValidation();

popupAddOpeneButton.addEventListener("click", () => {
  popupAddForm.open();
});

popupEditOpeneButton.addEventListener("click", () => {
  popupEditForm.open();
});

// //функция открытия
// export const openPopup = function (popup) {
//   popup.classList.add("popup_opened");
//   document.addEventListener("keydown", closePopupByEsc);
// };
// //функция закрытия
// const closePopup = function (popup) {
//   popup.classList.remove("popup_opened");
//   document.removeEventListener("keydown", closePopupByEsc);
// };
// //функция закрытия по оверлею
// const closePopupByOverlay = function (evt) {
//   if (evt.target === evt.currentTarget) {
//     closePopup(evt.currentTarget);
//   }
// };
// //функция закрытия по Esc
// export const closePopupByEsc = function (evt) {
//   if (evt.key === "Escape") {
//     closePopup(document.querySelector(".popup_opened"));
//   }
// };
// //функция отправки формы попапа редактирования
// function handleFormSubmitPopupEdit(evt) {
//   evt.preventDefault();
//   profileName.textContent = nameInput.value;
//   profileJob.textContent = jobInput.value;
//   closePopup(popupEdit);
// }

// initialCards.forEach((item) => {
//   const card = new Card(item, "#card-template");
//   const cardElement = card.generateCard();

//   document.querySelector(".elements").append(cardElement);
// });

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

//функция добавления новой карточки
// const addNewCard = (evt) => {
//   evt.preventDefault();

//   const inputObj = {
//     name: titleInput.value,
//     link: linkInput.value,
//   };

//   const card = new Card(inputObj, "#card-template").generateCard();
//   cardsContainer.prepend(card);

//   closePopup(popupAdd);
//   popupAddFormElement.reset();
//   addFormValidator.disabledButton();
//   // popupAddSubmitButton.classList.add('popup__button_disabled');
//   // popupAddSubmitButton.disabled = true;
// };

// //обработчик события сохранения изменений добавленной карточки
// popupAddFormElement.addEventListener("submit", addNewCard);

// //обработчик события открытия попапа редактирования
// popupEditOpeneButton.addEventListener("click", function () {
//   openPopup(popupEdit);
//   nameInput.value = profileName.textContent;
//   jobInput.value = profileJob.textContent;
// });
// //обработчик события открытия попапа добавления
// popupAddOpeneButton.addEventListener("click", function () {
//   openPopup(popupAdd);
// });
// //обработчик события закрытия попапа редактирования
// popupEditCloseButton.addEventListener("click", function () {
//   closePopup(popupEdit);
// });
// //обработчик события закрытия попапа добавления
// popupAddCloseButton.addEventListener("click", function () {
//   closePopup(popupAdd);
// });
// //обработчик события сохранения изменений в попапе редактирования
// formElementPopupEdit.addEventListener("submit", handleFormSubmitPopupEdit);

// popupEdit.addEventListener("click", closePopupByOverlay);
// popupAdd.addEventListener("click", closePopupByOverlay);
// popupImg.addEventListener("click", closePopupByOverlay);

// popupImgCloseButton.addEventListener("click", function () {
//   closePopup(popupImg);
// });
