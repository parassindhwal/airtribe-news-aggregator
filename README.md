# Airtribe News Aggregation API


This project implements a secure and user-friendly news recommendation system using Node.js, Express.js. It offers:

- *Registration and login*: Secure user authentication with bcrypt for password hashing and JWT for token-based authentication.

- *Space news*: API used here will give the lastest news regarding the space.

- *RESTful API*: Endpoints for user registration, login, preference management, and personalized news retrieval.
*Robust error handling*: Catches and gracefully handles invalid requests, authentication errors, and authorization errors.

- *JOI*: Streamlined input validation, reducing errors and improving data integrity.

- *Modular Code*: Organized project structure for easy collaboration and future enhancements.
MongoDB and mongoose: Efficient data storage and retrieval for user preferences.
dotenv and .env: Securely storing environment variables, improving configuration management.
Testing and Evaluation:

The API is thoroughly tested using Postman or Curl to ensure functionality, correctness, and resilience.
User feedback and performance analysis are used for continuous improvement.

### Prerequistes:
- NodeJS (v20 or newer)

### Installation:
- `npm install` - This will install all the dependencies of the application.
- create `.env` file in your project directory
- `node app.js` - This will start the application on port 3000.
#### Note:
- I have already commited the .env which is not something we do in production application
  
### Running Tests:
- `npm test` 

### Routes:
- `POST` **/register**: Register a new user.
- `POST` **/login**: Log in a user.
- `GET` **/preferences**: Retrieve the news preferences for the logged-in user.
- `PUT` **/preferences**: Update the news preferences for the logged-in user.
- `GET` **/news**: Fetch news articles based on the logged-in user's preferences.

### Example `.env`:
```text
JWT_SECRET="qwerty"
NEW_API_URL="https://api.spaceflightnewsapi.net/v4/articles/"
DB_URI_PROD="mongodb://localhost:27017/newsdb"
DB_URI_TEST="mongodb://localhost:27017/testnewsdb"
NODE_ENV='development'
```
