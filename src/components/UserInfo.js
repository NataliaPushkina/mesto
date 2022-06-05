export class UserInfo {
  constructor(nameSelector, jobSelector) {
    this._profileName = document.querySelector(nameSelector);
    this._profileJob = document.querySelector(jobSelector);
  }

  getUserInfo() {
    const user = {
      name: this._profileName.textContent,
      job: this._profileJob.textContent,
    };
    return user;
  }

  setUserInfo (data) {
    this._profileName.textContent = data.name;
    this._profileJob.textContent = data.job;
    console.log("set", data);
  };
}
