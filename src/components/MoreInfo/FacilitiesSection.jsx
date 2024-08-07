import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./FacilitiesSection.css";

const FacilitiesSection = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  return (
    <section className="fs-facilities-section">
      <div className="fs-container">
        <h2 className="fs-title">{t("facilities_offered_by_kassa")}</h2>
        <p className="fs-score">{t("excellent_facilities")}</p>
        <button
          className="fs-availability-button"
          onClick={() => navigate("/contact")}
        >
          {t("check_available_dates")}
        </button>

        <div className="fs-facilities-grid">
          <div className="fs-facility-category">
            <h3>{t("most_appreciated_facilities")}</h3>
            <ul>
              <li>{t("free_parking_included")}</li>
              <li>{t("free_wifi")}</li>
              <li>{t("family_rooms_included")}</li>
              <li>{t("barbecue_grill")}</li>
              <li>{t("baby_cots")}</li>
            </ul>
          </div>
          <div className="fs-facility-category">
            <h3>{t("Parking")}</h3>
            <p>{t("private_parking_available")}</p>
          </div>
          <div className="fs-facility-category">
            <h3>{t("Internet")}</h3>
            <p>{t("wifi_available")}</p>
          </div>
          <div className="fs-facility-category">
            <h3>{t("kitchen")}</h3>
            <ul>
              <li>{t("kitchen_table")}</li>
              <li>{t("coffee_machine")}</li>
              <li>{t("cleaning_products")}</li>
              <li>{t("stove")}</li>
              <li>{t("oven")}</li>
              <li>{t("drying_rack")}</li>
              <li>{t("kitchen_utensils")}</li>
              <li>{t("electric_kettle")}</li>
              <li>{t("kitchen")}</li>
              <li>{t("kitchen_dishwasher")}</li>
              <li>{t("microwave")}</li>
              <li>{t("refrigerator")}</li>
            </ul>
          </div>
          <div className="fs-facility-category">
            <h3>{t("Bedroom")}</h3>
            <ul>
              <li>{t("bed_linen")}</li>
              <li>{t("wardrobe")}</li>
            </ul>
          </div>
          <div className="fs-facility-category">
            <h3>{t("Bathroom")}</h3>
            <ul>
              <li>{t("toilet_paper")}</li>
              <li>{t("towels")}</li>
              <li>{t("extra_toilet")}</li>
              <li>{t("bath_or_shower")}</li>
              <li>{t("slippers")}</li>
              <li>{t("private_bathroom")}</li>
              <li>{t("toilet")}</li>
              <li>{t("free_toiletries")}</li>
              <li>{t("shower")}</li>
            </ul>
          </div>
          <div className="fs-facility-category">
            <h3>{t("living_area")}</h3>
            <ul>
              <li>{t("dining_area")}</li>
              <li>{t("sofa")}</li>
              <li>{t("fireplace")}</li>
              <li>{t("seating_area")}</li>
              <li>{t("desk")}</li>
            </ul>
          </div>
          <div className="fs-facility-category">
            <h3>{t("media_technology")}</h3>
            <ul>
              <li>{t("flat_screen_tv")}</li>
              <li>{t("cable_channels")}</li>
              <li>{t("tv")}</li>
            </ul>
          </div>
          <div className="fs-facility-category">
            <h3>{t("room_facilities")}</h3>
            <ul>
              <li>{t("sofa_bed")}</li>
              <li>{t("clothes_rack")}</li>
              <li>{t("hardwood_or_parquet_floors")}</li>
              <li>{t("tile_marble_floor")}</li>
              <li>{t("private_entrance")}</li>
              <li>{t("carpet")}</li>
              <li>{t("fan")}</li>
            </ul>
          </div>
          <div className="fs-facility-category">
            <h3>{t("Accessibility")}</h3>
            <p>{t("upper_floors_accessible_by_stairs_only")}</p>
          </div>
          <div className="fs-facility-category">
            <h3>{t("Outside")}</h3>
            <ul>
              <li>{t("outdoor_fireplace")}</li>
              <li>{t("picnic_area")}</li>
              <li>{t("outdoor_furniture")}</li>
              <li>{t("outdoor_dining_area")}</li>
              <li>{t("sun_terrace")}</li>
              <li>{t("barbecue")}</li>
              <li>{t("patio")}</li>
              <li>{t("balcony")}</li>
              <li>{t("terrace")}</li>
              <li>{t("garden")}</li>
            </ul>
          </div>
          <div className="fs-facility-category">
            <h3>{t("common_areas")}</h3>
            <ul>
              <li>{t("shared_lounge_tv_area")}</li>
              <li>{t("game_room")}</li>
            </ul>
          </div>
          <div className="fs-facility-category">
            <h3>{t("Wellness")}</h3>
            <ul>
              <li>{t("hair_styling")}</li>
              <li>{t("pedicure")}</li>
              <li>{t("manicure")}</li>
              <li>{t("hair_treatments")}</li>
              <li>{t("makeup_services")}</li>
              <li>{t("waxing_services")}</li>
              <li>{t("facial_treatments")}</li>
              <li>{t("beauty_services")}</li>
              <li>{t("beach_umbrellas")}</li>
            </ul>
          </div>
          <div className="fs-facility-category">
            <h3>{t("food_drink")}</h3>
            <ul>
              <li>{t("grocery_deliveries")}</li>
              <li>{t("tea_coffee_maker")}</li>
            </ul>
          </div>
          <div className="fs-facility-category">
            <h3>{t("activities")}</h3>
            <ul>
              <li>{t("local_culture_tour_class")}</li>
              <li>{t("bike_tours")}</li>
              <li>{t("walking_tours")}</li>
              <li>{t("badminton_equipment")}</li>
              <li>{t("ski_school")}</li>
              <li>{t("ski_storage")}</li>
              <li>{t("hiking")}</li>
              <li>{t("skiing")}</li>
            </ul>
          </div>
          <div className="fs-facility-category">
            <h3>{t("view")}</h3>
            <ul>
              <li>{t("courtyard_view")}</li>
              <li>{t("river_view")}</li>
              <li>{t("garden_view")}</li>
              <li>{t("view")}</li>
            </ul>
          </div>
          <div className="fs-facility-category">
            <h3>{t("building_characteristics")}</h3>
            <p>{t("detached")}</p>
          </div>
          <div className="fs-facility-category">
            <h3>{t("reception_services")}</h3>
            <ul>
              <li>{t("invoice_provided")}</li>
              <li>{t("private_check_in_check_out")}</li>
            </ul>
          </div>
          <div className="fs-facility-category">
            <h3>{t("entertainment_family_services")}</h3>
            <ul>
              <li>{t("outdoor_play_equipment_for_kids")}</li>
              <li>{t("indoor_play_area")}</li>
              <li>{t("board_games_puzzles")}</li>
            </ul>
          </div>
          <div className="fs-facility-category">
            <h3>{t("cleaning_services")}</h3>
            <ul>
              <li>{t("daily_housekeeping")}</li>
              <li>{t("dry_cleaning")}</li>
              <li>{t("laundry")}</li>
            </ul>
          </div>
          <div className="fs-facility-category">
            <h3>{t("business_facilities")}</h3>
            <p>{t("meeting_banquet_facilities")}</p>
          </div>
          <div className="fs-facility-category">
            <h3>{t("Others")}</h3>
            <ul>
              <li>{t("designated_smoking_area")}</li>
              <li>{t("no_smoking_in_all_areas")}</li>
              <li>{t("heating")}</li>
              <li>{t("family_rooms")}</li>
            </ul>
          </div>
          <div className="fs-facility-category">
            <h3>{t("safety_security")}</h3>
            <ul>
              <li>{t("fire_extinguishers")}</li>
              <li>{t("cctv_outside_property")}</li>
              <li>{t("smoke_alarms")}</li>
              <li>{t("security_alarm")}</li>
              <li>{t("key_card_access")}</li>
              <li>{t("key_access")}</li>
              <li>{t("carbon_monoxide_detector")}</li>
              <li>{t("safe")}</li>
            </ul>
          </div>
          <div className="fs-facility-category">
            <h3>{t("languages_spoken")}</h3>
            <ul>
              <li>{t("german")}</li>
              <li>{t("english")}</li>
              <li>{t("romanian")}</li>
            </ul>
          </div>
        </div>

        <div className="fs-important-info">
          <h3>{t("important_info")}</h3>
          <p>
            {t("special_requests_info")} {t("check_available_dates")}
          </p>
          <div className="fs-check-info">
            <h4>{t("check_in")}</h4>
            <p>{t("from_3pm_to_midnight")}</p>
            <p>{t("please_inform_property")}</p>
          </div>
          <div className="fs-check-info">
            <h4>{t("check_out")}</h4>
            <p>{t("from_7am_to_11am")}</p>
          </div>
          <div className="fs-policy-info">
            <h4>{t("cancellation_prepayment")}</h4>
            <p>{t("cancellation_policy")}</p>
          </div>
          <div className="fs-policy-info">
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
          <div className="fs-policy-info">
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
