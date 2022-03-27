// let openPopUp = document.querySelector('.edit-button');
// let closePopUp = document.querySelector('.popup-close');
// let popUp = document.querySelector('.popup');

// openPopUp.addEventListener('click', () => {
//   popUp.classList.add('popup_opened');
// })

// popUp.addEventListener('click', () => {
//   popUp.classList.remove('popup_opened');
// })

const editBtn = document.querySelector('.edit-button');
const popup = document.querySelector('.popup');
const closePopupBtn = document.querySelector('.popup__close');

function togglePopUp() {
  popup.classList.toggle('popup_opened');
}

editBtn.addEventListener('click', togglePopUp);

closePopupBtn.addEventListener('click', togglePopUp);

const formElement = document.querySelector('.popup__form');
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.popup__form-name');
const jobInput = document.querySelector('.popup__form-about');


nameInput.value = profileName.textContent;
jobInput.value = profileAbout.textContent;

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName = nameInput.value;
  profileAbout = jobInput.value;
}
formElement.addEventListener('submit', formSubmitHandler);

