# Backend API Development

A simple REST API built using Node.js and Express.js.

## Project Overview

This project demonstrates the basic concepts of backend development and REST API creation. It implements CRUD (Create, Read, Update, Delete) operations for managing user data and was tested using Postman.

## Features

* Get all users
* Get a user by ID
* Create a new user
* Update an existing user
* Delete a user
* Request validation
* JSON response handling

## Technologies Used

* Node.js
* Express.js
* Postman

## API Endpoints

### Get All Users

GET /users

### Get User By ID

GET /users/:id

### Create User

POST /users

### Update User

PUT /users/:id

### Delete User

DELETE /users/:id

## Installation

1. Clone the repository

```bash
git clone <repository-url>
```

2. Install dependencies

```bash
npm install
```

3. Run the server

```bash
node server.js
```

## Server

The server runs on:

```text
http://localhost:3000
```

## Learning Outcomes

This project helped in understanding:

* REST API development
* HTTP methods (GET, POST, PUT, DELETE)
* Express.js routing
* Middleware usage
* Request and response handling
* API testing using Postman
