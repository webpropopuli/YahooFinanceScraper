const Auth = {
  currUser: "",
  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true;
    this.currUser = "David";
    setTimeout(cb, 100); //bogus
  },
  signout(cb) {
    this.isAuthenticated = false;
    this.currUser = "";
    setTimeout(cb, 1000); //bogus
  }
};

export default Auth;
