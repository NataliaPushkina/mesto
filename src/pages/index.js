import "../pages/index.css";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import {
  config,
  buttonAdd,
  buttonEdit,
  formEditElement,
  formAddElement,
  nameInput,
  jobInput,
  elementsList,
  avatarInput,
  buttonEditAvatar,
  avatarHtml,
  formUpdateAvatar,
} from "../utils/constants.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { Api } from "../components/Api.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";

export const user = new UserInfo(
  ".profile__title",
  ".profile__subtitle",
  ".profile__avatar"
);

const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-43",
  headers: {
    authorization: "26c152b8-4b25-45b9-afcc-e4f2f5c8d0d0",
    "Content-Type": "application/json",
  },
});

let userID = null;

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, cards]) => {
    user.setUserInfo(userData);
    userID = userData._id;
    cards.reverse();
    cardList.renderItems(cards);
  })
  .catch((err) => {
    console.log(err);
  });

const cardList = new Section(
  {
    renderer: (item) => {
      cardList.addItem(createCard(item, userID));
    },
  },
  ".elements__list"
);

const createCard = (item, userId) => {
  const card = new Card(
    item,
    {
      handleCardClick: (name, link) => {
        popupOpenPicture.openPopup(name, link);
      },
      handleCardRemove: (cardElement) => {
        popupDeleteCard.openPopup();
        popupDeleteCard.setSubmitAction(() => {
          api
            .deleteCard(cardElement._id)
            .then((res) => {
              card.handleCardDelete();
              popupDeleteCard.closePopup();
            })
            .catch((err) => {
              console.log(err);
            });
        });
      },
      handleLikeAdd: (cardElement) => {
        api
          .addLike(cardElement._id)
          .then((res) => {
            card.addLike(res.likes);
          })
          .catch((err) => {
            console.log(err);
          });
      },
      handleLikeRemove: (cardElement) => {
        api
          .deleteLike(cardElement._id)
          .then((res) => {
            card.removeLike(res.likes);
          })
          .catch((err) => {
            console.log(err);
          });
      },
    },
    ".template-element",
    userId
  );

  const cardElement = card.generateCard();
  return cardElement;
};

const popupWithFormEdit = new PopupWithForm(
  ".popup_action_edit",
  {
    handleFormSubmit: (data) => {
      popupWithFormEdit.renderLoading(true);
      api
        .editUserInfo(nameInput.value, jobInput.value)
        .then((result) => {
          user.setUserInfo(result);
          popupWithFormEdit.closePopup();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          popupWithFormAdd.renderLoading(false);
        });
    },
  },
  ".popup__form_edit-element"
);

popupWithFormEdit.setEventListeners();

const popupDeleteCard = new PopupWithConfirmation(
  ".popup_action_delete-pic",
  ".popup__form_delete-pic"
);
popupDeleteCard.setEventListeners();

const popupWithFormAdd = new PopupWithForm(
  ".popup_action_add",
  {
    handleFormSubmit: (card) => {
      popupWithFormAdd.renderLoading(true, "Создать", "Cоздание");
      api
        .addCard(card)
        .then((card) => {
          elementsList.prepend(createCard(card, userID));
          popupWithFormAdd.closePopup();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          popupWithFormAdd.renderLoading(false);
        });
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

const popupUpdateAvatar = new PopupWithForm(
  ".popup_action_update-avatar",
  {
    handleFormSubmit: () => {
      popupUpdateAvatar.renderLoading(true);
      api
        .updateAvatar(avatarInput.value)
        .then((res) => {
          user.setUserInfo(res);
          popupUpdateAvatar.closePopup();
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          popupUpdateAvatar.renderLoading(false);
        });
    },
  },
  ".popup__form_update-avatar"
);
popupUpdateAvatar.setEventListeners();

/**
 * ВАЛИДАЦИЯ
 */
const cardFormValidator = new FormValidator(config, formAddElement);
const profileFormValidator = new FormValidator(config, formEditElement);
const avatarFormValidator = new FormValidator(config, formUpdateAvatar);

cardFormValidator.enableValidation();
profileFormValidator.enableValidation();
avatarFormValidator.enableValidation();

buttonEdit.addEventListener("click", () => {
  const dataUser = user.getUserInfo();
  nameInput.value = dataUser.name;
  jobInput.value = dataUser.about;
  popupWithFormEdit.openPopup();
  profileFormValidator.cancelValidation();
});

buttonAdd.addEventListener("click", () => {
  popupWithFormAdd.openPopup();
  cardFormValidator.cancelValidation();
  cardFormValidator.toggleButton();
});

avatarHtml.addEventListener("click", () => {
  popupUpdateAvatar.openPopup();
  avatarFormValidator.cancelValidation();
  avatarFormValidator.toggleButton();
});

avatarHtml.addEventListener("mouseout", () => {
  buttonEditAvatar.classList.add("profile__edit-icon_hidden");
});

avatarHtml.addEventListener("mouseover", () => {
  buttonEditAvatar.classList.remove("profile__edit-icon_hidden");
});
