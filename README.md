# Full-Stack Application

## Overview
This is a full-stack application built using:
- **Frontend:** HTML, CSS, JavaScript, React.js
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase
- **Deployment:** Render, Vercel

## Features
- User authentication
- CRUD operations
- Responsive UI
- RESTful API

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Contributing](#contributing)
- [License](#license)

## Installation
### Prerequisites
- Node.js and npm installed
- MongoDB installed and running
- Firebase project set up

### Backend Setup
1. Clone the repository:
    ```sh
    git clone https://github.com/jcsgirish/TwitterApplication.git
    cd TwitterApplication/backend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the `backend` directory and add the following environment variables:
    ```env
    DATABASE_URL=mongodb://localhost:27017/your-database
    JWT_SECRET=your-jwt-secret
    FIREBASE_API_KEY=your-firebase-api-key
    FIREBASE_AUTH_DOMAIN=your-firebase-auth-domain
    FIREBASE_PROJECT_ID=your-firebase-project-id
    ```

4. Start the backend server:
    ```sh
    npm start
    ```

### Frontend Setup
1. Navigate to the `frontend` directory:
    ```sh
    cd/frontend
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the `frontend` directory and add the following environment variable:
    ```env
    REACT_APP_API_URL=http://localhost:5000
    ```

4. Start the frontend development server:
    ```sh
    npm start
    ```

## Usage
After setting up the project, you can access the frontend at `http://localhost:3000` and the backend API at `http://localhost:5000`.


## Environment Variables
### Backend
- `DATABASE_URL`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT authentication
- `FIREBASE_API_KEY`: Firebase API key
- `FIREBASE_AUTH_DOMAIN`: Firebase Auth domain
- `FIREBASE_PROJECT_ID`: Firebase project ID

### Frontend
- `REACT_APP_API_URL`: URL of the backend API

## Scripts
### Backend
- `start`: Start the backend server
- `dev`: Start the backend server with nodemon for development

### Frontend
- `start`: Start the frontend development server
- `build`: Build the frontend for production
- `test`: Run tests

## Dependencies
### Backend
- `express`: Fast, unopinionated, minimalist web framework for Node.js
- `mongoose`: MongoDB object modeling tool designed to work in an asynchronous environment
- `firebase-admin`: Firebase Admin SDK

### Frontend
- `react`: A JavaScript library for building user interfaces
- `axios`: Promise-based HTTP client for the browser and node.js
- `firebase`: Firebase JavaScript SDK

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some feature'`)
5. Push to the branch (`git push origin feature-branch`)
6. Open a pull request

## License
This project is Nullclass Certified.

