# Online Grocery Web App System
This project is an online grocery store system built using the MERN stack (MongoDB, Express.js, React, Node.js). The application allows users to browse products, add items to their cart, and manage their orders seamlessly.

## Table of Contents
  - Getting Started
  - Available Scripts
  - Features
  - Technologies Used
  - Project Structure
  - API Integration
  - Styling
  - Testing
  - Deployment
  - Learn More
  - Support  
  - Authors
  - Team Members

## Getting Started
To get started with the project, clone the repository and install the necessary dependencies:

**Open In Editor**

    git clone (https://github.com/KiruthigaE-16/Grocery-Web-App-Naan-Mudhalvan)
    cd online-grocery-web-app
    
## Prerequisites
Make sure you have the following installed:

  - [Node.js](https://nodejs.org/en/download/package-manager) (v14 or later)
  - [MongoDB](https://www.mongodb.com/try/download/community) (or use a cloud service like [MongoDB Atlas](https://www.mongodb.com/products/platform/atlas-database))
  - [npm](https://docs.npmjs.com/getting-started) (comes with Node.js)
    
## Running the Application
This project consists of both a client (React) and a server (Node.js/Express). Follow these steps to run the application:

### 1. Start the Server:

Navigate to the server directory and install dependencies:


*Open In Editor*

    1. cd server
    2. npm install
Create a .env file in the server directory to store environment variables. Here’s an example:

**Open In Editor**

    PORT=5000
    MONGODB_URI=mongodb://localhost:27017/grocery-store
    JWT_SECRET=your_jwt_secret
Then, start the server:

**Open In Editor**

    npm start
The server will run on http://localhost:5000.

### 2.  Start the Client:

Open a new terminal, navigate back to the client directory, and install dependencies:

**Open In Editor**

    cd client
    npm install
Then, start the client:

Open In Editor

    npm start
The client will run on http://localhost:3000.

## Available Scripts
In the client directory, you can run:

1.  `npm start`
    -  Runs the app in development mode.
    -  Open http://localhost:3000 to view it in your browser.

2.  `npm test`
    -  Launches the test runner in interactive watch mode.

3.  `npm run build`
    -  Builds the app for production to the `build` folder.
  
4.  `npm run eject`
    -  **Note:** This is a one-way operation. Once you eject, you can't go back!
      
In the server directory, you can run:

1.  `npm start`
    -  Starts the Express server.
      
## Features

-  **User Registration and Login:** Users can create accounts and log in to access their profiles.
-  **Product Browsing:** Users can browse through a wide range of grocery items with filtering and sorting options.
-  **Shopping Cart:** Users can add items to their cart, view the cart, and update item quantities.
-  **Checkout Process:** A streamlined checkout process with order summary and payment options.
-  **Order History:** Users can view their past orders and track current orders.
-  **Responsive Design:** The application is designed to work on both mobile and desktop devices.
-  **Admin Dashboard:** Admin users can manage products, view orders, and handle user accounts.

## Technologies Used

-  **MongoDB:** NoSQL database for storing product and user data. [MongoDB Documentation](https://www.mongodb.com/docs/)
-  **Express.js:** Web framework for Node.js to build the server. [Express.js Documentation](https://expressjs.com/)
-  **React:** JavaScript library for building user interfaces. [React Documentation](https://legacy.reactjs.org/docs/getting-started.html)
-  **Node.js:** JavaScript runtime for building the server-side application. [Node.js Documentation](https://nodejs.org/docs/latest/api/)
-  **Redux:** State management for React applications. [Redux Documentation](https://redux.js.org/introduction/getting-started)
-  **Axios:** For making API requests. [Axios](https://axios-http.com/docs/intro)

  ## Project Structure

 Here’s a brief overview of the project structure:

    online-grocery-web-app/
        ├── public/
        │     ├── index.html
        │     └── favicon.ico
        │   ├── pages/            # Page components
        │   ├── redux/            # Redux store and slices
        │   ├── styles/           # CSS/SCSS files
        │   ├── App.js            # Main application component
        │   └── index.js          # Entry point
        ├── package.json
        └── README.md

## API Integration

The application integrates with a backend API to fetch product data, manage user authentication, and handle orders. The API endpoints include:

-  GET /api/products: Fetch all grocery products.
-  POST /api/users/register: Register a new user.
-  POST /api/users/login: Authenticate a user.
-  POST /api/orders: Create a new order.
  
For more details on the API, refer to the [API Documentation](https://docs.oracle.com/en/cloud/paas/content-cloud/rest-api-documents/index.html).

## Styling
The application uses CSS/SCSS for styling. You can find the styles in the `src/styles` directory. The design is responsive and adapts to different screen sizes.

## Testing
Testing is an essential part of the development process to ensure that your application functions as expected. In this project, you can use various testing frameworks and libraries to test both the client and server sides.

### 1.  Client-Side Testing
For the React client, you can use the built-in testing library that comes with Create React App, which is based on Jest.

**Running Tests:**

To run the tests for the `client` application, navigate to the client directory and run:

    1.  cd client
    2.  np m test

This command will start the test runner in interactive watch mode. You can write tests for your components, reducers, and actions using Jest and React Testing Library.

### Server-Side Testing

For the Node.js/Express server, you can use testing frameworks like Mocha, Chai, or Jest.

**Example of Running Tests:**

1.  Install the testing libraries in the `server` directory:

        1.  cd server
        2.  npm install --save-dev mocha chai
    
3.  Create a test directory and write your test cases.
4.  Run the tests using:

        npx mocha
    
### End-to-End Testing

For end-to-end testing, you can use tools like Cypress or Selenium to simulate user interactions and test the entire application flow.

## Deployment

Deploying your application makes it accessible to users. You can deploy both the client and server components separately or together.

### Deploying the Server with MongoDB

You can deploy the server to platforms like Heroku, DigitalOcean, or AWS. Here’s a brief overview of deploying to Heroku with MongoDB:

**1.  Create a Heroku Account:** Sign up at [Heroku](https://www.heroku.com/).\
**2.  Install the Heroku CLI:** Follow the instructions on the [Heroku CLI documentation](https://devcenter.heroku.com/articles/heroku-cli).\
**3.  Login to Heroku:** Run the following command in your terminal:

      heroku login
    
**4.  Create a New Heroku App:**

      heroku create your-app-name
    
**5.  Add MongoDB Add-on:** You can use a MongoDB service like MongoDB Atlas or the mLab add-on for Heroku. To add the mLab add-on, run:

      heroku addons:create mongolab
      
If you are using MongoDB Atlas, you will need to create a cluster and get the connection string.

**6.  Set Environment Variables:** Set your MongoDB connection string as an environment variable. If you are using mLab, you can do this automatically. If you are using MongoDB Atlas, run:

      heroku config:set MONGODB_URI="your_mongodb_connection_string"
      
**7.  Deploy Your Code:**

      git push heroku main
**9.  Run Migrations (if applicable):** If your application requires database migrations, run them using:

      heroku run npm run migrate
      
**10.  Open Your App:** Once deployed, you can open your app in the browser:

      heroku open
      
### Deploying the Client

You can deploy the React client to platforms like Vercel, Netlify, or GitHub Pages. Here’s how to deploy to Vercel:

**1.  Create a Vercel Account:** Sign up at [Vercel](https://vercel.com/).\
**2.  Install Vercel CLI:**

      npm install -g vercel
      
**3.  Deploy Your Application:**

      1.  cd client
      2.  vercel
      
Follow the prompts to complete the deployment.

## Learn More

For more information about the technologies used in this project, you can refer to the following resources:

1.  [MongoDB Documentation](https://www.mongodb.com/docs/)
2.  [Express.js Documentation](https://expressjs.com/)
3.  [React Documentation](https://legacy.reactjs.org/docs/getting-started.html)
4.  [Node.js Documentation](https://nodejs.org/docs/latest/api/)
5.  [Redux Documentation](https://redux.js.org/introduction/getting-started)
6.  [Axios Documentation](https://axios-http.com/docs/intro)

## Support

If you encounter any issues or have questions about the project, feel free to reach out for support.

-  [Kiruthiga E](https://github.com/KiruthigaE-16/)
-  Email: kiruthigae.cse2021@dscet.ac

## Authors

-  [@Anish Fathima S] - [GitHub](https://github.com/AnishS-21/)

## Team Members

  **1.  [Kiruthiga E](https://github.com/KiruthigaE-16/)**\
  **2.  [Anish Fathima S](https://github.com/AnishS-21/)**\
  **3.  [Komala B](https://github.com/KomalaB-14/)**\
  **4.  [Manjushree V](https://github.com/Manjushree8/)**\
  **5.  [Karthiga P](https://github.com/Karthiga0121/)**
