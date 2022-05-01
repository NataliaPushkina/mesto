const popups = document.querySelectorAll('.popup');
const buttonEdit = document.querySelector('.button_type_edit');
const popupEdit = document.querySelector('.popup_action_edit');
const popupAdd = document.querySelector('.popup_action_add');
const popupPicture = document.querySelector('.popup_action_open-pic');
const buttonEditClose = popupEdit.querySelector('.button_type_close');
const buttonAddClose = popupAdd.querySelector('.button_type_close');
const buttonPictureClose = popupPicture.querySelector('.button_type_close');
const buttonAdd = document.querySelector('.button_type_add');
const formEditElement = popupEdit.querySelector('.popup__form');
const formAddElement = popupAdd.querySelector('.popup__form');
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input_el_name');
const jobInput = document.querySelector('.popup__input_el_job');
const image = document.querySelector('.popup__image');
const imageCaption = document.querySelector('.popup__caption');
const templateElement = document.querySelector('.template-element');
const elementsList =  document.querySelector('.elements__list');
const placeName = document.querySelector('.popup__input_el_title');
const placeLink = document.querySelector('.popup__input_el_link');

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEsc);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEsc);
}

popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('button_type_close')) {
      closePopup(popup);
    }
  });
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
  closePopup(popupEdit);
}

function render() {
  const cards = initialCards.map(getElement);
  elementsList.prepend(...cards);
}

function getElement(item) {
  const getElementTemplate = templateElement.content.cloneNode(true);
  const title = getElementTemplate.querySelector('.element__title');
  const photo = getElementTemplate.querySelector('.element__photo');
  const buttonDeleteCard = getElementTemplate.querySelector('.button_type_delete');
  const buttonLikeCard = getElementTemplate.querySelector('.button_type_like');

  title.textContent = item.name;
  photo.src = item.link;
  photo.alt = item.name;

  buttonDeleteCard.addEventListener('click', handleCardDelete);

  buttonLikeCard.addEventListener('click', function () {
    buttonLikeCard.classList.toggle('button_status_active')
  });

  photo.addEventListener('click', function () {
    image.src = photo.src;
    image.alt = title.textContent;
    imageCaption.textContent = title.textContent;

    openPopup(popupPicture);
  });

  return getElementTemplate;
}

function handleCardAdd(evt) {
  evt.preventDefault();
  const newCard = getElement(
    { name: placeName.value, link: placeLink.value });
  elementsList.prepend(newCard);
  closePopup(popupAdd);
}

function handleCardDelete(evt) {
  const item = evt.target.closest('.element');
  item.remove();
}

function handleEsc(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

render();

buttonEdit.addEventListener('click', function () {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
  cancelValidation(config);
});

buttonAdd.addEventListener('click', function () {
  openPopup(popupAdd);
  cancelValidation(config);
  toggleButton(config, formAddElement);
});

formEditElement.addEventListener('submit', handleProfileFormSubmit);

formAddElement.addEventListener('submit', (evt) => {
  handleCardAdd(evt);
  evt.target.reset();
});
