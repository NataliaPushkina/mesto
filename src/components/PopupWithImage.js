import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popupSelector, cardImageSelector, captionSelector) {
    super(popupSelector);
    this._cardImage = document.querySelector(cardImageSelector);
    this._caption = this._popup.querySelector(captionSelector);
  }

  openPopup = (name, link) => {
    this._cardImage.src = link;
    this._cardImage.alt = name;
    this._caption.textContent = name;
    super.openPopup();
  };
}
