import React from "react";
import "../sass/components/Cards.scss";

const Card = ({ imageSrc, description, buttonText, cardNumber }) => {
  const cardImgClassName = `card__img card__img-${cardNumber}`;
  return (
      
      <div className="card">
        <img src={imageSrc} className={cardImgClassName} alt="Product" />
        <div className="card__description">{description}</div>
        <button className="card__btn">{buttonText}</button>
      </div>
      
  );
};

export default Card;
