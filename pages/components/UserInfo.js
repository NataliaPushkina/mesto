import {nameInput, jobInput, profileName, profileAbout} from "../../utils/constants.js";

export class UserInfo {
  constructor({profileNameSelector, profileAboutSelector}) {
    this._profileName = document.querySelector('.profile__title').textContent;
    this._profileAbout = document.querySelector('.profile__subtitle').textContent;
    // this._nameInput = nameInput;
    // this._jobInput = jobInput;
  }

  getUserInfo() {
// возвращает объект с данными пользователя. Этот метод пригодится
// когда данные пользователя нужно будет подставить в форму при открытии
    this._profileName = nameInput.value;
    this._profileAbout = jobInput.value;
    const user = {
      name: this._profileName,
      info: this._profileAbout
    };
    console.log(user);
    return user;
  }

  setUserInfo() {
   // принимает новые данные пользователя и добавляет их на страницу
   this._profileName = user.name.textContent;
   this._profileAbout = user.job.textContent;
  }
}
