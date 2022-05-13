import { Card } from "./cards.js";

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
const buttonEdit = document.querySelector('.button_type_edit');
const popupEdit = document.querySelector('.popup_action_edit');
const popupAdd = document.querySelector('.popup_action_add');
const popupPicture = document.querySelector('.popup_action_open-pic');
const buttonEditClose = popupEdit.querySelector('.button_type_close');
const buttonAddClose = popupAdd.querySelector('.button_type_close');
const buttonPictureClose = popupPicture.querySelector('.button_type_close');
const buttonAdd = document.querySelector('.button_type_add');
const formEditElement = popupEdit.querySelector('.popup__form');
const formAddElement = popupAdd.querySelector('.popup__form');
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input_el_name');
const jobInput = document.querySelector('.popup__input_el_job');
const image = document.querySelector('.popup__image');
const imageCaption = document.querySelector('.popup__caption');
const templateElement = document.querySelector('.template-element');
const elementsList =  document.querySelector('.elements__list');
const placeName = document.querySelector('.popup__input_el_title');
const placeLink = document.querySelector('.popup__input_el_link');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEsc);
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

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
  closePopup(popupEdit);
}

// добавить 6 карточек на страницу
initialCards.forEach((item) => {
  const card = new Card(item, '.template-element');
  const cardElement = card.generateCard();
  document.querySelector('.elements__list').prepend(cardElement);
});

function handleCardAdd(evt) {
  evt.preventDefault();
  const card = new Card({ name: placeName.value, link: placeLink.value }, '.template-element');
  const newCard = card.generateCard();
  elementsList.prepend(newCard);
  // const newCard = getElement(
  //   { name: placeName.value, link: placeLink.value });
  // elementsList.prepend(newCard);
  closePopup(popupAdd);
}

function handleEsc(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

buttonEdit.addEventListener('click', function () {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
  cancelValidation(config);
});

buttonAdd.addEventListener('click', function () {
  openPopup(popupAdd);
  // cancelValidation(config);
  // toggleButton(config, formAddElement);
});

formEditElement.addEventListener('submit', handleProfileFormSubmit);

formAddElement.addEventListener('submit', (evt) => {
  handleCardAdd(evt);
  evt.target.reset();
});
