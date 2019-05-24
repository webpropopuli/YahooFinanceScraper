class Auth {
  constructor(props) {
    this.state = {
      data: "",
      showData: false,
      isAuthenticated: false,
      currUser: ""
    };
  }

  authOk() {
    return this.state.isAuthenticated;
  }

  //# LOGIN
  login = cb => {
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
      .then(res => res.json())
      .then(data => {
        console.log("DATA", data.userName);
        this.state = {
          isAuthenticated: data.userValid,
          currUser: data.userName
        };
        cb(data);
      })

      .catch(err => console.log(err));
  };

  //# LOGOUT
  logout(cb) {
    this.state = {
      isAuthenticated: false,
      currUser: ""
    };

    cb(this.authOk());
  }

  //# REGISTER( user {email, pwd, name} )
  register(userInfo) {
    //TBD get user creds then on success....
    const { email, password, name } = userInfo;
    fetch("http://localhost:5001/api/register", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
        name
      }),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        // tbd check valid state. Could get error for existing user...
        if (data.userAdded) console.log("CLI: user registered");
        else console.log("CLI: failed ser registration");
      })

      .catch(err => console.log(err));
  }
}

export default new Auth();
