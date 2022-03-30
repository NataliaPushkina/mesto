const editBtn = document.querySelector('.button_edit');
const popup = document.querySelector('.popup');
const closePopupBtn = document.querySelector('.button_close');

function togglePopUp() {
  popup.classList.toggle('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileAbout.textContent;
}

editBtn.addEventListener('click', togglePopUp);

closePopupBtn.addEventListener('click', togglePopUp);

const formElement = document.querySelector('.form');
const profileName = document.querySelector('.profile__title');
const profileAbout = document.querySelector('.profile__subtitle');
const nameInput = document.querySelector('.form__item_name');
const jobInput = document.querySelector('.form__item_job');


function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileAbout.textContent = jobInput.value;
  togglePopUp();
}

formElement.addEventListener('submit', formSubmitHandler);
