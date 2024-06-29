# Hello all

This is the updated code for the Mastering Backend Nodejs alpha-cohort-2, as per 08/06/24 class.

Read below guidelines to follow the separation of concerns:

1. Create utils folder on the root of the project

   - Add .env file at the root of the project. Inside add your server port number e.g PORT=5000, and your database connection string.

   - Add a config.js file. (Make sure to have dotenv package installed)
   - Add a logger.js file // This is for console.log/error easily

2. Create a db folder and inside add mongoDB.js, then proceed to add the logic as illustrated on the code to connect to the database.

3. Create an app.js file and add all the middleware inside as illustrated

4. Create a server.js file and listen for the port and MongoDB database

5. Create a model folder and add user.model.js file, then proceed to add the schema as illustrated on the code.

6. Create a controllers folder and add user.controller.js, then proceed to add the logic to register a new user as illustrated on the code.

7. Create a routes folder at the root of the project and add index.js file and user.routes.js file respectively. Then proceed to add the logic as illustrated on the code.

8. Start your server and test the endpoint to create a new user.

Thank you for reading this guide.

Happy Coding!
