import {nameInput, jobInput, profileName, profileAbout} from "../../utils/constants.js";

export class UserInfo {
  constructor(profileNameSelector, profileJobSelector) {
    this._profileName = document.querySelector(profileNameSelector).textContent;
    this._profileAbout = document.querySelector(profileJobSelector).textContent;
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

  setUserInfo({name,info}) {
   // принимает новые данные пользователя и добавляет их на страницу
   this._profileName = usertextContent.name;
   this._profileAbout = user.job.textContent;
  }
}
