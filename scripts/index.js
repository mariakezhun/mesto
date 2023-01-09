let popup = document.querySelector('.popup');
let popupOpenButton = document.querySelector('.profile__edit-button');
let popupCloseButton = popup.querySelector('.popup__close');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__description'); 

let popupOpen = function() {
  popup.classList.add('popup__opened')
  nameInput.value = profileName.textContent
  jobInput.value = profileJob.textContent
};

popupOpenButton.addEventListener('click', popupOpen);

let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__text_type_name');
let jobInput = formElement.querySelector('.popup__text_type_job');

nameInput.value =  profileName.textContent;

function handleFormSubmit (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileJob.textContent = jobInput.value;
    popup.classList.remove('popup__opened')
}

formElement.addEventListener('submit', handleFormSubmit);

let popupClose = function(){
  popup.classList.remove('popup__opened')
};

popupCloseButton.addEventListener('click',popupClose);
