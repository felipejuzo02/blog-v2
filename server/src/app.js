const express = require('express');
const cors = require('cors');

const authors = require('./routes/authors');
const categories = require('./routes/categories');

const app = express();

app.use(express.json());
app.use(cors());

// ROUTES
app.use(authors);
app.use(categories);

module.exports = app;