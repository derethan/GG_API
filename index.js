// API To handle communication between the Node.js server and the Arduino

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser.json());

//Import cors and tell the app to use it
const cors = require('cors');
app.use(cors());

// Import route handlers
const userRoutes = require('./routes/userRoutes');
const sensorRoutes = require('./routes/sensorRoutes.js');

//Define Middleware and Routes
app.use(express.json());
app.use('/users', userRoutes);
app.use('/sensors', sensorRoutes);

// Configure dotenv
const dotenv = require('dotenv');
dotenv.config({ path: './.env' });

// Start the server
const port = 3000;
const host = '127.0.0.1';
app.listen(port, host);
console.log(`Listening at http://${host}:${port}`);