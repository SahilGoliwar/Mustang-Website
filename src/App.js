import React, { useState } from "react";
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
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";
import Signup from "./features/Components/Signup/Signup";

function App() {
  const user = useSelector(selectUser);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
