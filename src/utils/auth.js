class Auth {
  constructor() {
    this.isAuthenticated = false;
    this.currUser = "";
  }

  authOk() {
    return this.isAuthenticated;
  }

  login(cb) {
    //TBD get user creds then on success....

    fetch("http://localhost:5001/api/login", {
      method: "POST",
      body: JSON.stringify({
        useremail: "webpropopuli@gmail.com",
        password: "123456"
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        res.json();
        console.log("RESULT!!!!!****", res.json);
      })
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));

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
