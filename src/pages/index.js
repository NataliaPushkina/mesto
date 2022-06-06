import "../pages/index.css";
import {
  Card
} from "../components/Card.js";
import {
  FormValidator
} from "../components/FormValidator.js";
import {
  config,
  initialCards,
  buttonAdd,
  buttonEdit,
  formEditElement,
  formAddElement,
  nameInput,
  jobInput,
  placeName,
  placeLink,
  elementsList,
} from "../utils/constants.js";
import {
  PopupWithForm
} from "../components/PopupWithForm.js";
import {
  PopupWithImage
} from "../components/PopupWithImage.js";
import {
  Section
} from "../components/Section.js";
import {
  UserInfo
} from "../components/UserInfo.js";

export const user = new UserInfo(".profile__title", ".profile__subtitle");
let userData = user.getUserInfo();

/**
 * СОЗДАНИЕ НОВОЙ КАРТОЧКИ
 */
const createCard = (item) => {
  const card = new Card(
    item, {
      handleCardClick: (name, link) => {
        popupOpenPicture.openPopup(name, link);
      },
    },
    ".template-element"
  );
  const cardElement = card.generateCard();
  return cardElement;
};

/**
 * ДОБАВЛЕНИЕ КАРТОЧЕК НА СТРАНИЦУ
 */
const cardList = new Section({
    items: initialCards,
    renderer: (item) => {
      cardList.addItem(createCard(item));
    },
  },
  ".elements__list"
);
cardList.renderItems(initialCards);

const popupWithFormEdit = new PopupWithForm(
  ".popup_action_edit", {
    handleFormSubmit: (data) => {
      user.setUserInfo(data);
      popupWithFormEdit.closePopup();
    },
  },
  ".popup__form_edit-element"
);

popupWithFormEdit.setEventListeners();

const popupWithFormAdd = new PopupWithForm(
  ".popup_action_add", {
    handleFormSubmit: () => {
      user.getUserInfo();
      elementsList.prepend(
        createCard({
          name: placeName.value,
          link: placeLink.value
        })
      );
      popupWithFormAdd.closePopup();
    },
  },
  ".popup__form_add-element"
);

popupWithFormAdd.setEventListeners();

const popupOpenPicture = new PopupWithImage(
  ".popup_action_open-pic",
  ".popup__image",
  ".popup__caption"
);

popupOpenPicture.setEventListeners();

/**
 * ВАЛИДАЦИЯ
 */
const cardFormValidator = new FormValidator(config, formAddElement);
const profileFormValidator = new FormValidator(config, formEditElement);
cardFormValidator.enableValidation();
profileFormValidator.enableValidation();

buttonEdit.addEventListener("click", () => {
  let data = user.getUserInfo();
  nameInput.value = data.name;
  jobInput.value = data.job;
  popupWithFormEdit.openPopup();
  profileFormValidator.cancelValidation();
});

buttonAdd.addEventListener("click", () => {
  popupWithFormAdd.openPopup();
  cardFormValidator.cancelValidation();
  cardFormValidator.toggleButton();
});
