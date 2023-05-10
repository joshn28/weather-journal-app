// Empty JS object to act as endpoint for all routes
const projectData = {};

// Express to run server and routes
const express = require('express');

// Start up an instance of app
const app = express();

// Dependencies
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

// Initializing the main project folder
app.use(express.static('website'));

const port = 3000;

const server = app.listen(port, listening);

function listening() {
    console.log(`Running server on port ${port}`);
}

app.get('/all', (req, res) => {
    res.send(projectData);
});