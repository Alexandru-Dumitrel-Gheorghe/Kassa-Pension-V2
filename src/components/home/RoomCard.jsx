import React from "react";
import styles from "./RoomCard.module.css"; // Importă stilurile CSS Modules

const RoomCard = ({ image, price, title }) => {
  return (
    <div
      className={styles.homeRoomCard}
      data-aos="fade-up"
      data-aos-duration="800"
    >
      <img src={image} alt={title} className={styles.homeRoomCardImage} />
      <div className={styles.homeRoomCardInfo}>
        <p className={styles.homeRoomCardPrice}>De la ${price}/noapte</p>
        <h3 className={styles.homeRoomCardTitle}>{title}</h3>
      </div>
    </div>
  );
};

export default RoomCard;
