const formObj = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const showInputError = (formObj, formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(formObj.inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(formObj.errorClass);
};

const hideInputError = (formObj, formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(formObj.inputErrorClass);
  errorElement.classList.remove(formObj.errorClass);
  errorElement.textContent = "";
};

const checkInputValidity = (formObj, formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formObj,
      formElement,
      inputElement,
      inputElement.validationMessage
    );
  } else {
    hideInputError(formObj, formElement, inputElement);
  }
};

const setEventListeners = (formObj, formElement) => {
  const inputList = Array.from(
    formElement.querySelectorAll(formObj.inputSelector)
  );
  const buttonElement = formElement.querySelector(formObj.submitButtonSelector);

  toggleButtonState(formObj, inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formObj, formElement, inputElement);
      toggleButtonState(formObj, inputList, buttonElement);
    });
  });
};

function enableValidation(formObj) {
  const formList = Array.from(document.querySelectorAll(formObj.formSelector));

  formList.forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => {
    });

    setEventListeners(formObj, formElement);
  });
}

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (formObj, inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(formObj.inactiveButtonClass);
    buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove(formObj.inactiveButtonClass);
    buttonElement.disabled = false;
  }
};

enableValidation(formObj);
