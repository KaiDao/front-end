import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import SiteNav from "./Components/SiteNav";
import UserHome from "./Components/UserHome";
import LoginPage from "./Components/LoginPage";
import CreateAccount from "./Components/CreateAccount";
import axios from "axios";

import setAuthToken from "./Utils/setAuthToken";

//this needs to be moved to a config file, or at least move all x site requests to one place.
axios.defaults.baseURL = 'http://localhost:5000';
axios.defaults.headers.post['Content-Type'] ='application/x-www-form-urlencoded';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.post['Access-Control-Allow-Headers'] = '*';


//toplevel component for rendering The App
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loggedIn: false, // default login status is false.
    };
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  //logs the user out.
  // -remove token from local storage,
  // -remove user state.
  // -set auth token to false.
  handleLogOut() {
    localStorage.removeItem("jwtToken");
    setAuthToken(false);
    this.setState({
      loggedIn : false,
    })
  }

  // logs the user in
  // -stores token in local storage,token holds user data, will need to be decoded with jwt_decode. 
  // -sets axios authtoken
  handleLogin(data) {
    axios
      .post("/api/users/login", data)
      .then(function (res) {
        const { token } = res.data;
        localStorage.setItem("jwtToken", token);
        setAuthToken(token);
      })
      .catch(function (err) {
        console.log(err);
      });
    //set the loggin status.
    if (localStorage["jwtToken"] != null) {
      this.setState({
        loggedIn: true,
      });
    }
  }

  //Holds the top level of application nav bar and router.
  render() {
    return (
      <div className="App" id="App">
        <SiteNav
          loggedIn={this.state.loggedIn}
          handleLogOut={this.handleLogOut}
        />
        <Router>
          <div className="container col-md-4 padded-top">
            {!this.state.loggedIn ? (//dep[ending if the user loggs in display login page or user home.]
              <Route
                path="/"
                exact
                component={() => <LoginPage handleLoggin={this.handleLogin} />}
              />
            ) : (
              <Route path="/" exact component={UserHome} />
            )}
            <Route path="/CreateAccount" exact component={CreateAccount} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
