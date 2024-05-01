# MERN Translators

## Description

"MERN Translators" is a full-stack application designed specifically for Sworn Translators. This application aims to provide a platform where translators can find new clients and manage the process of creating an order for document translation.

## Technology Stack

This project is built using the MERN stack, which includes:

- MongoDB: A source-available cross-platform document-oriented database program.
- Express.js: A back end web application framework for Node.js.
- React.js: A JavaScript library for building user interfaces.
- Node.js: A back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.

## Features

- User Registration and Authentication
- Profile Creation for Translators
- Search and Filter functionality for Clients to find suitable Translators
- Order Creation and Management
- Document Upload and Download functionality
- Real-time updates and notifications

## Installation

Clone the repository to your local machine and install dependencies using npm:

```bash
git clone https://github.com/lukasion/MERN-Translators.git
cd MERN-Translators
npm install
```
{
  "name": "server",
  "version": "1.0.0",
  "description": "Server for MERN Translators",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.17.1",
    "mongoose": "^5.12.3",
    "cors": "^2.8.5",
    "dotenv": "^8.2.0"
  }
}
## Usage

To start the server and client at the same time (from the root of the project):

```bash
npm start
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[MIT](https://choosealicense.com/licenses/mit/)