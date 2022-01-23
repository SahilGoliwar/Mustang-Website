import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import "./Signup.css";
import { Link } from "react-router-dom";
import LanguageOutlinedIcon from "@material-ui/icons/LanguageOutlined";
import ButtonPrimary from "../Button Primary/ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import { auth } from "../../Firebase/firebase";
import { login } from "../../userSlice";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const signUp = (e) => {
    e.preventDefault();

    if (!fName) {
      return alert("Please enter a first name");
    }
    if (!lName) {
      return alert("Please enter a last name");
    }

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: fName,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: fName,
              })
            );
            history.push("/account");
          });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="signup">
      <div className="signup__header">
        <div className="signup__logo">
          <Link to="/">
            <img
              src="https://www.seekpng.com/png/full/413-4130165_shelby-logo-vector-shelby-mustang-cobra-logo.png"
              alt=""
            />
          </Link>
        </div>
        <div className="signup__language">
          <LanguageOutlinedIcon /> <span>EN-US</span>
        </div>
      </div>
      <div className="signup__info">
        <h1>Sign Up</h1>
        <form className="signup__form">
          <label htmlFor="fName">First Name</label>
          <input
            type="text"
            id="fName"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
          />
          <label htmlFor="lName">Last Name</label>
          <input
            type="text"
            id="lName"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
          />
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
          <ButtonPrimary name="Create Account" type="submit" onClick={signUp} />
        </form>
        <div className="signup__divider">
          <hr /> <span>OR</span> <hr />
        </div>
        <Link to="/login">
          <ButtonSecondary name="Sign In" />
        </Link>
      </div>
    </div>
  );
}

export default Signup;
