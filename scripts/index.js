//попапы
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');
const popupImg = document.querySelector('.popup_type_image');
//кнопки открытия
const popupEditOpeneButton =  document.querySelector('.profile__edit-button');
const popupAddOpeneButton = document.querySelector('.profile__add-button');
//кнопки закрытия
const popupEditCloseButton =  popupEdit.querySelector('.popup__close');
const popupAddCloseButton = popupAdd.querySelector('.popup__close');
const popupImgCloseButton = popupImg.querySelector('.popup__close');
//элементы попапа редактирования
const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description'); 
const formElement = popupEdit.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__text_type_name');
const jobInput = formElement.querySelector('.popup__text_type_job');

const popupImgTitle = popupImg.querySelector('.popup__heading_type_image');
const popupImgImage = popupImg.querySelector('.popup__img');

//функция открытия
const openPopup = function(popup) {
  popup.classList.add('popup_opened')
};
//функция закрытия
const closePopup = function(popup) {
  popup.classList.remove('popup_opened')
};
//функция отправки формы попапа редактирования
function handleFormSubmitPopupEdit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupEdit.classList.remove('popup_opened')
}
//обработчик события открытия попапа редактирования
popupEditOpeneButton.addEventListener('click', function () {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent
  jobInput.value = profileJob.textContent
});
//обработчик события открытия попапа добавления
popupAddOpeneButton.addEventListener('click', function () {
  openPopup(popupAdd);
});
//обработчик события закрытия попапа редактирования
popupEditCloseButton.addEventListener('click', function () {
  closePopup(popupEdit);
});
//обработчик события закрытия попапа добавления
popupAddCloseButton.addEventListener('click', function () {
  closePopup(popupAdd);
});
//обработчик события сохранения изменений в попапе редактирования
formElement.addEventListener('submit', handleFormSubmitPopupEdit);
//массив карточек
const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
//находим шаблон и место куда он встает
const cardTemplate = document.querySelector('#card-template').content.querySelector('.element');
const elements = document.querySelector('.elements');
//кнопка отправки формы попапа добавления
const popupAddSubmitButton = popupAdd.querySelector('.popup__button');
//инпуты попапа добавления
const titleInput = popupAdd.querySelector('.popup__text_type_title');
const linkInput = popupAdd.querySelector('.popup__text_type_link');
const popupAddFormElement = popupAdd.querySelector('.popup__form');
//функция карточки
function createCard(item) {
  const card = cardTemplate.cloneNode(true);
    const cardTitle = card.querySelector('.element__header').textContent = item.name;
    const cardImg = card.querySelector('.element__image');
    cardImg.src = item.link;
    card.querySelector('.element__image').alt = card.querySelector('.element__header').textContent;
    card.querySelector('.element__like').addEventListener('click', ((evt) => {evt.target.classList.toggle('element__like_active');}));
    card.querySelector('.element__trash').addEventListener('click', (() => {card.remove();}));
    
    cardImg.addEventListener('click', function () {
      openPopup(popupImg);

      popupImgTitle.textContent = cardTitle;
      popupImgImage.src = cardImg.src;
    });

    popupImgCloseButton.addEventListener('click', function () {
      closePopup(popupImg);
    });

    return card;
};
//функция добавления начальных карточек на странице
function renderCards() {
  const cards = initialCards.map((item) => {
    return createCard(item)
  });
  
  elements.append(...cards);
};

renderCards();
//функция добавления новой карточки
const popupAddSubmit = popupAddSubmitButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  const title = titleInput.value;
  const link = linkInput.value;

  const card = createCard({name: title, link: link});

  elements.prepend(card);

  popupAdd.classList.remove('popup_opened');
  popupAddFormElement.reset();
}); 

//обработчик события сохранения изменений добавленной карточки
popupAddSubmitButton.addEventListener('submit', popupAddSubmit);

/* СТАРЫЙ КОД, ЗАКОМЕНЧЕННЫЙ, НО ВЕСЬМА НЕ БЕСПОЛЕЗНЫЙ

const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_type_edit');
const popupAdd = document.querySelector('.popup_type_add');

const profileName = document.querySelector('.profile__name');
const profileJob = document.querySelector('.profile__description'); 
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__text_type_name');
const jobInput = formElement.querySelector('.popup__text_type_job');

const popupEditOpenButton = document.querySelector('.profile__edit-button');
const popupAddOpenButton = document.querySelector('.profile__add-button');
// кнопка закрытия
const popupCloseButton = popup.querySelector('.popup__close');

/*const openPopup = function(popup) {
  popup.classList.add('popup_opened')
};*/
/*
const openPopupEdit = function() {
  popupEdit.classList.add('popup_opened')
  nameInput.value = profileName.textContent
  jobInput.value = profileJob.textContent
};

const openPopuAdd = function() {
  popupAdd.classList.add('popup_opened')
};

function handleFormSubmitPopupEdit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popupEdit.classList.remove('popup_opened')
}

function handleFormSubmitPopupEdit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  popupEdit.classList.remove('popup_opened')
}

const closePopup = function(){
  popup.classList.remove('popup_opened')
};

formElement.addEventListener('submit', handleFormSubmitPopupEdit);

popupEditOpenButton.addEventListener('click', openPopupEdit);

popupAddOpenButton.addEventListener('click', openPopuAdd);

popupCloseButton.addEventListener('click', closePopup); */

