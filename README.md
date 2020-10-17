# Password Sign-in Function Practice
A simple website with password sign-in function built by Express and MongoDB

## Features
* Sign in with email and password, and check if the data exists in user database
* If success, show welcome page
* If failed,  redirect to login page and show alerts

## Prerequisite
* Node.js: v10.15.0
* npm: 6.4.1
* nodemon: 2.0.4
* express: 4.17.1
* express-handlebars: 5.1.0
* express-session: 1.17.1
* body-parser: 1.19.0
* mongoDB: 4.2.9
* robo 3T: 1.4.1
* mongoose: 5.10.7

## Installation
1. Enter ` https://github.com/Kaikai8888/sign-in-function-practice.git ` in the terminal to download the project folder
2. Use robo 3T to manipulate mongoDB, create connection to `localhost: 27017`, and create the database,`password`
3. Enter `npm run seed` in the terminal to to run seeder.js with nodemon and create seed data
4. Enter `npm run dev` in the terminal to run app.js with nodemon to set up database connection and start local server 
5. Enter http://localhost:3000 in the brower and enter the website

