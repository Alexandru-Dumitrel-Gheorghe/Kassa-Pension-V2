import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import AOS from "aos";
import "aos/dist/aos.css"; // Importă stilurile AOS
import "./FacilitiesSection.css";

const FacilitiesSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1000 }); // Inițializează AOS
  }, []);

  return (
    <section className="fs-facilities-section">
      <div className="fs-container">
        <h2 className="fs-title" data-aos="fade-up">
          {t("facilities_offered_by_kassa")}
        </h2>
        <p className="fs-score" data-aos="fade-up">
          {t("excellent_facilities")}
        </p>
        <button
          className="fs-availability-button"
          onClick={() => navigate("/contact")}
          data-aos="fade-up"
        >
          {t("check_available_dates")}
        </button>

        <div className="fs-facilities-grid">
          {[
            {
              title: "most_appreciated_facilities",
              items: [
                "free_parking_included",
                "free_wifi",
                "family_rooms_included",
                "barbecue_grill",
                "baby_cots",
              ],
            },
            { title: "Parking", items: ["private_parking_available"] },
            { title: "Internet", items: ["wifi_available"] },
            {
              title: "kitchen",
              items: [
                "kitchen_table",
                "coffee_machine",
                "cleaning_products",
                "stove",
                "oven",
                "drying_rack",
                "kitchen_utensils",
                "electric_kettle",
                "kitchen",
                "kitchen_dishwasher",
                "microwave",
                "refrigerator",
              ],
            },
            { title: "Bedroom", items: ["bed_linen", "wardrobe"] },
            {
              title: "Bathroom",
              items: [
                "toilet_paper",
                "towels",
                "extra_toilet",
                "bath_or_shower",
                "slippers",
                "private_bathroom",
                "toilet",
                "free_toiletries",
                "shower",
              ],
            },
            {
              title: "living_area",
              items: [
                "dining_area",
                "sofa",
                "fireplace",
                "seating_area",
                "desk",
              ],
            },
            {
              title: "media_technology",
              items: ["flat_screen_tv", "cable_channels", "tv"],
            },
            {
              title: "room_facilities",
              items: [
                "sofa_bed",
                "clothes_rack",
                "hardwood_or_parquet_floors",
                "tile_marble_floor",
                "private_entrance",
                "carpet",
                "fan",
              ],
            },
            {
              title: "Accessibility",
              items: ["upper_floors_accessible_by_stairs_only"],
            },
            {
              title: "Outside",
              items: [
                "outdoor_fireplace",
                "picnic_area",
                "outdoor_furniture",
                "outdoor_dining_area",
                "sun_terrace",
                "barbecue",
                "patio",
                "balcony",
                "terrace",
                "garden",
              ],
            },
            {
              title: "common_areas",
              items: ["shared_lounge_tv_area", "game_room"],
            },
            {
              title: "Wellness",
              items: [
                "hair_styling",
                "pedicure",
                "manicure",
                "hair_treatments",
                "makeup_services",
                "waxing_services",
                "facial_treatments",
                "beauty_services",
                "beach_umbrellas",
              ],
            },
            {
              title: "food_drink",
              items: ["grocery_deliveries", "tea_coffee_maker"],
            },
            {
              title: "activities",
              items: [
                "local_culture_tour_class",
                "bike_tours",
                "walking_tours",
                "badminton_equipment",
                "ski_school",
                "ski_storage",
                "hiking",
                "skiing",
              ],
            },
            {
              title: "view",
              items: ["courtyard_view", "river_view", "garden_view", "view"],
            },
            { title: "building_characteristics", items: ["detached"] },
            {
              title: "reception_services",
              items: ["invoice_provided", "private_check_in_check_out"],
            },
            {
              title: "entertainment_family_services",
              items: [
                "outdoor_play_equipment_for_kids",
                "indoor_play_area",
                "board_games_puzzles",
              ],
            },
            {
              title: "cleaning_services",
              items: ["daily_housekeeping", "dry_cleaning", "laundry"],
            },
            {
              title: "business_facilities",
              items: ["meeting_banquet_facilities"],
            },
            {
              title: "Others",
              items: [
                "designated_smoking_area",
                "no_smoking_in_all_areas",
                "heating",
                "family_rooms",
              ],
            },
            {
              title: "safety_security",
              items: [
                "fire_extinguishers",
                "cctv_outside_property",
                "smoke_alarms",
                "security_alarm",
                "key_card_access",
                "key_access",
                "carbon_monoxide_detector",
                "safe",
              ],
            },
            {
              title: "languages_spoken",
              items: ["german", "english", "romanian"],
            },
          ].map((category, index) => (
            <div
              className="fs-facility-category"
              key={index}
              data-aos="fade-up"
            >
              <h3>{t(category.title)}</h3>
              {category.items.length === 1 ? (
                <p>{t(category.items[0])}</p>
              ) : (
                <ul>
                  {category.items.map((item, idx) => (
                    <li key={idx}>{t(item)}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="fs-important-info">
          <h3 data-aos="fade-up">{t("important_info")}</h3>
          <p data-aos="fade-up">
            {t("special_requests_info")} {t("check_available_dates")}
          </p>
          <div className="fs-check-info" data-aos="fade-up">
            <h4>{t("check_in")}</h4>
            <p>{t("from_3pm_to_midnight")}</p>
            <p>{t("please_inform_property")}</p>
          </div>
          <div className="fs-check-info" data-aos="fade-up">
            <h4>{t("check_out")}</h4>
            <p>{t("from_7am_to_11am")}</p>
          </div>
          <div className="fs-policy-info" data-aos="fade-up">
            <h4>{t("cancellation_prepayment")}</h4>
            <p>{t("cancellation_policy")}</p>
          </div>
          <div className="fs-policy-info" data-aos="fade-up">
            <h4>{t("children_beds")}</h4>
            <p>{t("children_policy")}</p>
            <h4>{t("cribs_extra_beds")}</h4>
            <ul>
              <li>
                {t("cribs_available_on_request")} - {t("free")}
              </li>
              <li>{t("extra_beds_policy")}</li>
              <li>{t("no_extra_beds_available")}</li>
              <li>{t("cribs_availability")}</li>
            </ul>
          </div>
          <div className="fs-policy-info" data-aos="fade-up">
            <h4>{t("additional_information")}</h4>
            <p>{t("no_age_restriction")}</p>
            <p>{t("smoking_policy")}</p>
            <p>{t("pets_policy")}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;
