import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, { handleFormSubmit }, formSelector) {
    super(popupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this._popup.querySelector(formSelector);
    this._inputList = this._popup.querySelectorAll(".popup__input");
    this._buttonSubmit = document.querySelectorAll(".popup__button");
  }

  _getInputValues() {
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });

    return this._formValues;
  }

  renderLoading(
    isLoading,
    messageInitial = "Сохранить",
    messageLoading = "Сохранение..."
  ) {
    if (isLoading) {
      this._buttonSubmit.textContent = messageLoading;
    } else {
      this._buttonSubmit.textContent = messageInitial;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  closePopup() {
    super.closePopup();
    this._form.reset();
  }
}