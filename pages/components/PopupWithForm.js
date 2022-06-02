import { Popup } from "./Popup.js";
import { user } from "../index.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, {handleFormSubmit}, formSelector) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(formSelector);
    this._inputList = this._popup.querySelectorAll('.popup__input');
   }

   _getInputValues() {
    this._inputList = document.querySelectorAll('.form__input');
    this._formValues = {};
    this._inputList.forEach(input => {
    this._formValues[input.name] = input.value;
      return this._formValues;
    });
   }

   setEventListeners(data) {
     this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      user.getUserInfo();
      this._handleFormSubmit(evt, this._getInputValues());
    });
  }

   closePopup() {
    super.closePopup();
    this._formValues.reset();
  }
}
