 
 #Microservices-Backend-Development-Task

cd users
 npm install

cd posts
 npm install

cd gateway
 npm install

Start the Services using npm run dev 
 
Users Service Endpoints:
  1. Get All Users
       Endpoint: GET /users
       Example Request: GET http://localhost:4000/users
  
  3. Create User
       Endpoint: POST /users/signup
       Example Request: POST http://localhost:4000/users/signup
       Request Body: JSON object containing post data (username, email, password).
  
  3. Get User by ID
    Endpoint: GET /users/:userId
    Example Request: GET http://localhost:4000/users/123
  
  4. Update User by ID
    Endpoint: PUT /users/:userId
    Example Request: PUT http://localhost:4000/users/123
    Request Body: JSON object containing post data (username, email, password).
  
  5. Delete User by ID
    Endpoint: DELETE /users/:userId
    Example Request: DELETE http://localhost:4000/users/123

Posts Service Endpoints:

  1. Create Post
    Endpoint: POST /posts
    Example Request: POST http://localhost:4000/posts
    Request Body: JSON object containing post data (userId, content).
  
  2. Get Post by ID
    Endpoint: GET /posts/:postId
    Example Request: GET http://localhost:4000/posts/456
  
  3. Update Post by ID
    Endpoint: PUT /posts/:postId
    Example Request: PUT http://localhost:4000/posts/456
    Request Body: Request Body: JSON object containing post data (content).
  
  4. Delete Post by ID
    Endpoint: DELETE /posts/:postId
    Example Request: DELETE http://localhost:4000/posts/456
  
  5. Get All Posts by User
    Endpoint: GET /posts/user/:userId
    Example Request: GET http://localhost:4000/posts/user/123

Error Handling:

  Middleware: 
   1. errorMiddleware.js:
      Centralizes error handling logic, catching errors thrown by route handlers.
      Sets appropriate HTTP status codes and generates JSON responses with error details, including stack traces for debugging.
      Handles various error types, such as "CastError," often encountered with invalid MongoDB IDs.

   2. catchAsyncErrors.js:
        Wraps route handler functions with a promise to catch any errors that occur during their execution.
        Redirects errors to the global error handling middleware, ensuring consistent error responses.
    
  
  Custom Error Class: 
   1. ErrorHandler:
      Simplifies error creation with custom messages and status codes.
      Extends the built-in Error class, capturing stack traces for debugging.


PostgreSQL Database Setup for User Management:

  1. Create a Database:
    Inside the PostgreSQL shell, create a new database named "users":
  
  2. Create a Users Table:
      Create a table named "users" with columns id, username, email, and password:
      CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        username VARCHAR(255),
        email VARCHAR(255),
        password VARCHAR(255)
      );

  3. Configuration:
      To use this database in your Node.js application, configure the database connection settings. Update the username, password, host, and port in your application code to match your local environment.    
 





 
