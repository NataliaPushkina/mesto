const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];
const editBtn = document.querySelector('.button_type_edit');
// const popup = document.querySelector('.popup');
const popupEdit = document.querySelector('.popup_action_edit');
const popupAdd = document.querySelector('.popup_action_add');
const closeBtnEdit = popupEdit.querySelector('.button_type_close');
const closeBtnAdd = popupAdd.querySelector('.button_type_close');
const addBtn = document.querySelector('.button_type_add');
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
const popupPicture = document.querySelector('.popup_action_open-pic');
const imageLink = document.querySelector('popup__image-link');

function openPopup(popup) {
 popup.classList.add('popup_opened');
}

editBtn.addEventListener('click', function () {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
});

addBtn.addEventListener('click', function () {
  openPopup(popupAdd);
});

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}

closeBtnEdit.addEventListener('click', function () {
  closePopup(popupEdit);
});

closeBtnAdd.addEventListener('click', function () {
  closePopup(popupAdd);
});

// function openPopupEdit() {
//   popupEdit.classList.add('popup_opened');
//   nameInput.value = profileName.textContent;
//   jobInput.value = profileAbout.textContent;
// }

// function closePopupEdit() {
//   popup.classList.remove('popup_opened');
//   // popup.style.transitionProperty = "opacity";
//   // popup.style.transitionDuration = "0.8s";
//   // popup.style.transitionTimingFunction = "ease";
// }

// function openPopupAdd() {
//   popupAdd.classList.add('popup_opened');
// }

// function closePopupAdd() {
//   popupAdd.classList.remove('popup_opened');
// }

function formEditSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
  closePopup(popupEdit);
}

function render() {
  const html = initialCards.map(getElement);
  elementsList.append(...html);
}

function getElement(item) {
  const getElementTemplate = templateElement.content.cloneNode(true);
  const title = getElementTemplate.querySelector('.element__title');
  const photo = getElementTemplate.querySelector('.element__photo');
  const deleteBtn = getElementTemplate.querySelector('.button_type_delete');
  const likeBtn = getElementTemplate.querySelector('.button_type_like');
  title.textContent = item.name;
  photo.src = item.link;
  photo.alt = item.name;
  deleteBtn.addEventListener('click', handleDeleteCard);
  likeBtn.addEventListener('click', function () {
    likeBtn.classList.toggle('button_status_active')
  });
  return getElementTemplate;
}

function handleAddCard(evt) {
  evt.preventDefault();
  const placeName = document.querySelector('.popup__input_el_title').value;
  const placeLink = document.querySelector('.popup__input_el_link').value;
  const newCard = getElement(
    { name: placeName, link: placeLink });
  elementsList.prepend(newCard);
  closePopup(popupAdd);
}

function handleDeleteCard(evt) {
  const item = evt.target.closest('.element');
  item.remove();
}

// function openPopupPicture() {
//   popupPicture.classList.add('popup_opened');
// }

// function closePopupPicture() {
//   popupPicture.classList.remove('popup_opened');
// }

// editBtn.addEventListener('click', openPopupEdit);
// closeBtnEdit.addEventListener('click', closePopupEdit);
// addBtn.addEventListener('click', openPopupAdd);
// closeBtnAdd.addEventListener('click', closePopupAdd);
formEditElement.addEventListener('submit', formEditSubmitHandler);
formAddElement.addEventListener('submit', handleAddCard);
// imageLink.addEventListener('click', openPopupPicture);

render();
