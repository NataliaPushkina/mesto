import { Popup } from "./Popup.js";

export class PopupWithConfirmation extends Popup {
  constructor(popupSelector, formSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector(formSelector);
  }

  setSubmitAction(action) {
    this._handleSubmitCallback = action;
  }
  setEventListeners() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleSubmitCallback();
    });

    super.setEventListeners();
  }
}
