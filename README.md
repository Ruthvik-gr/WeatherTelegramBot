# Telegram Weather Bot

This project utilizes the **NestJS** framework and **React.js** to create a Telegram bot that delivers weather updates to users. The bot includes features like user subscriptions, an admin panel for managing settings and accounts, and **MongoDB** for storing user data. Weather data is fetched using the **OpenWeatherMap API**.
 
 
## Telegram Bot Link

You can interact with the Telegram bot [here](https://t.me/Ruthviks_weather_Bot).

## Features

- **User Subscription**: Allows users to subscribe to receive daily weather updates via Telegram.
- **Unsubscribe Option**: Users can unsubscribe at any time to stop receiving updates.
- **MongoDB Integration**: Secure storage of user subscription data using MongoDB.
- **Admin Panel**: Admin panel for managing bot settings (API keys, etc.) and user accounts (blocking, deleting, etc.).
- **OpenWeatherMap API**: Fetches accurate weather data using the OpenWeatherMap API.

---

## Setup

### Prerequisites

Ensure that the following are installed on your system:

- **Node.js** (v14.x or higher)
- **npm**
- **MongoDB** (local or cloud instance)

### Environment Configuration

Before starting the application, create a `.env` file in the root directory with the following keys:





- **TELEGRAM_BOT_TOKEN**: Telegram bot token from BotFather.
- **WEATHER_API_KEY**: API key from OpenWeatherMap.
- **CITY**: Default city for weather updates (e.g., "Bengaluru").
- **DATABASE_CONNECTION_STRING**: MongoDB connection string.

---

## Getting Started

### 1. Setting up the Backend

1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```

2. Install the required dependencies:
    ```bash
    npm install
    ```

3. Start the backend server:
    ```bash
    npm start
    ```

The backend server should now be running and serving the necessary APIs.

### 2. Setting up the Admin Panel

1. Navigate to the `adminPanel` directory:
    ```bash
    cd adminPanel
    ```

2. Install the required dependencies:
    ```bash
    npm install
    ```

3. Start the admin panel:
    ```bash
    npm start
    ```

The admin panel should now be running and accessible in your browser.

---