import "./index.css";
import Card from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import Section from "../components/Section.js";
import {
  cardsContainer,
  cardsTemplate,
  formElementPopupEdit,
  popupAddFormElement,
  formObj,
  popupAddOpeneButton,
  popupEditOpeneButton,
  selectorPopupAdd,
  selectorPopupEdit,
  selectorprofileName,
  selectorprofileDescription,
  selectorprofileAvatar,
  selectorPopupAvatarEdit,
  popupAvatarEditOpenButton,
  popupAvatarEditFormElement,
  selectorPopupConfirme,
} from "../utils/constants.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api.js";
import PopupWithConfirmation from "../components/PopupWithConfirmation.js";

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-63/",
  headers: {
    Authorization: "bed1775f-78b2-4641-a910-a9a3c50e95a8",
    "Content-Type": "application/json",
  },
});

const getData = [api.getUserInfo(), api.getCards()];
let userId;

Promise.all(getData)
  .then(([data, cards]) => {
    userId = data._id;
    editUserInfo.setUserInfo(data);
    editUserInfo.setUserAvatar(data);
    createSection.renderItems(cards);
  })
  .catch((err) => {
    console.log(err);
  });

const createSection = new Section(
  {
    renderer: (item) => {
      createSection.addItem(createCard(item));
    },
  },
  cardsContainer
);

const openPopupImage = new PopupWithImage(".popup_type_image");
openPopupImage.setEventListeners();

const createCard = (item) => {
  const card = new Card({
    data: item,
    handleCardClick: (link, name) => {
      openPopupImage.open(link, name);
    },
    userId: userId,
    templateSelector: cardsTemplate,
    handleCardDelete: (_id) => {
      createPopupWithConfirmation.open();
      createPopupWithConfirmation.renderLoading(true);
      createPopupWithConfirmation.submit(() => {
        api
          .deleteCards(_id)
          .then(() => {
            createPopupWithConfirmation.close();
            createPopupWithConfirmation.renderLoading(false);
            card.deleteCard();
          })
          .catch((err) => console.log(err));
      });
    },
    handlePutLike: (_id) => {
      api
        .putLike(_id)
        .then((data) => {
          card.likeCard(data);
        })
        .catch((err) => console.log(err));
    },
    handleDeleteLike: (_id) => {
      api
        .deleteLike(_id)
        .then((data) => {
          card.likeCard(data);
        })
        .catch((err) => console.log(err));
    },
  });
  const cardElement = card.generateCard();
  return cardElement;
};

const createPopupWithConfirmation = new PopupWithConfirmation({
  popupSelector: selectorPopupConfirme,
});
createPopupWithConfirmation.setEventListeners();

const createpopupAddForm = new PopupWithForm({
  popupSelector: selectorPopupAdd,
  callbackSubmitForm: (data) => {
    createpopupAddForm.renderLoading(true);
    api
      .addCards({ name: data.name, link: data.link })
      .then((item) => {
        createSection.addItem(createCard(item));
        createpopupAddForm.renderLoading(false);
      })
      .catch((err) => console.log(err));
  },
});

createpopupAddForm.setEventListeners();

const editUserInfo = new UserInfo({
  nameSelector: selectorprofileName,
  aboutSelector: selectorprofileDescription,
  avatarSelector: selectorprofileAvatar,
});

const createpopupEditForm = new PopupWithForm({
  popupSelector: selectorPopupEdit,
  callbackSubmitForm: (data) => {
    createpopupEditForm.renderLoading(true);
    api
      .addUserInfo(data)
      .then((res) => {
        editUserInfo.setUserInfo(res);
        createpopupEditForm.renderLoading(false);
      })
      .catch((err) => console.log(err));
  },
});

createpopupEditForm.setEventListeners();

const createpopupAvatarEdit = new PopupWithForm({
  popupSelector: selectorPopupAvatarEdit,
  callbackSubmitForm: (avatar) => {
    createpopupAvatarEdit.renderLoading(true);
    api
      .editAvatar(avatar)
      .then((res) => {
        editUserInfo.setUserAvatar(res);
        createpopupAvatarEdit.close();
        createpopupAvatarEdit.renderLoading(false);
      })
      .catch((err) => console.log(err));
  },
});

createpopupAvatarEdit.setEventListeners();

const profileFormValidator = new FormValidator(formObj, formElementPopupEdit);
const addFormValidator = new FormValidator(formObj, popupAddFormElement);
const avatarFormValidator = new FormValidator(
  formObj,
  popupAvatarEditFormElement
);

profileFormValidator.enableValidation();
addFormValidator.enableValidation();
avatarFormValidator.enableValidation();

popupAddOpeneButton.addEventListener("click", () => {
  createpopupAddForm.open();
  addFormValidator.disabledButton();
});

popupEditOpeneButton.addEventListener("click", () => {
  createpopupEditForm.setInputValues(editUserInfo.getUserInfo());
  createpopupEditForm.open();
  profileFormValidator.disabledButton();
});

popupAvatarEditOpenButton.addEventListener("click", () => {
  createpopupAvatarEdit.open();
  addFormValidator.disabledButton();
});