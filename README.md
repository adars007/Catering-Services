# Catering Services

A full-stack catering services project designed to streamline catering operations, manage client orders, and handle online payments. Built with Vite as the bundler, this project integrates a React frontend and a Node.js + Express backend, along with MongoDB for data storage. Stripe is used for payment processing, and Multer for handling image uploads.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [API Routes](#api-routes)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Order Management**: Place, update, and track catering orders.
- **Payment Integration**: Secure payment handling through Stripe.
- **Image Upload**: Upload and manage images of catering menus and dishes using Multer.
- **Real-time Updates**: Track orders and statuses in real-time.
- **User Authentication**: Secure user sign-up, login, and session management.
- **Admin Panel**: Manage orders, payments, and user inquiries.

## Tech Stack

- **Frontend**: React, Vite
- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Payment Gateway**: Stripe
- **File Upload**: Multer
- **Bundler**: Vite

## Installation

### Prerequisites

- Node.js (>=14)
- MongoDB

### Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/your-username/catering-services.git
   cd catering-services
2. Install Dependencies
   -npm install
3.Set up environment variables
-MONGODB_URI=your_mongodb_connection_string
-STRIPE_SECRET_KEY=your_stripe_secret_key
-PORT=5000
Usage
Running the Project Locally
1. Make sure MongoDB is running.
2. Open two terminals: one for the backend (npm run server) and one for the frontend (npm run start).
3. Navigate to http://localhost:3000 to view the application.
**API Routes**
**User Routes**
1. POST /api/auth/register - Register a new user
2. POST /api/auth/login - User login
3. GET /api/auth/logout - User logout
**Order Routes**
1. POST /api/orders - Place a new order
2. GET /api/orders/:userId - Get orders for a specific user
3. PATCH /api/orders/:orderId - Update order status
**Payment Routes**
1. POST /api/payments - Process a payment with Stripe
2. Image Upload Routes
3. POST /api/upload - Upload a new image (uses Multer middleware)

This README provides a comprehensive overview of the project, including features, setup instructions, usage details, and API routes. You can customize it with your GitHub username, license details, or any additional features specific to your project.
