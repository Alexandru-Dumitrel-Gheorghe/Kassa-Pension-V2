// src/components/home/RoomsSection.jsx
import React from "react";
import RoomCard from "./RoomCard";
import "./RoomsSection.css";

const rooms = [
  {
    image:
      "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGhvdGVsfGVufDB8fDB8fHww",
    price: 250,
    title: "Junior Suite",
  },
  {
    image:
      "https://images.unsplash.com/photo-1529290130-4ca3753253ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGhvdGVsfGVufDB8fDB8fHww",
    price: 190,
    title: "Deluxe Room",
  },
  {
    image:
      "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhvdGVsfGVufDB8fDB8fHww",
    price: 240,
    title: "Superior Room",
  },
];

const RoomsSection = () => {
  return (
    <div className="rooms-section">
      <h4 className="section-subtitle">Luxury Experience</h4>
      <h2 className="section-title">Rooms & Suites</h2>
      <div className="rooms-container">
        {rooms.map((room, index) => (
          <RoomCard
            key={index}
            image={room.image}
            price={room.price}
            title={room.title}
          />
        ))}
      </div>
      <button className="view-all-rooms-button">View all Rooms</button>
    </div>
  );
};

export default RoomsSection;
