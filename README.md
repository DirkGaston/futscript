# FutScript

![GitHub repo size](https://img.shields.io/github/repo-size/DirkGaston/futscript)
![GitHub stars](https://img.shields.io/github/stars/DirkGaston/futscript?style=social)
![GitHub forks](https://img.shields.io/github/forks/DirkGaston/futscript?style=social)
![Twitter Follow](https://img.shields.io/twitter/follow/DirkGrave?style=social)

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?logo=javascript&logoColor=%23F7DF1E&style=for-the-badge)
![NPM ](https://img.shields.io/badge/NPM-%23000000.svg?logo=npm&logoColor=white&style=for-the-badge)
![Node.js ](https://img.shields.io/badge/node.js-6DA55F?logo=node.js&logoColor=white&style=for-the-badge)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?logo=express&logoColor=%2361DAFB&style=for-the-badge)

**FutScript** is a football team management system.

_This project was developed as one of the **Practical Work** assignments in the **Backend with Node and Express** course for Desafio LATAM's **Full Stack with JavaScript** bootcamp_

## Assignment Background 📖

FutScript is a project initiated by 5 programming enthusiasts that aims to create an administration system for the different soccer schools in the city.

In this assignment you will have to continue the development of an Express application based on the proposed theme, adding what is necessary to meet the requirements.

Development of this REST API should continue by adding:

● A POST /login route that expects to receive in the payload the credentials of an admin user.
○ The only admin user is the following:

{
"username": "admin",
"password": "1234"
}

In case of successful reception of these credentials you should answer the query with JWT

● In the 2 POST routes of the REST API to register new teams and players, a middleware must be added to obtain and validate a token located in the query headers.
of the query

● In the 2 GET Routes:

○ /equipos
Team records should be returned following the following example structure:

[
{
"id": 7,
"name": "Real Madrid"
},
{
"id": 8,
"name": "Barcelona"
},
]

○ /equipos/:teamID/jugadores.
The following example structure should be returned:
[
{
"name": "Karim Benzema",
"position": "striker"
},
{
"name": "Luka Modrić",
"position": "midfielder".
}
]

To achieve this you will need to perform a SQL query with INNER JOIN.

## Tools 🛠️

**FutScript** has been built using:

- [Node.JS](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Jest](https://jestjs.io/)

## Dependencies 🚧

Used dependencies include:

- [Jest](https://www.npmjs.com/package/jest) - JavaScript Testing Framework.
- [Supertest](https://www.npmjs.com/package/supertest) - Node.js testing library for HTTP APIs
- [JSONWebToken](https://www.npmjs.com/package/jsonwebtoken) - An implementation of JSON Web Tokens.
- [JWT Simple](https://www.npmjs.com/package/jwt-simple) - JWT(JSON Web Token) encode and decode module for node.js.
- [Dotenv](https://www.npmjs.com/package/dotenv) - Zero-dependency module to manage environment variables.
- [PG](https://www.npmjs.com/package/pg) - PostgreSQL client for Node.js

## Contact 📫

If you want to contact me you can reach me at <dirkgaston87@gmail.com>.
