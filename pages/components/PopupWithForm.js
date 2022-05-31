import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector,
    //колбэк сабмита формы
    handleProfileFormSubmit,
    handleCardAdd
    ) {
    super(popupSelector);
    this._handleProfileFormSubmit = handleProfileFormSubmit;
    this._handleCardAdd = handleCardAdd;
   }

   _getInputValues() {
    // собирает данные всех полей формы

   }

   setEventListeners() {
// Метод setEventListeners класса PopupWithForm должен не только добавлять
// обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.
   }

   closePopup() {
    // при закрытии попапа форма должна ещё и сбрасываться
    this._popup.closePopup();
    // evt.target.reset();
   }
}
