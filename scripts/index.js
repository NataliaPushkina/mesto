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
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

function editProfileHandle(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
  closePopup(popupEdit);
}

function pushCard(item) {
  elementsList.prepend(item);
}

function render() {
  const cards = initialCards.map(getElement);
  pushCard(...cards);
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

  buttonDeleteCard.addEventListener('click', deleteCardHandle);

  buttonLikeCard.addEventListener('click', function () {
    buttonLikeCard.classList.toggle('button_status_active')
  });

  photo.addEventListener('click', function () {
    image.src = photo.src;
    image.alt = title.textContent;
    imageCaption.textContent = title.textContent;

    openPopup(popupPicture);
  });

  pushCard(getElementTemplate);
  return getElementTemplate;
}

function addCardHandle(evt) {
  evt.preventDefault();
  const newCard = getElement(
    { name: placeName.value, link: placeLink.value });
  pushCard(newCard);
  closePopup(popupAdd);
  placeName.value = '';
  placeLink.value = '';
}

function deleteCardHandle(evt) {
  const item = evt.target.closest('.element');
  item.remove();
}

function handleEsc(evt) {
  const popupOpened = document.querySelector('.popup_opened');
  if (evt.key === 'Escape') {
    closePopup(popupOpened);
  }
}

function handleOverlay(evt) {
  const popupOpened = document.querySelector('.popup_opened');
  if (evt.target === popupOpened) {
  closePopup(popupOpened);
  }
}

render();

buttonEdit.addEventListener('click', function () {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
});

buttonAdd.addEventListener('click', function () {
  openPopup(popupAdd);
});

buttonEditClose.addEventListener('click', function () {
  closePopup(popupEdit);
});

buttonAddClose.addEventListener('click', function () {
  closePopup(popupAdd);
});

buttonPictureClose.addEventListener('click', function () {
  closePopup(popupPicture);
});

formEditElement.addEventListener('submit', editProfileHandle);
formAddElement.addEventListener('submit', addCardHandle);

document.addEventListener('keydown', handleEsc);
document.addEventListener('click', handleOverlay);
