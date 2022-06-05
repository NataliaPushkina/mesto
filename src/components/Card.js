export class Card {
  constructor(data, {handleCardClick}, cardSelector) {
    this._data = data;
    this._link = data.link;
    this._name = data.name;
    this._cardSelector = cardSelector;
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".element__photo");
    this._handleCardClick = handleCardClick;
    this._buttonLike = this._element.querySelector(".button_type_like");
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardSelector)
      .content.querySelector(".element")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._setEventListeners();
    this._element.querySelector(".element__title").textContent = this._name;
    this._cardImage.alt = this._name;
    this._cardImage.src = this._link;

    return this._element;
  }

  _hadlerCardDelete() {
    this._element.remove();
    this._element = null;
  }

  _handleCardLike() {
    this._buttonLike.classList.toggle("button_status_active");
  }

  _setEventListeners() {
    this._element
      .querySelector(".button_type_delete")
      .addEventListener("click", () => {
        this._hadlerCardDelete();
      });

    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });

    this._buttonLike.addEventListener("click", (evt) => {
      this._handleCardLike(evt);
    });
  }
}
