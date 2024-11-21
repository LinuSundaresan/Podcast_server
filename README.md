# Podcast_server

This is a **Node.js** and **Express** backend for managing a podcast application. It provides RESTful APIs for handling podcast-related data, user management, and authentication.

## Features

- **CRUD Operations** for:
  - Podcast Speakers
  - Topics/Categories
  - Podcasts
  - Users
- **User Favorites:**
  - Add and manage favorite Topics, Podcasts, and Speakers.
- **Authentication:**
  - User Signup and Login
  - Admin Login
- **Role-Based Access:** Admin and User roles for different privileges.

## Prerequisites

- **Node.js**: v14 or higher
- **MongoDB**: v4.4 or higher
- **Postman** (Optional): For testing APIs
- **npm**: v6 or higher

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/podcast-server.git
   cd podcast-server


 ## Install dependencies:

npm install

Set up environment variables: Create a .env file in the project root and configure:

PORT=5000
MONGO_URI=mongodb://localhost:27017/podcastDB
JWT_SECRET=your_jwt_secret

Start the server:

    npm start

API Documentation
1. Podcast Speakers

    Create a Speaker: POST /api/speakers
    Get All Speakers: GET /api/speakers
    Get a Speaker by ID: GET /api/speakers/:id
    Update a Speaker: PUT /api/speakers/:id
    Delete a Speaker: DELETE /api/speakers/:id

2. Topics/Categories

    Create a Topic: POST /api/topics
    Get All Topics: GET /api/topics
    Get a Topic by ID: GET /api/topics/:id
    Update a Topic: PUT /api/topics/:id
    Delete a Topic: DELETE /api/topics/:id

3. Podcasts

    Create a Podcast: POST /api/podcasts
    Get All Podcasts: GET /api/podcasts
    Get a Podcast by ID: GET /api/podcasts/:id
    Update a Podcast: PUT /api/podcasts/:id
    Delete a Podcast: DELETE /api/podcasts/:id

4. Users

    Create a User: POST /api/users
    Get All Users: GET /api/users
    Get a User by ID: GET /api/users/:id
    Update a User: PUT /api/users/:id
    Delete a User: DELETE /api/users/:id

5. User Favorites

    Add Favorite Topic: POST /api/users/:id/favorites/topics
    Add Favorite Podcast: POST /api/users/:id/favorites/podcasts
    Add Favorite Speaker: POST /api/users/:id/favorites/speakers
    Get User Favorites: GET /api/users/:id/favorites

6. Authentication

    User Signup: POST /api/auth/signup
    User Login: POST /api/auth/login
    Admin Login: POST /api/auth/admin/login

Roles and Access
API	Access	Description
All CRUD APIs	Admin, User	Admin has full access
Favorites APIs	User	Manage user favorites
Authentication APIs	Public	Login and Signup
Folder Structure

podcast-server/
│
├── models/                 # Mongoose schemas
│   ├── Podcast.js
│   ├── Speaker.js
│   ├── Topic.js
│   ├── User.js
│
├── routes/                 # API routes
│   ├── authRoutes.js
│   ├── podcastRoutes.js
│   ├── speakerRoutes.js
│   ├── topicRoutes.js
│   ├── userRoutes.js
│
├── controllers/            # Controller logic
│   ├── authController.js
│   ├── podcastController.js
│   ├── speakerController.js
│   ├── topicController.js
│   ├── userController.js
│
├── middleware/             # Middleware
│   ├── authMiddleware.js   # JWT-based authentication
│
├── config/                 # Configuration files
│   ├── db.js               # MongoDB connection
│
├── .env                    # Environment variables
├── server.js               # Main server entry point
└── README.md               # Project documentation

Tools & Technologies

    Backend: Node.js, Express.js
    Database: MongoDB
    Authentication: JWT
    Libraries:
        bcrypt for password hashing
        jsonwebtoken for JWT-based authentication
        mongoose for MongoDB object modeling
        multer for file uploads (if needed)

Future Enhancements

    Add podcast audio file uploads and streaming.
    Implement a recommendation system for users based on their favorites.
    Add search and filtering options for podcasts and speakers.
    Develop analytics for admin to track user engagement.

Contributing

Feel free to fork this repository and contribute to the project. Please submit a pull request with detailed changes.
License

This project is licensed under the MIT License. See the LICENSE file for details.

