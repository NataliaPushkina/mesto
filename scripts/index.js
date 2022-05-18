import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { config } from "../utils/constants.js";

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

const popups = document.querySelectorAll('.popup');
const popupEdit = document.querySelector('.popup_action_edit');
const popupAdd = document.querySelector('.popup_action_add');
const popupPicture = document.querySelector('.popup_action_open-pic');
const buttonAdd = document.querySelector('.button_type_add');
const buttonEdit = document.querySelector('.button_type_edit');
const formEditElement = popupEdit.querySelector('.popup__form_edit-element');
const formAddElement = popupAdd.querySelector('.popup__form_add-element');
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input_el_name');
const jobInput = document.querySelector('.popup__input_el_job');
const placeName = document.querySelector('.popup__input_el_title');
const placeLink = document.querySelector('.popup__input_el_link');
const cardImage = document.querySelector('.popup__image');
const caption = document.querySelector('.popup__caption');
const elementsList =  document.querySelector('.elements__list');

const cardFormValidator = new FormValidator(config, formAddElement);
const profileFormValidator = new FormValidator(config, formEditElement);
cardFormValidator.enableValidation();
profileFormValidator.enableValidation();

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEsc);
}

function handlePhotoClick(name, link) {
  cardImage.src = link;
  cardImage.alt = name;
  caption.textContent = name;
  openPopup(popupPicture);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEsc);
}

function handleEsc(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('button_type_close')) {
      closePopup(popup);
    }
  });
});

function createCard(item, selector, functionName) {
  const card = new Card(item, selector, functionName);
  const cardElement = card.generateCard();
  return cardElement;
}

// добавить 6 карточек на страницу
initialCards.forEach((item) => {
  elementsList.prepend(createCard(item, '.template-element', handlePhotoClick));
});

// добавить новую карточку
function handleCardAdd(evt) {
  evt.preventDefault();
  elementsList.prepend(createCard({ name: placeName.value, link: placeLink.value }, '.template-element', handlePhotoClick));
  closePopup(popupAdd);
}

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
  closePopup(popupEdit);
}

buttonEdit.addEventListener('click', function () {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
  profileFormValidator.cancelValidation();
});

buttonAdd.addEventListener('click', function () {
  openPopup(popupAdd);
  cardFormValidator.cancelValidation();
  cardFormValidator.toggleButton();
});

formEditElement.addEventListener('submit', handleProfileFormSubmit);

formAddElement.addEventListener('submit', (evt) => {
  handleCardAdd(evt);
  evt.target.reset();
});
