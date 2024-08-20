import React from "react";
import styles from "./RoomCard.module.css";

const RoomCard = ({ image, title, features }) => {
  return (
    <div className={styles.roomCard} data-aos="fade-up" data-aos-duration="800">
      <img src={image} alt={title} className={styles.roomCardImage} />
      <div className={styles.roomCardInfo}>
        <h3 className={styles.roomCardTitle}>{title}</h3>
        <p className={styles.roomCardFeatures}>{features}</p>
      </div>
    </div>
  );
};

export default RoomCard;
