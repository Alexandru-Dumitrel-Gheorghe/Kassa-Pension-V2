import React from "react";
import "./RoomCard.css";

const RoomCard = ({ image, price, title }) => {
  return (
    <div className="home-room-card" data-aos="fade-up" data-aos-duration="800">
      <img src={image} alt={title} className="home-room-card-image" />
      <div className="home-room-card-info">
        <p className="home-room-card-price">De la ${price}/noapte</p>
        <h3 className="home-room-card-title">{title}</h3>
      </div>
    </div>
  );
};

export default RoomCard;
