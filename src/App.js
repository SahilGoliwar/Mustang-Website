import React, { useState } from "react";
import Header from "./features/Components/Header/Header";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Menu from "./features/Components/Menu/Menu";
import HeaderBlock from "./features/Components/HeaderBlock/HeaderBlock";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="App">
        <Switch></Switch>
        <Route></Route>
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        {isMenuOpen && <Menu />}
        <HeaderBlock />
      </div>
    </Router>
  );
}

export default App;
