import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector, cardImageSelector, captionSelector) {
    super(popupSelector);
    this._link = document.querySelector(cardImageSelector);
    this._mame = document.querySelector(captionSelector);
    this._handleCardClick = handleCardClick;
  }

  openPopup() {
    this._popup.classList.add('popup_opened');
    this._handleCardClick();
  }

  handleCardClick = (item) => {
    this._link.src = item.link;
    this._link.alt = item.name;
    this._mame.textContent = this._name;
    popupOpenPicture.openPopup();
    popupOpenPicture.setEventListeners();
  }
}
