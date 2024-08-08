import React from "react";
import "./RoomCard.css";

const RoomCard = ({ image, price, title }) => {
  return (
    <div className="home-room-card">
      <img src={image} alt={title} className="home-room-card-image" />
      <div className="home-room-card-info">
        <p className="home-room-card-price">FROM ${price}/NIGHT</p>
        <h3 className="home-room-card-title">{title}</h3>
      </div>
    </div>
  );
};

export default RoomCard;
