import React from "react";
import RoomCard from "./RoomCard";
import "./RoomsSection.css";

const rooms = [
  {
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229671.jpg?k=c4b9a2d118261052b446b7f84c6af15176aaf51e806fd7c9812641b3af524674&o=&hp=1",
    price: 250,
    title: "Junior Suite",
  },
  {
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229650.jpg?k=6a440b9105b3e30114175bd0df4e5a17215a74f4d9f508096db70333f59e3659&o=&hp=1",
    price: 190,
    title: "Deluxe Room",
  },
  {
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229622.jpg?k=ebaf1f0086be7c579375df1678302b0552dc528ede7854cc571b7966a40ad850&o=&hp=1",
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
