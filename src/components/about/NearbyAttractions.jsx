import React from "react";
import { useTranslation } from "react-i18next";
import "./NearbyAttractions.css";

const NearbyAttractions = () => {
  const { t } = useTranslation();

  const attractions = [
    {
      name: t("castelul_bran"),
      distance: "1,6 km",
      description: t("castelul_bran_description"),
      imageUrl:
        "https://cdn-jcdpj.nitrocdn.com/pCmDpqyPZUgJhIjizFccVlQqnSLMPxNJ/assets/images/optimized/rev-28ac562/castelulbran.ro/wp-content/uploads/2023/02/castelul-bran-1-1.jpg",
      mapLink: "https://www.google.com/maps?q=Castelul+Bran",
    },
    {
      name: t("parcul_aventura"),
      distance: "8 km",
      description: t("parcul_aventura_description"),
      imageUrl:
        "https://cheilegradistei.ro/image/MTIxNC5qcGcvMTAyNC83MDAvMS8yLzcwLw/trasee-parc-aventura-cheile-gradistei-fundata.jpg",
      mapLink:
        "https://www.google.com/maps?q=Parcul+de+aventură+Cheile+Grădiștei",
    },
    {
      name: t("botorog_campground"),
      distance: "7 km",
      description: t("botorog_campground_description"),
      imageUrl:
        "https://cucortu.ro/assets/images/camping/camping-botorog-320.0-large.png",
      mapLink: "https://www.google.com/maps?q=Botorog+Campground",
    },
    {
      name: t("bucegi"),
      distance: "9 km",
      description: t("bucegi_description"),
      imageUrl:
        "https://www.romania-travel-guide.com/uploads/images/IMG-2/48-Bucegi/700/24818700.jpg",
      mapLink: "https://www.google.com/maps?q=Bucegi",
    },
  ];

  return (
    <div className="nearby-attractions">
      <h2 className="title">{t("nearby_attractions_title")}</h2>
      <div className="wrap">
        {attractions.map((attraction, index) => (
          <div className="box" key={index}>
            <div className="box-top">
              <img
                className="box-image"
                src={attraction.imageUrl}
                alt={attraction.name}
              />
              <div className="title-flex">
                <h3 className="box-title">{attraction.name}</h3>
                <p className="user-follow-info">{attraction.distance}</p>
              </div>
              <p className="description">{attraction.description}</p>
            </div>
            <a
              href={attraction.mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="button"
            >
              {t("navigate")}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NearbyAttractions;
