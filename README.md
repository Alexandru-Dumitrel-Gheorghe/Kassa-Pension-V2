# Kassa Pensiune Website

Kassa is a luxurious vacation home located in Bran, Romania. This project is a React-based website designed to showcase the beauty and amenities of the Kassa property, allowing potential guests to explore rooms, facilities, and other offerings.

## Project Structure

### Components

The `src/components` directory contains the reusable components of the project, organized by sections such as `home`, `Prices`, and `Facility`. These components form the building blocks of the different pages.

- **home**: Contains components specific to the home page, such as the header, room cards, and testimonials.
- **Prices**: Includes components related to room pricing, such as the `InfoRooms` and `PriceRooms` components.
- **Facility**: Manages the facility-related information of the property.
- **gallery**: Handles the image gallery of the property.
- **MoreInfo**: Provides additional information about the property.

### Pages

The `src/pages` directory contains the main pages of the website. Each page component represents a route in the application:

- **Home.js**: The landing page of the website.
- **Prices.js**: Displays pricing information and details about the rooms.
- **Gallery.js**: Showcases images of the property.
- **About.js**: Provides information about the Kassa property.
- **Contact.js**: A contact form for reservations and inquiries.
- **MoreInfo.js**: Additional information about the property.

### Utilities

- **ScrollToTop.js**: Ensures smooth scrolling to the top when navigating between pages.
- **PageTransitionHandler.js**: Handles animations and transitions between pages.
- **Spinner.js**: A loading spinner for asynchronous operations.

### Styles

The styling is done using CSS Modules for encapsulated and scoped styles. Each component has its own corresponding CSS module.

### Assets

All static assets like images and videos are located in the `public/assets` directory.

## Installation and Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd kassa-pensiune
   npm install
   npm start
   npm run build
   ```

### Deployment

The project can be deployed on platforms like Netlify. Make sure to handle routing correctly by adding a \_redirects file for Single Page Application (SPA) behavior.

### License

This project is licensed under the MIT License - see the LICENSE file for details.

### Contact

For any inquiries, please contact:
Email: gheorghe.a@outlook.com
Website: [Kassa Official Website](https://kassa-v1.netlify.app)
