import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleProfileFormSubmit, handleCardAdd
    ) {
    super(popupSelector);
    this._handleProfileFormSubmit = handleProfileFormSubmit;
    this._handleCardAdd = handleCardAdd;
    this._inputList = super._popup.querySelectorAll('.popup__input');
   }

   _getInputValues() {
    // собирает данные всех полей формы

   }

   setEventListeners(data) {
// Метод setEventListeners класса PopupWithForm должен не только добавлять
// обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.
    this._inputList.forEach( input => {
      input.value = data[input.name];
    });
  }

   closePopup() {
    // при закрытии попапа форма должна ещё и сбрасываться
    super.closePopup();
    // evt.target.reset();
   }
}
