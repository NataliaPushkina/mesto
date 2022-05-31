import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector, cardImageSelector, captionSelector, handleCardClick) {
    super(popupSelector);
    this._cardImage = document.querySelector(cardImageSelector);
    this._caption = document.querySelector(captionSelector);
    this._handleCardClick = handleCardClick;
  }

  openPopup(item) {
    this._cardImage.src = item.link;
    this._cardImage.alt = item.name;
    this._cardImage.textContent = item.name;
    super._openPopup();
  }
}
