const express = require('express');
const router = require('./routes/posts')
const Sequelize = require('sequelize');

const app = express();
const PORT = 3000;

app.listen(3000, () => {
    console.log(`Blog app server listening on port ${3000}!`);
});