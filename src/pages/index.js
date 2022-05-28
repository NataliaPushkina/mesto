import { Card } from "../../components/Card.js";
import { FormValidator } from "../../components/FormValidator.js";
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
} from "../../utils/constants.js";
import { Popup } from "../../components/Popup.js";
import { PopupWithForm } from "../../components/PopupWithForm.js";
import { PopupWithImage } from "../../components/PopupWithImage.js";
import { Section } from "../../components/section.js";
import { UserInfo } from "../../components/UserInfo.js";

const popupEditProfile = new Popup('.popup_action_edit');
popupEditProfile.setEventListeners();

const popupAddCard = new Popup('.popup_action_add');
popupAddCard.setEventListeners();

const popupOpenPicture = new Popup('.popup_action_open-pic', '.popup__image', '.popup__caption');

// СОЗДАНИЕ НОВОЙ КАРТОЧКИ
const createCard = (item) => {
  console.log(item);
  const card = new Card(item, '.template-element', () => handleCardClick());
  const cardElement = card.generateCard();
  return cardElement;
}

// ДОБАВЛЕНИЕ КАРТОЧКИ ПОЛЬЗОВАТЕЛЕМ
function handleCardAdd(evt) {
  evt.preventDefault();
  elementsList.prepend(createCard({ name: placeName.value, link: placeLink.value }));
  popupAddCard.closePopup();
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
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
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

formEditElement.addEventListener('submit', handleProfileFormSubmit)

formAddElement.addEventListener('submit', (evt) => {
  handleCardAdd(evt);
  evt.target.reset();
});
