// src/components/home/RoomCard.jsx
import React from "react";
import "./RoomCard.css";

const RoomCard = ({ image, price, title }) => {
  return (
    <div className="room-card">
      <img src={image} alt={title} className="room-card-image" />
      <div className="room-card-info">
        <p className="room-card-price">FROM ${price}/NIGHT</p>
        <h3 className="room-card-title">{title}</h3>
      </div>
    </div>
  );
};

export default RoomCard;
