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
              src="https://www.seekpng.com/png/full/413-4130165_shelby-logo-vector-shelby-mustang-cobra-logo.png"
              alt=""
            />
          </Link>
        </div>
        <div className="account__links">
          <Link to="/account">History</Link>
          <Link to="/account">Specifications</Link>
          <Link to="/account">Customize</Link>
          <Link to="/account">Features</Link>
          <Link to="/account">Book Now</Link>
          <Link to="/account">Account</Link>
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
          <h4>{user?.displayName + "'s Account"}</h4>
        </div>
        <div className="account__infoRight">
          <Link onClick={logoutOfApp}>Sign Out</Link>
        </div>
      </div>
      <div className="account__car">
        <Car
          imgSrc="https://www.ford.com/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2021/collections/equipments/3_2/20_GT500_3Q_Front_Passenger_BLUE_DC_1_32.jpg/jcr:content/renditions/cq5dam.web.1440.1440.jpeg"
          model="GT500"
          testDrive
        />
        <Car
          imgSrc="https://www.shelby.com/Portals/0/EasyGalleryImages/8/1257/20_GT500SE6.jpg"
          model="GT500SE"
          testDrive
        />
        <Car
          imgSrc="https://www.shelby.com/Portals/0/EasyGalleryImages/8/1325/ShelbyGT500_TownSquare_RaceRed.jpg"
          model="GT500KR"
          testDrive
        />
        <Car
          imgSrc="https://www.shelby.com/Portals/0/EasyGalleryImages/8/1255/20_GT350SE1.jpg"
          model="GT350SE"
          testDrive
        />
        <Car
          imgSrc="https://www.shelby.com/Portals/0/EasyGalleryImages/8/1281/SAI26587.jpg"
          model="Shelby Super Snake"
          testDrive
        />
        <Car
          imgSrc="https://www.shelby.com/Portals/0/EasyGalleryImages/8/1283/SAI26212.jpg"
          model="Shelby GT"
          testDrive
        />
        <Car
          imgSrc="https://www.shelby.com/Portals/0/EasyGalleryImages/8/1037/shelbwidebodyt_gallery_18.jpg"
          model="Shelby Wide Body"
          testDrive
        />
      </div>
    </div>
  );
}

export default Account;
