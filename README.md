# HerHustle

[Project Homepage](https://devfolio.co/projects/herhustle-ce6f)
<div align="center">
  <img height="300" src=""  />
</div>

HerHustle is a web platform designed for professional networking, collaboration, and community engagement. Built primarily with TypeScript and featuring both backend and frontend components, it offers a LinkedIn-like experience tailored for empowering users to connect, share, and grow their careers.

## Features

- **Authentication & User Management:**
  - Sign up, login, and Google OAuth.
  - Email verification, password reset, and profile management (profile/cover photo, bio, work info).

- **Feed & Posts:**
  - Create, edit, and delete posts (with images).
  - Like and comment on posts.
  - Notification system for new posts and interactions.

- **Networking:**
  - Manage professional connections.
  - Send, receive, and track connection invitations.
  - View suggestions for new connections.

- **Messaging:**
  - Real-time messaging interface.
  - Create and manage conversations with connections.

## Technologies Used

- **Frontend:** TypeScript, React, SCSS modules
- **Backend:** Java (Spring Boot)
- **Other:** WebSockets (for real-time features), REST APIs

## Project Structure

- `frontend/` — React/TypeScript SPA for user interface.
- `backend/` — Java Spring Boot REST API server.

## Getting Started

### Prerequisites

- Node.js & npm (for frontend)
- Java & Maven/Gradle (for backend)

### Setup

#### Frontend

1. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the development server:
    ```bash
    npm run dev
    ```

#### Backend

1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2. Build and run the Spring Boot application using your preferred tool:
    ```bash
    ./mvnw spring-boot:run
    ```
    or
    ```bash
    ./gradlew bootRun
    ```

### Environment Variables

- Configure OAuth credentials and other secrets in your `.env` or `application.properties` files as required (see backend code for required properties like `oauth.google.client.id`).

## Contributing

Feel free to fork, open issues, or submit pull requests to contribute!

## License

This project currently does not specify a license. Please contact the repository owner for more details.

---
Built with ❤️ by [NINJAHATTORI004](https://github.com/NINJAHATTORI004)
