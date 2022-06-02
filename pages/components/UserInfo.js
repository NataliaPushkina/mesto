import { nameInput, jobInput } from "../../utils/constants.js";

export class UserInfo {
  constructor(profileNameSelector, profileJobSelector) {
    this._profileName = document.querySelector(profileNameSelector).textContent;
    this._profileAbout = document.querySelector(profileJobSelector).textContent;
  }

  getUserInfo() {
    this._profileName = nameInput.value;
    this._profileAbout = jobInput.value;
    const user = {
      name: this._profileName,
      info: this._profileAbout
    };
    return user;
  }

  setUserInfo({name, job}) {
   this._profileName = name;
   this._profileAbout = job;
  }
}
