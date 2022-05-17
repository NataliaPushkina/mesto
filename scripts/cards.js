export class Card {
  constructor(data, cardSelector, handlePhotoClick) {
    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
    this._handlePhotoClick = handlePhotoClick;
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
    this._element = this._getTemplate();
    this._setEventListeners();

    this._element.querySelector('.element__title').textContent = this._name;
    this._element.querySelector('.element__photo').alt = this._name;
    this._element.querySelector('.element__photo').src = this._link;

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

    this._element.querySelector('.element__photo').addEventListener('click', () => {
      this._handlePhotoClick(this._name, this._link);
    });

    this._element.querySelector('.button_type_like').addEventListener('click', (evt) => {
      this._handleCardLike(evt);
    });


  }
}
