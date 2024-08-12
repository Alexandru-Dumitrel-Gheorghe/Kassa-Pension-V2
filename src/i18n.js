import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      welcome: "Welcome to Pension Kassa",
      description:
        "Located in the picturesque town of Bran, Kassa offers a unique and luxurious experience for all its guests. Surrounded by beautiful landscapes and rich in history, our hotel provides a perfect getaway for relaxation and adventure.",
      location: "Bran, Romania",
      luxury_rooms: "Luxury Rooms",
      excellent_service: "Excellent Service",
      important_info: "Important Info",
      home: "Home",
      prices: "Rooms",
      gallery: "Gallery",
      about: "About",
      contact: "Contact",
      info: "Information",
      experience_luxury: "Experience luxury and comfort",
      book_your_stay: "Book Your Stay",
      stay_in_style: "Stay in Style",
      view_rooms: "VIEW ROOMS",
      facilities: "Facilities",
      free_wifi: "Free WiFi",
      tv: "TV",

      barbecue: "Barbecue",
      cafe: "Cafe",
      premium_services: "Premium Services",
      enjoy_best_services: "Enjoy the best services during your stay.",
      modern_facilities: "Modern Facilities",
      rooms_equipped_with_modern_facilities:
        "Rooms equipped with modern facilities for your comfort.",
      relaxing_atmosphere: "Relaxing Atmosphere",
      quiet_place_to_relax: "A quiet place to relax and enjoy your stay.",
      guest_reviews: "Guest Reviews",
      show_availability: "Show Availability",
      rated_10: "Rated 10/10",
      read_all_reviews: "Read all reviews",
      categories: "Categories",
      hotel_staff: "Hotel Staff",
      amenities: "Amenities",
      cleanliness: "Cleanliness",
      comfort: "Comfort",
      value_for_money: "Value for Money",
      high_rating_for_bran: "High rating for Bran",
      direct_bookings_benefit: "Direct bookings benefit from",
      whole_house: "Whole House",
      whole_house_beds: "7 extra-large double beds, 1 single bed, 1 sofa bed",
      whole_house_description:
        "Pension Kassa offers comfortable accommodation in a fully equipped house, ideal for families or large groups. All rooms are tastefully decorated and offer modern amenities for an unforgettable stay.",
      whole_house_sofa: "1 sofa bed",
      private_bathroom: "Private Bathroom",
      Bedroom: "Bedroom",
      flat_screen_tv: "Flat-screen TV",
      show_prices: "Show Prices",
      hide_prices: "Hide Prices",
      price_starting_from:
        "Prices for the whole house start from {{price}}/night.",
      price_variation_notice:
        "Prices may vary depending on the season and availability.",
      book_now: "Book Now",
      balcony: "Balcony",
      wifi_included: "WiFi Included",
      view: "View",
      family_rooms: "Family Rooms",
      barbecue_facilities: "Barbecue Facilities",
      kitchen: "Kitchen",
      follow_us: "Follow Us",
      all_rights_reserved: "All rights reserved",
      developed_by: "Developed by",
      guest_experiences: "Guest Experiences",
      tripadvisor_review: "The staff was very helpful",
      booking_review: "The view is amazing, one of the best we've had.",
      google_review: "What luxury! :) We enjoyed our stay.",
      whole_house_rental: "Whole House Rental",
      kassa_bran: "Kassa Bran",
      peaceful_retreat:
        "PEACEFUL RETREAT - A SANCTUARY IN THE CARPATHIAN MOUNTAINS",
      kassa_bran_description1:
        "Kassa is located in Bran, 2.1 km from Bran Castle, and offers free WiFi, a garden, and free private parking. This property with garden views offers a balcony.",
      kassa_bran_description2:
        "This holiday home with a terrace and river views includes 7 bedrooms, a living room, a flat-screen TV, a fully equipped kitchen with a fridge and a dishwasher, and 7 bathrooms with a shower. Towels and bed linen are provided.",
      kassa_bran_description3:
        "The holiday home also provides a barbecue. There is a shared lounge at this property and guests can go skiing nearby.",
      kassa_bran_description4:
        "Kassa is 15 km from Dino Parc and 31 km from Piața Sfatului. The nearest airport is Brașov-Ghimbav International Airport, located 28 km from Kassa.",
      our_rooms: "Our Rooms",
      classic_room: "Classic Room",
      classic_room_beds: "1 single bed and 1 king-size double bed",
      classic_room_description:
        "Spacious bedroom with modern amenities and sea view.",
      superior_room: "Superior Room",
      superior_room_beds: "1 king-size double bed",
      superior_room_description:
        "Elegant room with balcony and panoramic view.",
      luxury_room: "Luxury Room",
      luxury_room_beds: "1 king-size double bed",
      luxury_room_description:
        "Luxurious suite with premium amenities and jacuzzi.",
      suite_room: "Suite Room",
      suite_room_beds: "1 king-size double bed",
      suite_room_description:
        "Comfortable suite with relaxation area and minibar.",
      family_room: "Family Room",
      family_room_beds: "1 king-size double bed",
      family_room_description: "Family room with children's facilities.",
      deluxe_room: "Deluxe Room",
      deluxe_room_beds: "1 king-size double bed",
      deluxe_room_description: "Deluxe room with top services and view.",
      living_area: "Living Area",
      living_area_description: "Relaxation area with extensible sofa and TV.",
      nearby_attractions_title: "Nearby Attractions",
      castelul_bran: "Bran Castle",
      castelul_bran_description: "One of the most famous castles in Romania.",
      parcul_aventura: "Adventure Park Cheile Grădiștei",
      parcul_aventura_description: "Adventure park for outdoor activities.",
      botorog_campground: "Botorog Campground",
      botorog_campground_description: "Camping and nature activities.",
      bucegi: "Bucegi",
      bucegi_description: "Mountain massif in the Southern Carpathians.",
      navigate: "Navigate",
      accommodation_info: "Accommodation Information",
      house_rental_announcement:
        "The house is rented out entirely, offering maximum privacy and comfort.",
      contact_us_for_reservations: "Contact Us for Reservations",
      send_us_a_message: "Send Us a Message",
      full_name: "Full Name",
      email_address: "Email Address",
      subject: "Subject",
      message: "Message",
      send_message: "Send Message",
      additional_information: "Additional Information",
      address: "Strada Valea Porții 213, Bran, Romania",
      // Adăugat pentru paginile și componentele noi
      information: "Information",
      facilities_offered_by_kassa: "Facilities offered by Kassa",
      excellent_facilities: "Excellent facilities! Review score: 10",
      check_available_dates: "Check Available Dates",
      most_appreciated_facilities: "Most appreciated facilities",
      free_parking_included: "Free parking included",
      family_rooms_included: "Family rooms included",
      barbecue_grill: "Barbecue grill",
      baby_cots: "Baby cots (on request)",
      kitchen_table: "Table",
      coffee_machine: "Coffee machine",
      cleaning_products: "Cleaning products",
      stove: "Stove",
      oven: "Oven",
      drying_rack: "Drying rack",
      kitchen_utensils: "Kitchen utensils",
      electric_kettle: "Electric kettle",
      kitchen_dishwasher: "Dishwasher",
      microwave: "Microwave",
      refrigerator: "Refrigerator",
      bed_linen: "Bed linen",
      wardrobe: "Wardrobe or closet",
      toilet_paper: "Toilet paper",
      towels: "Towels",
      extra_toilet: "Extra toilet",
      bath_or_shower: "Bath or shower",
      slippers: "Slippers",
      toilet: "Toilet",
      free_toiletries: "Free toiletries",
      shower: "Shower",
      dining_area: "Dining area",
      sofa: "Sofa",
      fireplace: "Fireplace",
      seating_area: "Seating area",
      desk: "Desk",
      media_technology: "Media & Technology",
      cable_channels: "Cable channels",
      room_facilities: "Room facilities",
      sofa_bed: "Sofa bed",
      clothes_rack: "Clothes rack",
      hardwood_or_parquet_floors: "Hardwood or parquet floors",
      tile_marble_floor: "Tile/marble floor",
      private_entrance: "Private entrance",
      carpet: "Carpet",
      fan: "Fan",
      upper_floors_accessible_by_stairs_only:
        "Upper floors accessible by stairs only",
      outdoor_fireplace: "Outdoor fireplace",
      picnic_area: "Picnic area",
      outdoor_furniture: "Outdoor furniture",
      outdoor_dining_area: "Outdoor dining area",
      sun_terrace: "Sun terrace",
      patio: "Patio",
      garden: "Garden",
      shared_lounge_tv_area: "Shared lounge/TV area",
      game_room: "Game room",
      hair_styling: "Hair styling",
      pedicure: "Pedicure",
      manicure: "Manicure",
      hair_treatments: "Hair treatments",
      makeup_services: "Makeup services",
      waxing_services: "Waxing services",
      facial_treatments: "Facial treatments",
      beauty_services: "Beauty services",
      beach_umbrellas: "Beach umbrellas",
      food_drink: "Food & Drink",
      grocery_deliveries: "Grocery deliveries (extra charge)",
      tea_coffee_maker: "Tea/Coffee maker",
      activities: "Activities",
      local_culture_tour_class:
        "Tour or class about local culture (extra charge)",
      bike_tours: "Bike tours (extra charge)",
      walking_tours: "Walking tours (extra charge)",
      badminton_equipment: "Badminton equipment",
      ski_school: "Ski school (extra charge)",
      ski_storage: "Ski storage (extra charge)",
      hiking: "Hiking (extra charge)",
      skiing: "Skiing (Off-site)",
      courtyard_view: "Courtyard view",
      river_view: "River view",
      garden_view: "Garden view",
      detached: "Detached",
      invoice_provided: "Invoice provided",
      private_check_in_check_out: "Private check-in/check-out",
      outdoor_play_equipment_for_kids: "Outdoor play equipment for kids",
      indoor_play_area: "Indoor play area",
      board_games_puzzles: "Board games/puzzles",
      daily_housekeeping: "Daily housekeeping (extra charge)",
      dry_cleaning: "Dry cleaning (extra charge)",
      laundry: "Laundry (extra charge)",
      meeting_banquet_facilities: "Meeting/banquet facilities",
      designated_smoking_area: "Designated smoking area",
      no_smoking_in_all_areas: "No smoking in all areas",
      heating: "Heating",
      fire_extinguishers: "Fire extinguishers",
      cctv_outside_property: "CCTV outside property",
      smoke_alarms: "Smoke alarms",
      security_alarm: "Security alarm",
      key_card_access: "Key card access",
      key_access: "Key access",
      carbon_monoxide_detector: "Carbon monoxide detector",
      safe: "Safe",
      languages_spoken: "Languages spoken",
      german: "German",
      english: "English",
      romanian: "Romanian",
      special_requests_info:
        "Kassa accommodates special requests - submit them in the next step!",
      from_3pm_to_midnight: "From 15:00 to 00:00",
      please_inform_property:
        "Please inform the property in advance about your arrival time.",
      from_7am_to_11am: "From 7:00 to 11:00",
      cancellation_policy:
        "Cancellation and prepayment policies vary depending on the accommodation type. Please check the conditions when selecting your option.",
      children_policy:
        "Children of any age are welcome. For children aged 4 years and above, adult rates apply at this property.",
      add_children_and_ages:
        "To see correct prices and occupancy info, add the number of children in your group and their ages to your search.",
      cribs_available_on_request: "Crib available on request",
      free: "Free",
      extra_beds_policy:
        "The number of extra beds depends on the option you choose. Please check your selected option for more information.",
      no_extra_beds_available: "No extra beds available at this property.",
      cribs_availability: "Cribs are subject to availability.",
      no_age_restriction:
        "No age restriction - there is no minimum age for check-in",
      smoking_policy: "Smoking is not allowed.",
      pets_policy: "Pets are not allowed.",
      private_parking_available: "Private parking available",
      wifi_available: "WiFi available",
      common_areas: "Common areas",
      building_characteristics: "Building characteristics",
      reception_services: "Reception services",
      entertainment_family_services: "Entertainment & family services",
      cleaning_services: "Cleaning services",
      business_facilities: "Business facilities",
      safety_security: "Safety & security",
      more_info: "More Info",
      check_in: "Check-in",
      check_out: "Check-out",
      cancellation_prepayment: "Cancellation/Prepayment",
      children_beds: "Children's beds",
      cribs_extra_beds: "Cribs and extra beds",
      Bathroom: "Bathroom",
      Wellness: "Wellness",
      Accessibility: "Accessibility",
      Outside: "Outside",
      Others: "Others",
      pension_kassa: "Pension Kassa",
      unique_experience: "A unique experience.",
      pool_and_spa: "Pool and Spa",
      conference_rooms: "Conference Rooms",
      free_parking: "Free Parking",
      relaxation_area_with_sofa: "Relaxation area with sofa",
      change_language: "Change Language",
      restaurant_and_bar: "Restaurant and Bar",
      air_conditioning: "Air Conditioning",
      attractions_and_facilities: "Attractions and Facilities",
      restaurants_and_cafes: "Restaurants and Cafes",
      main_attractions: "Main Attractions",
      bulzu_branului: "Bulzu Branului (650 m)",
      la_cristi: "La Cristi (1.5 km)",
      burg: "Burg (1.6 km)",
      bear_sanctuary: "Bear Sanctuary in Zărnești (10 km)",
      rasnov_fortress: "Râșnov Fortress (11 km)",
      fun_park_kalinderu: "Fun Park Kalinderu (14 km)",
      cantacuzino_castle: "Cantacuzino Castle (16 km)",
      foisor_castle: "Foișor Castle (20 km)",
      learn_more: "Learn More",
      private_bathroom_with_jacuzzi: "Private bathroom with jacuzzi",
      relaxation_area: "Relaxation area",
      living_area_beds: " sofa bed ",
      flat_screen_tv_with_cable: "Flat-screen TV with cable",
      Parking: "Parking",
      rooms_subtitle: "Choose the room that suits you best",
      show_more: "Show More",
      show_less: "Show Less",
    },
  },
  ro: {
    translation: {
      welcome: "Bun venit la Pensiunea Kassa",
      description:
        "Situată în pitorescul oraș Bran, Kassa oferă o experiență unică și luxoasă tuturor oaspeților săi. Înconjurată de peisaje frumoase și bogată în istorie, hotelul nostru oferă o evadare perfectă pentru relaxare și aventură.",
      location: "Bran, România",
      luxury_rooms: "Camere de lux",
      excellent_service: "Servicii excelente",
      important_info: "Informații importante",
      home: "Acasă",
      prices: "Camere",
      gallery: "Galerie",
      about: "Despre",
      contact: "Contact",
      info: "Informații",
      experience_luxury: "Experiența luxului și confortului",
      book_your_stay: "Rezervați-vă sejurul",
      stay_in_style: "Cazări cu stil",
      view_rooms: "VEZI CAMERE",
      facilities: "Facilități",
      free_wifi: "WiFi Gratuit",
      tv: "Televizor",
      free_parking: "Parcare Gratuită",
      barbecue: "Grătar",
      cafe: "Cafenea",
      premium_services: "Servicii Premium",
      enjoy_best_services:
        "Bucurați-vă de cele mai bune servicii pe durata șederii dvs.",
      modern_facilities: "Facilități Moderne",
      rooms_equipped_with_modern_facilities:
        "Camere echipate cu facilități moderne pentru confortul dvs.",
      relaxing_atmosphere: "Atmosferă Relaxantă",
      quiet_place_to_relax:
        "Un loc liniștit pentru a vă relaxa și a vă bucura de șederea dvs.",
      guest_reviews: "Recenziile Oaspeților",
      show_availability: "Afișează Disponibilitatea",
      rated_10: "Evaluat 10/10",
      read_all_reviews: "Citește toate recenziile",
      categories: "Categorii",
      hotel_staff: "Personalul Hotelului",
      amenities: "Facilități",
      cleanliness: "Curățenie",
      comfort: "Confort",
      value_for_money: "Raport Calitate-Preț",
      high_rating_for_bran: "Scor ridicat pentru Bran",
      direct_bookings_benefit: "Rezervările directe beneficiază de",
      whole_house: "Casă întreagă",
      whole_house_beds:
        "7 paturi duble extra-large, 1 pat de o persoană, 1 canapea extensibilă",
      whole_house_description:
        "Pensiunea Kassa oferă cazare confortabilă într-o casă complet echipată, ideală pentru familii sau grupuri mari. Toate camerele sunt decorate cu bun gust și oferă facilități moderne pentru un sejur de neuitat.",
      whole_house_sofa: "1 canapea extensibilă",
      private_bathroom: "Baie privată",
      flat_screen_tv: "Televizor cu ecran plat",
      show_prices: "Arată prețuri",
      hide_prices: "Ascunde prețuri",
      price_starting_from:
        "Prețurile pentru întreaga casă încep de la {{price}}/noapte.",
      price_variation_notice:
        "Prețurile pot varia în funcție de sezon și disponibilitate.",
      book_now: "Rezervă acum",
      balcony: "Balcon",
      wifi_included: "WiFi Inclus",
      view: "Priveliște",
      family_rooms: "Camere de Familie",
      barbecue_facilities: "Facilități pentru Grătar",
      kitchen: "Bucătărie",
      follow_us: "Urmărește-ne",
      all_rights_reserved: "Toate drepturile rezervate",
      developed_by: "Dezvoltat de",
      guest_experiences: "Experiențele oaspeților noștri",
      tripadvisor_review: "Personalul a fost foarte util",
      booking_review:
        "Vederea este uimitoare, una dintre cele mai bune pe care le-am avut.",
      google_review: "Ce lux! :) Ne-am bucurat de șederea noastră",
      whole_house_rental: "Închiriere întreagă pensiune",
      kassa_bran: "Kassa Bran",
      peaceful_retreat: "RELAZARE TRANQUILĂ - OAZĂ DE LINIȘTE",
      kassa_bran_description1:
        "Kassa se află în Bran, la 2,1 km de Castelul Bran, și oferă WiFi gratuit, o grădină și parcare privată gratuită. Această proprietate cu vedere la grădină pune la dispoziție un balcon.",
      kassa_bran_description2:
        "Această casă de vacanță cu terasă și vedere la râu include 7 dormitoare, un living, un televizor cu ecran plat, o bucătărie utilată, cu frigider și mașină de spălat vase, precum și 7 băi cu duș. Această casă de vacanță pune la dispoziția oaspeților prosoape și lenjerie de pat.",
      kassa_bran_description3:
        "Această casă de vacanță pune la dispoziție un grătar. Această proprietate are un salon de zi comun, iar în apropiere oaspeții pot desfășura activități precum schi.",
      kassa_bran_description4:
        "Kassa se află la 15 km de Dino Parc și la 31 km de Piața Sfatului. Cel mai apropiat aeroport este Aeroportul Internațional Brașov-Ghimbav, situat la 28 km de Kassa.",
      our_rooms: "Camerele Noastre",
      classic_room: "Cameră Clasică",
      classic_room_beds: "1 pat de o persoană și 1 pat dublu king-size",
      classic_room_description:
        "Dormitor spațios cu facilități moderne și vedere la mare.",
      superior_room: "Cameră Superioară",
      superior_room_beds: "1 pat dublu king-size",
      superior_room_description:
        "Cameră elegantă cu balcon și vedere panoramică.",
      luxury_room: "Cameră de Lux",
      luxury_room_beds: "1 pat dublu king-size",
      luxury_room_description:
        "Suită luxoasă cu facilități premium și jacuzzi.",
      suite_room: "Suită",
      suite_room_beds: "1 pat dublu king-size",
      suite_room_description:
        "Suită confortabilă cu zonă de relaxare și minibar.",
      family_room: "Cameră de Familie",
      family_room_beds: "1 pat dublu king-size",
      family_room_description: "Cameră de familie cu facilități pentru copii.",
      deluxe_room: "Cameră Deluxe",
      deluxe_room_beds: "1 pat dublu king-size",
      deluxe_room_description: "Cameră deluxe cu servicii de top și vedere.",
      living_area: "Zonă de Relaxare",
      living_area_description: "Zonă de relaxare cu canapea extensibilă și TV.",
      nearby_attractions_title: "Atracții în Apropiere",
      castelul_bran: "Castelul Bran",
      castelul_bran_description:
        "Unul dintre cele mai faimoase castele din România.",
      parcul_aventura: "Parcul de aventură Cheile Grădiștei",
      parcul_aventura_description:
        "Parc de aventură pentru activități în aer liber.",
      botorog_campground: "Camping Botorog",
      botorog_campground_description: "Camping și activități în natură.",
      bucegi: "Bucegi",
      bucegi_description: "Masiv montan din Carpații Meridionali.",
      navigate: "Navighează",
      accommodation_info: "Informații despre cazare",
      house_rental_announcement:
        "Casa se închiriază complet, oferind intimitate și confort maxim.",
      contact_us_for_reservations: "Pentru Rezervări, Contactați-ne",
      send_us_a_message: "Trimite-ne un mesaj",
      full_name: "Nume complet",
      email_address: "Adresa de email",
      subject: "Subiect",
      message: "Mesaj",
      send_message: "Trimite Mesajul",
      additional_information: "Informații Suplimentare",
      address: "Strada Valea Porții 213, Bran, România",
      // Adăugat pentru paginile și componentele noi
      information: "Informații",
      facilities_offered_by_kassa: "Facilități oferite de Kassa",
      excellent_facilities: "Facilităţi excelente! Scor din comentarii: 10",
      check_available_dates: "Vedeţi datele disponibile",
      most_appreciated_facilities: "Cele mai apreciate facilități",
      free_parking_included: "parcare gratuită",
      family_rooms_included: "camere de familie",
      barbecue_grill: "grătar",
      baby_cots: "Pătuțuri de copii (la cerere)",
      kitchen_table: "Masă",
      coffee_machine: "Mașină de cafea",
      cleaning_products: "Produse de curățenie",
      stove: "Plită de gătit",
      oven: "Cuptor",
      drying_rack: "Uscător de haine",
      kitchen_utensils: "Ustensile de bucătărie",
      electric_kettle: "Cană fierbător",
      kitchen_dishwasher: "Maşină de spălat vase",
      microwave: "Cuptor cu microunde",
      refrigerator: "Frigider",
      bed_linen: "Lenjerie de pat",
      wardrobe: "Garderobă sau dulap",
      toilet_paper: "Hârtie igienică",
      towels: "Prosoape",
      extra_toilet: "Toaletă suplimentară",
      bath_or_shower: "Cadă sau duş",
      slippers: "Papuci de casă",
      toilet: "Toaletă",
      free_toiletries: "Articole de toaletă gratuite",
      shower: "Duş",
      dining_area: "Zonă de luat masa",
      sofa: "Canapea",
      fireplace: "Șemineu",
      seating_area: "Zonă de relaxare",
      desk: "Birou",
      media_technology: "Media/Tehnologie",
      cable_channels: "Canale prin cablu",
      room_facilities: "Facilităţile camerei",
      sofa_bed: "Canapea extensibilă",
      clothes_rack: "Suport de haine",
      hardwood_or_parquet_floors: "Pardoseală de lemn sau parchet",
      tile_marble_floor: "Pardoseală de gresie/marmură",
      private_entrance: "Intrare privată",
      carpet: "Mochetă",
      fan: "Ventilator",
      upper_floors_accessible_by_stairs_only:
        "Etaje superioare accesibile doar pe scări",
      outdoor_fireplace: "șemineu în aer liber",
      picnic_area: "zonă de picnic",
      outdoor_furniture: "mobilier exterior",
      outdoor_dining_area: "Zonă de luat masa în aer liber",
      sun_terrace: "terasă la soare",
      patio: "Patio",
      terrace: "terasă",
      garden: "grădină",
      shared_lounge_tv_area: "lounge/cameră cu TV comună",
      game_room: "cameră de jocuri",
      hair_styling: "coafat",
      pedicure: "pedichiură",
      manicure: "manichiură",
      hair_treatments: "tratamente capilare",
      makeup_services: "machiaj profesional",
      waxing_services: "epilare cu ceară",
      facial_treatments: "tratamente faciale",
      beauty_services: "servicii de înfrumusețare",
      beach_umbrellas: "umbrele de plajă",
      food_drink: "Mâncăruri și băuturi",
      grocery_deliveries: "livrări de alimente (cost suplimentar)",
      tea_coffee_maker: "Aparat pentru prepararea de ceai/cafea",
      activities: "Activităţi",
      local_culture_tour_class:
        "Tur sau curs despre cultura locală (cost suplimentar)",
      bike_tours: "Tururi cu bicicleta (cost suplimentar)",
      walking_tours: "Tururi de mers pe jos (cost suplimentar)",
      badminton_equipment: "echipament de badminton",
      ski_school: "şcoală de schi (cost suplimentar)",
      ski_storage: "depozit schiuri (cost suplimentar)",
      hiking: "drumeţii (cost suplimentar)",
      skiing: "schi (În afara locației)",
      courtyard_view: "Vedere la curtea interioară",
      river_view: "Vedere la râu",
      garden_view: "Vedere la grădină",
      detached: "Independentă",
      invoice_provided: "Factură disponibilă la cerere",
      private_check_in_check_out: "check-in/check-out privat",
      outdoor_play_equipment_for_kids: "echipament de joacă pentru exterior",
      indoor_play_area: "zonă de joacă înăuntru",
      board_games_puzzles: "jocuri și puzzle-uri",
      daily_housekeeping: "Menaj zilnic (cost suplimentar)",
      dry_cleaning: "curăţătorie chimică (cost suplimentar)",
      laundry: "spălătorie (cost suplimentar)",
      meeting_banquet_facilities: "săli de conferinţă şi petreceri",
      designated_smoking_area: "zonă pentru fumători",
      no_smoking_in_all_areas:
        "fumatul interzis în toate spaţiile publice şi private",
      heating: "încălzire",
      fire_extinguishers: "Extinctoare",
      cctv_outside_property: "Camere de supraveghere în afara proprietății",
      smoke_alarms: "Alarmă de fum",
      security_alarm: "Alarmă de securitate",
      key_card_access: "Acces cu cardul",
      key_access: "Acces cu cheia",
      carbon_monoxide_detector: "Detector de monoxid de carbon",
      safe: "Seif",
      languages_spoken: "Limbi vorbite",
      german: "germană",
      english: "engleză",
      romanian: "română",
      special_requests_info:
        "Kassa primește cereri speciale - trimiteți la pasul următor!",
      from_3pm_to_midnight: "De la 15:00 la 0:00",
      please_inform_property:
        "Va trebui să informați proprietatea în avans despre ora sosirii.",
      from_7am_to_11am: "De la 7:00 la 11:00",
      cancellation_policy:
        "Politicile privind anularea și plata în avans variază în funcție de tipul unității de cazare. Vă rugăm să verificați atunci când faceți selecția ce condiții se pot aplica pentru fiecare opțiune.",
      children_policy:
        "Copiii de orice vârstă sunt bine-veniți. Pentru copiii în vârstă de 4 ani și mai mari se vor percepe tarife de adulți la această proprietate.",
      add_children_and_ages:
        "Pentru a vedea informațiile corecte despre prețuri și capacitate, vă rugăm să adăugați în căutare numărul de copii care vă însoțesc și vârstele acestora.",
      cribs_available_on_request: "Pătuț disponibil la cerere",
      free: "Gratis",
      extra_beds_policy:
        "Numărul de paturi suplimentare depinde de opțiunea pe care o alegeți. Vă rugăm să verificați opțiunea selectată pentru mai multe informații.",
      no_extra_beds_available:
        "La această proprietate nu sunt disponibile paturi suplimentare.",
      cribs_availability:
        "Pătuțurile sunt oferite în funcție de disponibilitate.",
      no_age_restriction:
        "Nicio restricţie de vârstă - Nu există o vârstă minimă pentru check-in",
      smoking_policy: "Fumători - Fumatul nu este permis.",
      pets_policy:
        "Animale de companie - Animalele de companie nu sunt acceptate.",
      private_parking_available: "Parcare privată disponibilă",
      wifi_available: "WiFi disponibil",
      common_areas: "Zone comune",
      building_characteristics: "Caracteristici clădire",
      reception_services: "Servicii de recepție",
      entertainment_family_services: "Servicii de divertisment și familie",
      cleaning_services: "Servicii de curățenie",
      business_facilities: "Facilități de afaceri",
      safety_security: "Siguranță și securitate",
      more_info: "Informații",
      check_in: "Check-in",
      check_out: "Check-out",
      cancellation_prepayment: "Anulare/Preplată",
      children_beds: "Paturi pentru copii",
      cribs_extra_beds: "Pătuțuri și paturi suplimentare",
      Bedroom: "Dormitor",
      Bathroom: "Baie",
      Wellness: "Wellness",
      Accessibility: "Accesibilitate",
      Outside: "Exterior",
      Others: "Altele",
      pension_kassa: "Pensiunea Kassa",
      unique_experience: "O experiență unică.",
      pool_and_spa: "Piscină și Spa",
      conference_rooms: "Săli de conferință",

      restaurant_and_bar: "Restaurant și bar",
      air_conditioning: "Aer condiționat",
      attractions_and_facilities: "Atracții și Facilități",
      restaurants_and_cafes: "Restaurante și cafenele",
      main_attractions: "Principalele atracții",
      bulzu_branului: "Bulzu Branului (650 m)",
      la_cristi: "La Cristi (1,5 km)",
      burg: "Burg (1,6 km)",
      bear_sanctuary: "Rezervaţia de urși de la Zărnești (10 km)",
      rasnov_fortress: "Cetatea Râșnov (11 km)",
      fun_park_kalinderu: "Fun Park Kalinderu (14 km)",
      cantacuzino_castle: "Castelul Cantacuzino (16 km)",
      foisor_castle: "Foișor Castle (20 km)",
      learn_more: "Află Mai Multe",
      relaxation_area_with_sofa: "Zonă de relaxare cu canapea",
      private_bathroom_with_jacuzzi: "Baie privată cu jacuzzi",
      relaxation_area: "Zonă de relaxare",
      flat_screen_tv_with_cable_channels:
        "Televizor cu ecran plat și canale prin cablu",
      flat_screen_tv_with_cable: "Televizor cu ecran plat și canale prin cablu",
      living_area_beds: " canapea extensibilă",
      change_language: "Schimbă Limba",
      Parking: "Parcare",
      rooms_subtitle: "Alegeți camera care vi se potrivește cel mai bine",
      show_more: "Arată mai mult",
      show_less: "Arată mai puțin",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ro", // default language
  fallbackLng: "ro",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
