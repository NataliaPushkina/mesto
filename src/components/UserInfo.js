export class UserInfo {
  constructor(nameSelector, jobSelector, avatarSelector) {
    this._profileName = document.querySelector(nameSelector);
    this._profileJob = document.querySelector(jobSelector);
    this._profileAvatar = document.querySelector(avatarSelector);
  }

  getUserInfo() {
    const user = {
      name: this._profileName.textContent,
      about: this._profileJob.textContent,
    };
    return user;
  }

  setUserInfo(data) {
    this._profileName.textContent = data.name;
    this._profileJob.textContent = data.about;
    this._profileAvatar.src = data.avatar;
  }

  getUserAvatar() {
    user.avatar = this._profileAvatar.src;
  }
}
