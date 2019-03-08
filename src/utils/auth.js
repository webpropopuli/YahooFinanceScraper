class Auth {
  constructor() {
    this.isAuthenticated = false;
    this.currUser = "";
  }

  authOk() {
    return this.isAuthenticated;
  }

  login(cb) {
    //TBD get user creds
    this.isAuthenticated = true;
    this.currUser = "David";

    cb(this.authOk());
  }

  logout(cb) {
    this.isAuthenticated = false;
    this.currUser = "";

    cb(this.authOk());
  }
}

export default new Auth();
