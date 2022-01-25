import React from "react";
import { Link } from "react-router-dom";
import "./Account.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../userSlice";
import Car from "../Car/Car";
import { auth } from "../../Firebase/firebase";
import { useHistory } from "react-router-dom";

function Account({ isMenuOpen, setIsMenuOpen }) {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const history = useHistory();

  const logoutOfApp = () => {
    auth
      .signOut()
      .then(() => {
        dispatch(logout());
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="account">
      <div className="account__header">
        <div className="account__logo">
          <Link to="/">
            <img
              src="https://allcarbrandslist.com/wp-content/uploads/2021/01/Shelby-Emblem.png"
              alt=""
            />
          </Link>
        </div>
        <div className="account__links">
          <Link to="/vehicles">Vehicles</Link>
          <Link to="/account">Shop</Link>
          <Link to="/account">History</Link>
          <Link to="/account">About Shelby</Link>
          <Link to="/account">Book Now</Link>
          <Link className="account__current" to="/account">
            Account
          </Link>
        </div>
        <div
          className="account__menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <CloseIcon className="account__closeMenu" />
          ) : (
            <MenuIcon />
          )}
        </div>
      </div>
      <div className="account__info">
        <div className="account__person">
          <h4>{user?.displayName + "'Account"}</h4>
        </div>
        <div className="account__infoRight">
          <Link onClick={logoutOfApp}>Sign Out</Link>
        </div>
      </div>
      <div className="Accountform">
        <div className="Accountuser">
          <label>User Name: </label> <h1>{user?.displayName} </h1>
          <label>User ID: </label> <h1>{user?.uid} </h1>
          <label>Email ID: </label> <h1>{user?.email} </h1>
          <div className="Accountactions">
            <Link to="/login">
              <button className="Accountlogin">Reset Password</button>
            </Link>
            <Link onClick={logoutOfApp}>
              <button className="Accountlogout">Logout</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Account;
