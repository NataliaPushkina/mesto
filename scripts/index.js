const editBtn = document.querySelector('.button_type_edit');
const popup = document.querySelector('.popup');
const closePopupBtn = document.querySelector('.button_type_close');
const addBtn = document.querySelector('.button_type_add');
const formElement = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__input_el_name');
const jobInput = document.querySelector('.popup__input_el_job');
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

const templateElement = document.querySelector('.template-element');
const elementsList =  document.querySelector('.elements__list');

function togglePopUp() {
  popup.classList.toggle('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
}

editBtn.addEventListener('click', togglePopUp);

closePopupBtn.addEventListener('click', togglePopUp);

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
  togglePopUp();
}

formElement.addEventListener('submit', formSubmitHandler);

initialCards.forEach(function (item) {
  const getElementTemplate = templateElement.content.cloneNode(true);

  getElementTemplate.querySelector('.element__title').textContent = item.name;
  getElementTemplate.querySelector('.element__photo').src = item.link;
  getElementTemplate.querySelector('.element__photo').alt = item.name;

  elementsList.append(getElementTemplate);
});

// addBtn.addEventListener('click', );
