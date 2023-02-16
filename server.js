const express = require('express');
const router = require('./routes/posts')
const { Sequelize }= require('sequelize');

const app = express();

app.listen(3000, () => {
    console.log('Blog app server listening on port 3000!');
});