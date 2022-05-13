export class Card {
  // удалить handleEsc из конструктора
  constructor(data, cardSelector, handleEsc) {
    this._link = data.link;
    this._name = data.name;
    this.cardSelector = cardSelector;
    this.handleEsc = handleEsc;
  }

  _getTemplate() {
    const cardElement = document
    .querySelector(this.cardSelector)
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

  _setEventListeners() {
    this._element.querySelector('.button_type_delete').addEventListener('click', () => {
      this._hadlerCardDelete();
    });

    this._element.querySelector('.element__photo').addEventListener('click', () => {
      this._handleOpenPopupPicture();
    });

    this._element.querySelector('.button_type_like').addEventListener('click', (evt) => {
      this._handleCardLike(evt);
    });
  }

  _handleOpenPopupPicture() {
    const popupPicture = document.querySelector('.popup_action_open-pic');
    document.querySelector('.popup__image').src = this._link;
    document.querySelector('.popup__image').alt = this._name;
    document.querySelector('.popup__caption').textContent = this._name;
    popupPicture.classList.add('popup_opened');
    // document.addEventListener('keydown', () => {
    //   this._handleEsc});
  }

  _hadlerCardDelete() {
    this._element.remove();
  }

  _handleCardLike(evt) {
    evt.target.classList.toggle('button_status_active');
  }
}
