const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add('popup__input_type_error');
  errorElement.textContent = errorMessage;
  errorElement.classList.add('popup__error_visible');
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove('popup__input_type_error');
  errorElement.classList.remove('popup__error_visible');
  errorElement.textContent = '';
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll('.popup__input'));
  const buttonElement = formElement.querySelector('.popup__button');

  toggleButton(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', function () {
      checkInputValidity(formElement, inputElement);
      toggleButton(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = Array.from(document.querySelectorAll('.popup__form'));
  formList.forEach((formElement) => {
    formElement.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setEventListeners(formElement);
  });
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  })
};

const toggleButton = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add('popup__button_disabled');
    // buttonElement.disabled = true;
  } else {
    buttonElement.classList.remove('popup__button_disabled');
    // buttonElement.disabled = false;
  }
};

enableValidation();


// enableValidation({
//   formSelector: '.popup__form',
//   inputSelector: '.popup__input',
//   submitButtonSelector: '.popup__button',
//   inactiveButtonClass: 'popup__button_disabled',
//   inputErrorClass: 'popup__input_type_error',
//   errorClass: 'popup__error_visible'
// });







// function enableValidation(formSelect) {
//   const form = document.querySelector(formSelect);
//  // console.log(form);

// form.addEventListener('submit', (event) => handleFormSubmit(event, form));
// form.addEventListener('input', handleFormInput);
// }

// enableValidation('.popup__form');

// // function enableValidation() {
// //   const popupEdit = document.querySelector('.popup_action_edit');
// //   const formEdit = popupEdit.querySelector('.popup__form');
// //   // console.log(formEdit);

// //   formEdit.addEventListener('submit', (event) => handleFormSubmit(event, formEdit));
// //   formEdit.addEventListener('input', handleFormInput);
// // }

// function handleFormSubmit(event, form) {
//   event.preventDefault();
//   //const formEdit = event.currentTarget;
//   if (form.checkValidity()) {
//     alert('форма валидна');
//   } else {
//     alert('форма не валидна');
//   }
// }

// function handleFormInput(event) {
//   const input = event.target;
//   const errorNode = document.querySelector(`#${input.id}-error`);

//   if (input.validity.valid) {
//     errorNode.textContent = '';
//   } else {
//     errorNode.textContent = input.validationMessage;
//   }
// }

