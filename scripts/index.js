let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = popup.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__description'); 
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__text_type_name');
let jobInput = formElement.querySelector('.popup__text_type_job');

let popupOpen = function() {
  popup.classList.add('popup_opened')
  nameInput.value = profileName.textContent
  jobInput.value = profileJob.textContent
};

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popup.classList.remove('popup_opened')
}

let popupClose = function(){
  popup.classList.remove('popup_opened')
};

formElement.addEventListener('submit', handleFormSubmit);

popupOpenButton.addEventListener('click', popupOpen);

popupCloseButton.addEventListener('click',popupClose);
