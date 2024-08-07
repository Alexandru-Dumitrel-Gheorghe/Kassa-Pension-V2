import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faWifi,
  faParking,
  faCouch,
  faTv,
} from "@fortawesome/free-solid-svg-icons";
import { useTranslation } from "react-i18next";
import "./PriceRooms.css";

const PriceRooms = () => {
  const { t } = useTranslation();

  const rooms = [
    {
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/554932830.jpg?k=11a5832a0ce276957dfb3352cd0c853d6fa87551b27d4d1cf7e3529c6697239e&o=&hp=1",
      title: "classic_room",
      beds: "classic_room_beds",
      description: "classic_room_description",
      features: [
        { icon: faBed, text: "classic_room_beds" },
        { icon: faBath, text: "private_bathroom" },
        { icon: faWifi, text: "free_wifi" },
        { icon: faParking, text: "free_parking" },
      ],
    },
    {
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229650.jpg?k=6a440b9105b3e30114175bd0df4e5a17215a74f4d9f508096db70333f59e3659&o=&hp=1",
      title: "superior_room",
      beds: "superior_room_beds",
      description: "superior_room_description",
      features: [
        { icon: faBed, text: "superior_room_beds" },
        { icon: faBath, text: "private_bathroom" },
        { icon: faWifi, text: "free_wifi" },
        { icon: faParking, text: "free_parking" },
        { icon: faCouch, text: "relaxation_area_with_sofa" },
      ],
    },
    {
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229632.jpg?k=22c4c786d1734fff5a9fab4bb5ddd2be6c1a24f8770def966718a696a3236922&o=&hp=1",
      title: "luxury_room",
      beds: "luxury_room_beds",
      description: "luxury_room_description",
      features: [
        { icon: faBed, text: "luxury_room_beds" },
        { icon: faBath, text: "private_bathroom_with_jacuzzi" },
        { icon: faWifi, text: "free_wifi" },
        { icon: faParking, text: "free_parking" },
      ],
    },
    {
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229671.jpg?k=c4b9a2d118261052b446b7f84c6af15176aaf51e806fd7c9812641b3af524674&o=&hp=1",
      title: "suite_room",
      beds: "suite_room_beds",
      description: "suite_room_description",
      features: [
        { icon: faBed, text: "suite_room_beds" },
        { icon: faBath, text: "private_bathroom" },
        { icon: faWifi, text: "free_wifi" },
        { icon: faParking, text: "free_parking" },
        { icon: faCouch, text: "relaxation_area" },
      ],
    },
    {
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229686.jpg?k=f93921cfe50dae6261ba9bada3e5be108f20154635230fea4d659e7d7a0b5f28&o=&hp=1",
      title: "family_room",
      beds: "family_room_beds",
      description: "family_room_description",
      features: [
        { icon: faBed, text: "family_room_beds" },
        { icon: faBath, text: "private_bathroom" },
        { icon: faWifi, text: "free_wifi" },
        { icon: faParking, text: "free_parking" },
      ],
    },
    {
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/554934498.jpg?k=df84e76d9bb2f71937a71b14bd270dd76e0e28434b66346e43f53f56f9c1b646&o=&hp=1",
      title: "deluxe_room",
      beds: "deluxe_room_beds",
      description: "deluxe_room_description",
      features: [
        { icon: faBed, text: "deluxe_room_beds" },
        { icon: faBath, text: "private_bathroom" },
        { icon: faWifi, text: "free_wifi" },
        { icon: faParking, text: "free_parking" },
        { icon: faTv, text: "flat_screen_tv_with_cable" },
      ],
    },
    {
      image:
        "https://cf.bstatic.com/xdata/images/hotel/max1024x768/553229689.jpg?k=69129c1eea15d671299400bbda2da723180ff3990cb6a47c21fb44f8db980d4a&o=&hp=1",
      title: "living_area",
      beds: "living_area_beds",
      description: "living_area_description",
      features: [
        { icon: faCouch, text: "living_area_beds" },
        { icon: faTv, text: "flat_screen_tv_with_cable" },
        { icon: faWifi, text: "free_wifi" },
      ],
    },
  ];

  return (
    <Container className="price-rooms">
      <Row>
        {rooms.map((room, index) => (
          <Col key={index} md={6} lg={4} className="mb-4">
            <Card
              className={`room-card ${
                index % 2 === 0 ? "" : "flex-row-reverse"
              }`}
            >
              <Card.Img className="card-img" src={room.image} />
              <Card.Body className="d-flex flex-column justify-content-center text-center">
                <Card.Title>{t(room.title)}</Card.Title>
                <Card.Text>
                  <FontAwesomeIcon icon={faBed} /> {t(room.beds)}
                </Card.Text>
                <Card.Text>{t(room.description)}</Card.Text>
                <ul className="room-features">
                  {room.features.map((feature, i) => (
                    <li key={i}>
                      <FontAwesomeIcon icon={feature.icon} /> {t(feature.text)}
                    </li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PriceRooms;
