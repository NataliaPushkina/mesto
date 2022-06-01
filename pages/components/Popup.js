export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._popups = document.querySelectorAll('.popup');
  }

  openPopup() {
    this._popup.classList.add('popup_opened');
    document.addEventListener('keydown', this._handleEscClose);
  }

  closePopup = () => {
    this._popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', this._handleEscClose);
  }

  _handleEscClose = (evt) => {
    if (evt.key === 'Escape') {
      const popupOpened = document.querySelector('.popup_opened');
      this.closePopup();
    }
  }

  setEventListeners() {
    this._popups.forEach((popup) => {
      popup.addEventListener('mousedown', (evt) => {
        if (evt.target.classList.contains('popup_opened')) {
          this.closePopup();
        }
        if (evt.target.classList.contains('button_type_close')) {
          this.closePopup();
        }
      });
    });
}
}
