import React, { useEffect, useState } from "react";
import Header from "./features/Components/Header/Header";
import "./App.css";
import Login from "./features/Components/Login/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Menu from "./features/Components/Menu/Menu";
import HeaderBlock from "./features/Components/HeaderBlock/HeaderBlock";
import { login, logout, selectUser } from "./features/userSlice";
import { useDispatch, useSelector } from "react-redux";
import Signup from "./features/Components/Signup/Signup";
import Account from "./features/Components/Account/Account";
import { auth } from "./features/Firebase/firebase";
import Vehicles from "./features/Components/Vehicles/Vehicles";

function App() {
  const user = useSelector(selectUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        //User is signed in
        dispatch(
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
          })
        );
      } else {
        // User is signed out
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {isMenuOpen && <Menu />}
            <HeaderBlock />
          </Route>
          <Route exact path="/login">
            {user ? <Redirect to="/account" /> : <Login />}
          </Route>
          <Route exact path="/signup">
            <Signup />
          </Route>
          <Route exact path="/account">
            {!user ? (
              <Redirect to="/login" />
            ) : (
              <>
                <Account
                  isMenuOpen={isMenuOpen}
                  setIsMenuOpen={setIsMenuOpen}
                />
                {isMenuOpen && <Menu />}
              </>
            )}
          </Route>
          <Route exact path="/vehicles">
            <Vehicles isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            {isMenuOpen && <Menu />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
