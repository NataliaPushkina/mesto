const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error",
};

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const popups = document.querySelectorAll(".popup");
const popupEdit = document.querySelector(".popup_action_edit");
const popupAdd = document.querySelector(".popup_action_add");
const popupPicture = document.querySelector(".popup_action_open-pic");
const popupUpdateAvatar = document.querySelector(".popup_action_update-avatar");
const buttonAdd = document.querySelector(".button_type_add");
const buttonEdit = document.querySelector(".button_type_edit");
const formEditElement = popupEdit.querySelector(".popup__form_edit-element");
const formAddElement = popupAdd.querySelector(".popup__form_add-element");
const formUpdateAvatar = popupUpdateAvatar.querySelector(
  ".popup__form_update-avatar"
);
const profileName = document.querySelector(".profile__title");
const profileAbout = document.querySelector(".profile__subtitle");
const nameInput = document.querySelector(".popup__input_el_name");
const jobInput = document.querySelector(".popup__input_el_job");
const placeName = document.querySelector(".popup__input_el_title");
const placeLink = document.querySelector(".popup__input_el_link");
const cardImage = document.querySelector(".popup__image");
const caption = document.querySelector(".popup__caption");
const elementsList = document.querySelector(".elements__list");
const avatarInput = document.querySelector(".popup__input_el_avatar");
const buttonEditAvatar = document.querySelector(".profile__edit-icon");
const avatarHtml = document.querySelector(".profile__avatar");

export {
  config,
  initialCards,
  popups,
  popupEdit,
  popupAdd,
  popupPicture,
  buttonAdd,
  buttonEdit,
  formEditElement,
  formAddElement,
  profileName,
  profileAbout,
  nameInput,
  jobInput,
  placeName,
  placeLink,
  cardImage,
  caption,
  elementsList,
  avatarInput,
  buttonEditAvatar,
  avatarHtml,
  formUpdateAvatar,
};
