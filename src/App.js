import React, { Component, Fragment, useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import SetupProfile from "./components/pages/SetupProfile";
import SignInPage from "./components/pages/SignIn";
import ForgotPW from "./components/pages/ForgotPW";
import Home from "./components/pages/Home/Home";
import Register from "./components/pages/Register";
import EditProfilePage from "./components/pages/EditProfilePage";
import Switch from "react-bootstrap/esm/Switch";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <Router>
        <div>
          <Header />
          <Switch className='switchLayout'>
            <Route exact path='/' component={Home} />
            <Route path='/signInPage' component={SignInPage} />
            <Route path='/register' component={Register} />
            <Route path='/forgotPW' component={ForgotPW} />
            <Route path='/setupProfile' component={SetupProfile} />
            <Route path='/editProfilePage' component={EditProfilePage} />
          </Switch>
          <Footer />
        </div>
      </Router>

      <script
        src='https://unpkg.com/react/umd/react.production.min.js'
        crossorigin
      ></script>

      <script
        src='https://unpkg.com/react-dom/umd/react-dom.production.min.js'
        crossorigin
      ></script>

      <script
        src='https://unpkg.com/react-bootstrap@next/dist/react-bootstrap.min.js'
        crossorigin
      ></script>
    </Fragment>
  );
};

export default App;

// // manual user
// const adminUser = {
//   name: "Admin",
//   email: "admin@admin.com",
//   password: "admin123"
// }

// const [user, setUser] = useState({name: "", email: ""});
// const [error, setError] = useState("");

// const SignIn = details => {
//   // console.log(details);

//   if (details.email === adminUser.email && details.password === adminUser.password){
//     // console.log("Logged in");
//     setUser({
//       name: details.name,
//       email: details.email
//     });
//   } else {
//     // console.log("Details do not match!");
//     setError("Details do not match!");
//   }

// }

// const Logout = () => {
//   setUser({ name: "", email: "" });
// }

//<SignInPage SignIn={SignIn} error={error} />

// {(user.email !== "") ? (
//   // <div className="welcome">
//   //   <h2>Welcome, <span>{user.name}</span></h2>
//   //   <button onClick={Logout}>Logout</button>
//   // </div>

//          //successful sign in

//    ) : (

// )}
