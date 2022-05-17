import { Card } from "./cards.js";
import { FormValidator } from "./FormValidator.js";
import { config } from "../utils.js";

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

const cardFormValidator = new FormValidator(config, formEditElement);
const profileFormValidator = new FormValidator(config, formAddElement);
cardFormValidator.enableValidation();
profileFormValidator.enableValidation();

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEsc);
}

function handlePhotoClick(name, link) {
  const popupPicture = document.querySelector('.popup_action_open-pic');
  document.querySelector('.popup__image').src = link;
  document.querySelector('.popup__image').alt = name;
  document.querySelector('.popup__caption').textContent = name;
  popupPicture.classList.add('popup_opened');
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

// добавить 6 карточек на страницу
initialCards.forEach((item) => {
  const card = new Card(item, '.template-element', handlePhotoClick);
  const cardElement = card.generateCard();
  document.querySelector('.elements__list').prepend(cardElement);
});

// добавить новую карточку
function handleCardAdd(evt) {
  evt.preventDefault();
  const elementsList =  document.querySelector('.elements__list');
  const card = new Card({ name: placeName.value, link: placeLink.value }, '.template-element', handlePhotoClick);
  const newCard = card.generateCard();
  elementsList.prepend(newCard);
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
  cardFormValidator.cancelValidation();
});

buttonAdd.addEventListener('click', function () {
  openPopup(popupAdd);
  profileFormValidator.cancelValidation();
  profileFormValidator.toggleButton();
});

formEditElement.addEventListener('submit', handleProfileFormSubmit);

formAddElement.addEventListener('submit', (evt) => {
  handleCardAdd(evt);
  evt.target.reset();
});
