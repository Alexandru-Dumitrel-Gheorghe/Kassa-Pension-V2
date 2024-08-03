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
        "https://plus.unsplash.com/premium_photo-1678297269980-16f4be3a15a6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        "https://plus.unsplash.com/premium_photo-1661964071015-d97428970584?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        "https://images.unsplash.com/photo-1455587734955-081b22074882?q=80&w=1920&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        "https://images.unsplash.com/photo-1495365200479-c4ed1d35e1aa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
        "https://images.unsplash.com/photo-1444201983204-c43cbd584d93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
      <h1 className="text-center my-4">{t("our_rooms")}</h1>
      <Row>
        {rooms.map((room, index) => (
          <Col key={index} md={12} className="mb-4">
            <Card
              className={`room-card flex-row ${
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
