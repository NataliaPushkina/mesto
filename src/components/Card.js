export class Card {
  constructor(
    data,
    { handleCardClick, handleCardRemove, handleLikeAdd, handleLikeRemove },
    cardSelector,
    userId
  ) {
    this._data = data;
    this._link = data.link;
    this._name = data.name;
    this._id = data.id;
    this._likes = data.likes;
    this._cardSelector = cardSelector;
    this._element = this._getTemplate();
    this._cardImage = this._element.querySelector(".element__photo");
    this._handleCardClick = handleCardClick;
    this._handleDeleteIconClick = handleCardRemove;
    this._buttonLike = this._element.querySelector(".button_type_like");
    this._buttonDelete = this._element.querySelector(".button_type_delete");
    this._likesInfo = this._element.querySelector(".element__like-count");
    this._userId = userId;
    this._handleLikeAdd = handleLikeAdd;
    this._handleLikeRemove = handleLikeRemove;
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
    if (this._isOwner()) {
      this._buttonDelete.remove();
    }
    this._likesInfo.textContent = this._likes.length;
    if (this._isLiked()) {
      this._buttonLike.classList.add("button_status_active");
    }
    this._isLiked();
    this._isOwner();
    this._setEventListeners();

    return this._element;
  }

  updateLikes(likes) {
    this._likes = likes;
    this._likesInfo.textContent = this._likes.length;
  }

  _isLiked() {
    return this._likes.some((like) => like._id === this._userId);
  }

  _isOwner = () => this._data.owner._id !== this._userId;

  _toggleLikeState = (data) => {
    if (this._isLiked()) {
      this._handleLikeRemove(this._data);
    } else {
      this._handleLikeAdd(this._data);
    }
  };

  addLike(likes) {
    this._buttonLike.classList.add("button_status_active");
    this.updateLikes(likes);
  }

  removeLike(likes) {
    this._buttonLike.classList.remove("button_status_active");
    this.updateLikes(likes);
  }

  handleCardDelete() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._cardImage.addEventListener("click", () => {
      this._handleCardClick(this._name, this._link);
    });

    this._buttonLike.addEventListener("click", () => {
      this._toggleLikeState(this._data);
    });

    this._buttonDelete.addEventListener("click", (evt) => {
      evt.preventDefault();
      this._handleDeleteIconClick(this._data);
    });
  }
}
