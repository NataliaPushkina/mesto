//import './pages/index.css';
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import {
  config,
  initialCards,
  buttonAdd,
  buttonEdit,
  formEditElement,
  formAddElement,
  profileName,
  profileAbout,
  placeName,
  placeLink,
  elementsList
} from "../utils/constants.js";
import { Popup } from "../components/Popup.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";

export const user = new UserInfo('.profile__title', '.profile__subtitle');
// user.setUserInfo(profileName, profileAbout);

/**
 * СОЗДАНИЕ НОВОЙ КАРТОЧКИ
 */
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

/**
 * ДОБАВЛЕНИЕ КАРТОЧЕК НА СТРАНИЦУ
 */
const cardList = new Section({
  items: initialCards,
  renderer: (item) => {
    cardList.addItem(createCard(item));
  }
},
'.elements__list'
);
cardList.renderItems(initialCards);


/**
 * ВАЛИДАЦИЯ
 */
const cardFormValidator = new FormValidator(config, formAddElement);
const profileFormValidator = new FormValidator(config, formEditElement);
cardFormValidator.enableValidation();
profileFormValidator.enableValidation();

const popupEditProfile = new Popup('.popup_action_edit');
popupEditProfile.setEventListeners();

const popupAddCard = new Popup('.popup_action_add');
popupAddCard.setEventListeners();

const popupOpenPicture = new PopupWithImage('.popup_action_open-pic', '.popup__image', '.popup__caption');
popupOpenPicture.setEventListeners();

const popupWithFormEdit = new PopupWithForm('.popup_action_edit',
  {handleFormSubmit: (evt, inputs) => {
    evt.preventDefault();
    popupEditProfile.closePopup();
  }
  }, '.popup__form_edit-element');
  popupWithFormEdit.setEventListeners();

  const popupWithFormAdd = new PopupWithForm('.popup_action_add',
  {handleFormSubmit: (evt, inputs) => {
    evt.preventDefault();
    elementsList.prepend(createCard({ name: placeName.value, link: placeLink.value }));
    popupAddCard.closePopup();
    }
  }, '.popup__form_add-element');
  popupWithFormAdd.setEventListeners();

  buttonEdit.addEventListener('click', function () {
    popupEditProfile.openPopup();
    // user.setUserInfo(profileName, profileAbout);
    profileFormValidator.cancelValidation();
  });

  buttonAdd.addEventListener('click', function () {
    popupAddCard.openPopup();
    // user.setUserInfo(profileName, profileAbout);
    cardFormValidator.cancelValidation();
    cardFormValidator.toggleButton();
  });
