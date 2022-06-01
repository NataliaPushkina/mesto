//import './pages/index.css';
import { Card } from "./components/Card.js";
import { FormValidator } from "./components/FormValidator.js";
import {
  config,
  initialCards,
  popups,
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
  elementsList
} from "../utils/constants.js";
import { Popup } from "./components/Popup.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import { Section } from "./components/Section.js";
// import { UserInfo } from "./components/UserInfo.js";

const popupEditProfile = new Popup('.popup_action_edit');
popupEditProfile.setEventListeners();

const popupAddCard = new Popup('.popup_action_add');
popupAddCard.setEventListeners();

const popupOpenPicture = new PopupWithImage('.popup_action_open-pic', '.popup__image', '.popup__caption');
popupOpenPicture.setEventListeners();


// // ДОБАВЛЕНИЕ КАРТОЧКИ ПОЛЬЗОВАТЕЛЕМ
const handleCardAdd = (evt) => {
  evt.preventDefault();
  elementsList.prepend(createCard({ name: placeName.value, link: placeLink.value }));
  popupAddCard.closePopup();
}

// СОЗДАНИЕ НОВОЙ КАРТОЧКИ
const createCard = (item) => {
  const card = new Card(item,
    {
      handleCardClick: (name, link) => {
      popupOpenPicture.openPopup(name, link);
      popupOpenPicture.setEventListeners();
    }
    }, '.template-element');
  const cardElement = card.generateCard();
  return cardElement;
}

// ДОБАВЛЕНИЕ КАРТОЧЕК НА СТРАНИЦУ
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardList.addItem(createCard(item));
  }
},
'.elements__list'
);

cardList.renderItems(initialCards);

// const userInfo = new UserInfo('.profile__title', '.profile__subtitle');

//ВАЛИДАЦИЯ
const cardFormValidator = new FormValidator(config, formAddElement);
const profileFormValidator = new FormValidator(config, formEditElement);
cardFormValidator.enableValidation();
profileFormValidator.enableValidation();

// !!!!! метод открытия попап картинки !!!!!!
// function handleCardClick(name, link) {
//   cardImage.src = link;
//   cardImage.alt = name;
//   caption.textContent = name;
//   popupOpenPicture.openPopup();
//   popupOpenPicture.setEventListeners();
// }

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  // user.getUserInfo();
  // profileName.textContent = nameInput.value;
  // profileAbout.textContent = jobInput.value;
  popupEditProfile.closePopup();
}

buttonEdit.addEventListener('click', function () {
  popupEditProfile.openPopup();
 // user.setUserInfo();
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
  profileFormValidator.cancelValidation();
});

buttonAdd.addEventListener('click', function () {
  popupAddCard.openPopup();
  cardFormValidator.cancelValidation();
  cardFormValidator.toggleButton();
});

formEditElement.addEventListener('submit', handleProfileFormSubmit);
  // evt.preventDefault();
  // userInfo.getUserInfo();


formAddElement.addEventListener('submit', (evt) => {
  handleCardAdd(evt);
  evt.target.reset();
});
