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

const api = new Api(
  "https://mesto.nomoreparties.co/v1/cohort-43",
  "26c152b8-4b25-45b9-afcc-e4f2f5c8d0d0"
);

Promise.all([api.getUserInfo(), api.getInitialCards()])
  .then(([userData, result]) => {
    user.setUserInfo(userData);
    user.setUserAvatar(userData.avatar);
    const cardList = new Section(
      {
        items: result,
        renderer: (item) => {
          cardList.addItem(createCard(item, userData._id));
        },
      },
      ".elements__list"
    );
    result.reverse();
    cardList.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });

/**
 * СОЗДАНИЕ НОВОЙ КАРТОЧКИ
 */

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
              console.log(res, "delete");
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
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          popupWithFormEdit.renderLoading(false);
        });
      popupWithFormEdit.closePopup();
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
      Promise.all([api.getUserInfo(), api.addCard(card)])
        .then(([userInfo, card]) => {
          elementsList.prepend(createCard(card, userInfo._id));
          user.setUserInfo(userInfo);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          popupWithFormAdd.renderLoading(false);
        });
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
const avatarFormValidator = new FormValidator(config, formUpdateAvatar);

cardFormValidator.enableValidation();
profileFormValidator.enableValidation();
avatarFormValidator.enableValidation();

buttonEdit.addEventListener("click", () => {
  api.getUserInfo().then((userInfo) => {
    user.getUserInfo();
    nameInput.value = userInfo.name;
    jobInput.value = userInfo.about;
  });
  popupWithFormEdit.openPopup();
  profileFormValidator.cancelValidation();
});

buttonAdd.addEventListener("click", () => {
  popupWithFormAdd.openPopup();
  cardFormValidator.cancelValidation();
  cardFormValidator.toggleButton();
});

const popupUpdateAvatar = new PopupWithForm(
  ".popup_action_update-avatar",
  {
    handleFormSubmit: () => {
      popupUpdateAvatar.renderLoading(true);
      api
        .updateAvatar(avatarInput.value)
        .then((res) => {
          user.setUserAvatar(res.avatar);
          console.log(res.avatar);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          popupUpdateAvatar.renderLoading(false);
        });
      popupUpdateAvatar.closePopup();
    },
  },
  ".popup__form_update-avatar"
);
popupUpdateAvatar.setEventListeners();

buttonEditAvatar.addEventListener("click", () => {
  avatarFormValidator.cancelValidation();
  avatarFormValidator.toggleButton();
  popupUpdateAvatar.openPopup();
});

avatarHtml.addEventListener("mouseout", () => {
  buttonEditAvatar.classList.add("profile__edit-icon_hidden");
});

avatarHtml.addEventListener("mouseover", () => {
  buttonEditAvatar.classList.remove("profile__edit-icon_hidden");
});
