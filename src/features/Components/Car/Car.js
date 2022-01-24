import React from "react";
import ButtonPrimary from "../Button Primary/ButtonPrimary";
import ButtonSecondary from "../ButtonSecondary/ButtonSecondary";
import "./Car.css";

function Car({ imgSrc, model, testDrive }) {
  return (
    <div className="car">
      <div className="car__image">
        <img src={imgSrc} alt="" />
      </div>
      <h2 className="car__model">{model}</h2>
      <div className="car__actions">
        <ButtonPrimary name="Order" />
        {testDrive && <ButtonSecondary name="Test Drive" />}
      </div>
      <div className="car__info">
        <span>Request a Call</span> to speak with a product specialist.
      </div>
    </div>
  );
}

export default Car;
