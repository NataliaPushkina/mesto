import { nameInput, jobInput } from "../utils/constants.js";

export class UserInfo {
  constructor(profileNameSelector, profileJobSelector) {
    this._profileName = document.querySelector(profileNameSelector);
    this._profileAbout = document.querySelector(profileJobSelector);
  }

  getUserInfo() {
    this._profileName.textContent = nameInput.value;
    this._profileAbout.textContent = jobInput.value;
    const user = {
      name: this._profileName.textContent,
      job: this._profileAbout.textContent
    };
    console.log(user);
    return user;
  }

  setUserInfo(name, job) {
   this._profileName.textContent = name.textContent;
   this._profileAbout.textContent = job.textContent;
   console.log(job.textContent, "вот");
  }
}
