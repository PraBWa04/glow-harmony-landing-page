# Melody Lamp Project

The Melody Lamp Project is a modern e-commerce platform designed to showcase and sell decorative and functional lamps, particularly focusing on seasonal and innovative designs. The project aims to provide a seamless user experience for browsing products, placing orders, and integrating social media marketing tools.

## Features

### Key Functionalities

- **Product Display**: A visually appealing layout showcasing the latest lamp designs, including product images, prices, and descriptions.
- **Order Form**: An easy-to-use form for customers to select products and place orders.
- **Responsive Design**: Fully optimized for desktops, tablets, and mobile devices.
- **Dynamic Event Tracking**: Integration with Facebook Pixel for tracking events like `PageView`, `AddToCart`, and `CompleteRegistration`.
- **Telegram Integration**: Sends order details directly to a specified Telegram account.

### Design Highlights

- **Hero Section**: Eye-catching banner promoting seasonal discounts.
- **Navigation Bar**: Clean and intuitive navigation with a hamburger menu for mobile devices.
- **Testimonial Section**: Carousel of customer reviews.
- **Benefits Grid**: Highlights why customers should choose Melody Lamp.
- **Gallery**: High-quality images showcasing lamp features and details.

## Technical Overview

### Frontend Technologies

- **HTML5 & CSS3**: Structured content and styled layout.
- **JavaScript**: Interactive features, including form submission and event handling.
- **Swiper.js**: For creating a dynamic testimonial carousel.

### Backend Integration

- **Telegram Bot API**: Sends customer orders to a Telegram account for streamlined communication.

### Event Tracking

- **Meta Pixel Integration**: Tracks customer interactions for analytics and marketing:
  - `PageView`: Triggered on page load.
  - `AddToCart`: Triggered when the "Order Now" button is clicked.
  - `CompleteRegistration`: Triggered upon successful order form submission.

### Responsive Design

- Optimized for various screen sizes using media queries.
- Fully functional across major browsers and devices.

## Folder Structure

```plaintext
melody-lamp-project/
├── assets/
│   ├── images/       # Product and UI images
├── scripts/
│   └── script.js     # JavaScript for dynamic features
├── styles/
│   └── style.css     # Main CSS file
├── index.html        # Main HTML file
└── README.md         # Project documentation
```

## Setup and Deployment

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Open the `index.html` file in a browser to view the project locally.
3. Ensure the Telegram Bot Token and Chat ID are correctly configured in `script.js` for form submissions.

## Link

https://prabwa04.github.io/melody-lamp-landing-page/
