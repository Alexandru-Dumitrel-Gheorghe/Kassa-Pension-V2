import React from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import RoomCard from "./RoomCard";
import { useTranslation } from "react-i18next";
import styles from "./RoomsSection.module.css";

const rooms = [
  {
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229671.jpg?k=c4b9a2d118261052b446b7f84c6af15176aaf51e806fd7c9812641b3af524674&o=&hp=1",
    title: "junior_suite",
    features: "junior_suite_features",
  },
  {
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229650.jpg?k=6a440b9105b3e30114175bd0df4e5a17215a74f4d9f508096db70333f59e3659&o=&hp=1",
    title: "deluxe_room",
    features: "deluxe_room_features",
  },
  {
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229622.jpg?k=ebaf1f0086be7c579375df1678302b0552dc528ede7854cc571b7966a40ad850&o=&hp=1",
    title: "superior_room",
    features: "superior_roomfeatures",
  },
];

const RoomsSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate(); // Initialize useNavigate

  const handleViewAllRooms = () => {
    navigate("/prices"); // Navighează la pagina Prices
  };

  return (
    <section className={styles.roomsSection}>
      <h4
        className={styles.sectionSubtitle}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        {t("experience_luxury")}
      </h4>
      <h2
        className={styles.sectionTitle}
        data-aos="fade-up"
        data-aos-duration="800"
      >
        {t("rooms_suites")}
      </h2>
      <div className={styles.roomsContainer}>
        {rooms.map((room, index) => (
          <RoomCard
            key={index}
            image={room.image}
            title={t(room.title)}
            features={t(room.features)}
          />
        ))}
      </div>

      <button
        className={styles.viewAllRoomsButton}
        data-aos="fade-up"
        data-aos-duration="800"
        onClick={handleViewAllRooms} // Adaugă event handler pentru navigare
      >
        {t("view_all_rooms")}
      </button>
    </section>
  );
};

export default RoomsSection;
