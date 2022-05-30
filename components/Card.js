import { Popup } from "./Popup.js";
import { PopupWithImage } from "./PopupWithImage.js";

export class Card {
  constructor(data, cardSelector, {handleCardClick}) {
    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector('.element__photo');
    this._handleCardClick = handleCardClick;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this._cardSelector)
    .content
    .querySelector('.element')
    .cloneNode(true);

   return cardElement;
  }

  generateCard() {
    this._setEventListeners();
    this._element.querySelector('.element__title').textContent = this._name;
    this._cardImage.alt = this._name;
    this._cardImage.src = this._link;

    return this._element;
  }

  _hadlerCardDelete() {
    this._element.remove();
  }

  _handleCardLike(evt) {
    evt.target.classList.toggle('button_status_active');
  }

  _setEventListeners() {
    this._element.querySelector('.button_type_delete').addEventListener('click', () => {
      this._hadlerCardDelete();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._cardImage);
    });

    this._element.querySelector('.button_type_like').addEventListener('click', (evt) => {
      this._handleCardLike(evt);
    });


  }
}
