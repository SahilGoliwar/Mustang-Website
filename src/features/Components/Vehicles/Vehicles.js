import React from "react";
import { Link } from "react-router-dom";
import "./Vehicles.css";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import Car from "../Car/Car";
import { Link as LinkS } from "react-scroll";

function Vehicles({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div className="vehicles">
      <div className="vehicles__header" id="top">
        <div className="vehicles__logo">
          <Link to="/">
            <img
              src="https://allcarbrandslist.com/wp-content/uploads/2021/01/Shelby-Emblem.png"
              alt=""
            />
          </Link>
        </div>
        <div className="vehicles__links">
          <Link className="vehicles__current" to="/vehicles">
            Vehicles
          </Link>

          <Link to="/vehicles">Shop</Link>
          <Link to="/vehicles">History</Link>
          <Link to="/vehicles">About Shelby</Link>
          <Link to="/vehicles">Book Now</Link>
          <Link to="/account">Account</Link>
        </div>
        <div
          className="vehicles__menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <CloseIcon className="vehicles__closeMenu" />
          ) : (
            <MenuIcon />
          )}
        </div>
      </div>
      <div className="vehicles__info">
        <div className="vehicles__head">
          <h4>Vehicles</h4>
        </div>
        <div className="vehicles__infoRight">
          <LinkS to="car1" smooth={true} duration={1000}>
            GT500
          </LinkS>
          <LinkS to="car2" smooth={true} duration={1000}>
            GT500SE
          </LinkS>
          <LinkS to="car3" smooth={true} duration={1000}>
            GT500KR
          </LinkS>
          <LinkS to="car4" smooth={true} duration={1000}>
            GT350SE
          </LinkS>
          <LinkS to="car5" smooth={true} duration={1000}>
            Super Snake
          </LinkS>
          <LinkS to="car6" smooth={true} duration={1000}>
            Shelby GT
          </LinkS>
          <LinkS to="car7" smooth={true} duration={1000}>
            Wide Body
          </LinkS>
        </div>
      </div>
      <div className="vehicles__car">
        <section id="car1">
          <Car
            imgSrc="https://www.ford.com/content/dam/vdm_ford/live/en_us/ford/nameplate/mustang/2021/collections/equipments/3_2/20_GT500_3Q_Front_Passenger_BLUE_DC_1_32.jpg/jcr:content/renditions/cq5dam.web.1440.1440.jpeg"
            model="GT500"
            testDrive
          />
        </section>
        <section id="car2">
          <Car
            imgSrc="https://www.shelby.com/Portals/0/EasyGalleryImages/8/1257/20_GT500SE6.jpg"
            model="GT500SE"
            testDrive
          />
        </section>
        <section id="car3">
          <Car
            imgSrc="https://www.shelby.com/Portals/0/EasyGalleryImages/8/1325/ShelbyGT500_TownSquare_RaceRed.jpg"
            model="GT500KR"
            testDrive
          />
        </section>
        <section id="car4">
          <Car
            imgSrc="https://www.shelby.com/Portals/0/EasyGalleryImages/8/1255/20_GT350SE1.jpg"
            model="GT350SE"
            testDrive
          />
        </section>
        <section id="car5">
          <Car
            imgSrc="https://www.shelby.com/Portals/0/EasyGalleryImages/8/1281/SAI26587.jpg"
            model="Shelby Super Snake"
            testDrive
          />
        </section>
        <section id="car6">
          <Car
            imgSrc="https://www.shelby.com/Portals/0/EasyGalleryImages/8/1283/SAI26212.jpg"
            model="Shelby GT"
            testDrive
          />
        </section>
        <section id="car7">
          <Car
            imgSrc="https://www.shelby.com/Portals/0/EasyGalleryImages/8/1037/shelbwidebodyt_gallery_18.jpg"
            model="Shelby Wide Body"
            testDrive
          />
        </section>
      </div>
      <div className="btn__top">
        <LinkS to="top" smooth={true} duration={1000}>
          <button>
            <KeyboardArrowUpIcon />
          </button>
        </LinkS>
      </div>
    </div>
  );
}

export default Vehicles;
