import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./AccommodationInfo.css";

const AccommodationInfo = () => {
  const [showPrices, setShowPrices] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const navigate = useNavigate(); // Initializează useNavigate

  const rooms = [
    {
      title: "Casă completă",
      beds: "7 paturi duble extra-large, 1 pat de o persoană, 1 canapea extensibilă",
      description:
        "Pensiunea Kassa oferă cazare confortabilă într-o casă complet echipată, ideală pentru familii sau grupuri mari. Toate camerele sunt decorate cu bun gust și oferă facilități moderne pentru un sejur de neuitat.",
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/554932830.jpg?k=11a5832a0ce276957dfb3352cd0c853d6fa87551b27d4d1cf7e3529c6697239e&o=&hp=1",
      features: [
        { icon: "🛏️", text: "7 paturi duble extra-large, 1 pat de o persoană" },
        { icon: "🛋️", text: "1 canapea extensibilă" },
        { icon: "🚿", text: "Baie privată" },
        { icon: "📶", text: "Wi-Fi gratuit" },
        { icon: "🚗", text: "Parcare gratuită" },
        { icon: "🖥️", text: "Televizor cu ecran plat" },
      ],
    },
  ];

  const handleShowPrices = () => {
    setShowPrices(!showPrices);
  };

  const handleSelectRoom = (index) => {
    setSelectedRoom(index);
  };

  const handleReserveNow = () => {
    navigate("/contact"); // Navighează către pagina de contact
  };

  return (
    <div className="accommodation-info">
      <h2>Informații despre cazare</h2>
      <p className="announcement">
        Casa se închiriază complet, oferind intimitate și confort maxim.
      </p>
      {rooms.map((room, index) => (
        <div
          key={index}
          className={`room-info ${selectedRoom === index ? "selected" : ""}`}
          onClick={() => handleSelectRoom(index)}
        >
          <div className="room-details">
            <img src={room.image} alt={room.title} className="room-image" />
            <div className="room-content">
              <h3>{room.title}</h3>
              <p>{room.beds}</p>
              <p>{room.description}</p>
              <ul className="room-features">
                {room.features.map((feature, i) => (
                  <li key={i}>
                    <span>{feature.icon}</span> {feature.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <button className="show-prices-button" onClick={handleShowPrices}>
            {showPrices ? "Ascunde prețuri" : "Arată prețuri"}
          </button>
          {showPrices && (
            <div className="price-details">
              <p>Prețurile pentru întreaga casă încep de la 1000 RON/noapte.</p>
              <p>Prețurile pot varia în funcție de sezon și disponibilitate.</p>
            </div>
          )}
        </div>
      ))}
      <button className="book-now-button" onClick={handleReserveNow}>
        Rezervă acum
      </button>
    </div>
  );
};

export default AccommodationInfo;
