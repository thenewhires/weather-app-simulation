# Running the Weather App Locally

## Backend (Java Spring Boot)

1.  Ensure you have Java Development Kit (JDK) 17 or higher installed.
2.  Ensure you have Maven installed.
3.  Navigate to the `backend` directory.
4.  Run the following command to build and run the application:
    ```bash
    mvn spring-boot:run
    ```
    The backend server will start on port 8080.

## Frontend (React)

1.  Ensure you have Node.js and npm installed.
2.  Navigate to the `frontend` directory.
3.  Install the dependencies:
    ```bash
    npm install
    ```
4.  Start the development server:
    ```bash
    npm start
    ```
    The frontend application will be available at `http://localhost:3000`.

## Important Notes

*   Make sure the backend server is running before starting the frontend application.
*   You need to set the API key in both the backend and frontend configurations.
* You may need to enable CORS on the backend if you encounter CORS issues.