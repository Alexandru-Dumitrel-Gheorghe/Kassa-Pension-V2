import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./AccommodationInfo.css";

const AccommodationInfo = () => {
  const { t } = useTranslation();
  const [showPrices, setShowPrices] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const navigate = useNavigate();

  const rooms = [
    {
      title: t("whole_house"),
      beds: t("whole_house_beds"),
      description: t("whole_house_description"),
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/554932830.jpg?k=11a5832a0ce276957dfb3352cd0c853d6fa87551b27d4d1cf7e3529c6697239e&o=&hp=1",
      features: [
        { icon: "🛏️", text: t("whole_house_beds") },
        { icon: "🛋️", text: t("whole_house_sofa") },
        { icon: "🚿", text: t("private_bathroom") },
        { icon: "📶", text: t("free_wifi") },
        { icon: "🚗", text: t("free_parking") },
        { icon: "🖥️", text: t("flat_screen_tv") },
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
    navigate("/contact");
  };

  return (
    <div className="accommodation-info">
      <h2>{t("accommodation_info")}</h2>
      <p className="announcement">{t("house_rental_announcement")}</p>
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
            {showPrices ? t("hide_prices") : t("show_prices")}
          </button>
          {showPrices && (
            <div className="price-details">
              <p>{t("price_starting_from", { price: "1000 RON" })}</p>
              <p>{t("price_variation_notice")}</p>
            </div>
          )}
        </div>
      ))}
      <button className="book-now-button" onClick={handleReserveNow}>
        {t("book_now")}
      </button>
    </div>
  );
};

export default AccommodationInfo;
