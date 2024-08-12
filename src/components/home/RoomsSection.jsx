import React from "react";
import RoomCard from "./RoomCard";
import styles from "./RoomsSection.module.css";

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
    <div className={styles.roomsSection}>
      <h4
        className={styles.sectionSubtitle}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        Experiență de Lux
      </h4>
      <h2
        className={styles.sectionTitle}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        Camere & Suită
      </h2>
      <div className={styles.roomsContainer}>
        {rooms.map((room, index) => (
          <RoomCard
            key={index}
            image={room.image}
            price={room.price}
            title={room.title}
          />
        ))}
      </div>
      <button
        className={styles.viewAllRoomsButton}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        Vezi toate Camerele
      </button>
    </div>
  );
};

export default RoomsSection;
