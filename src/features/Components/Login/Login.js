import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import ButtonPrimary from "../Button Primary/ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import { auth } from "../../Firebase/firebase";
import { login } from "../../userSlice";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((userAuth) => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: userAuth.user.displayName,
          })
        );
        history.push("/vehicles");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__header">
        <div className="login__logo">
          <Link to="/">
            <img
              src="https://allcarbrandslist.com/wp-content/uploads/2021/01/Shelby-Emblem.png"
              alt=""
            />
          </Link>
        </div>
        <div className="login__language">
          <LanguageOutlinedIcon /> <span>EN-US</span>
        </div>
      </div>
      <div className="login__info">
        <h1>Sign In</h1>
        <form className="login__form">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonPrimary name="Sign In" type="submit" onClick={signIn} />
        </form>
        <div className="login__divider">
          <hr /> <span>OR</span> <hr />
        </div>
        <Link to="/signup">
          <ButtonSecondary name="Create Account" />
        </Link>
      </div>
    </div>
  );
}

export default Login;
