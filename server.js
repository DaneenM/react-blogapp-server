const express = require("express");
const { Sequelize } = require("sequelize");
const sequelize = new Sequelize("postgres://postgres@localhost:5432/blog_app");
const cors = require("cors");
const { Post } = require("./models");
const ejs = require("ejs");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.set("view engine", "ejs");

//Create a post
app.post("/posts", (req, res) => {
  Post.create(req.body.title);
  Post.create(req.body.body)
    .then((title) => res.json(title))
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json(err));
});

//Get all posts
app.get("/posts", (req, res) => {
  Post.findAll()
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json(err));
});

//Update a post
app.put("/posts/:id", (req, res) => {
  Post.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json(err));
});

//Delete a post
app.delete("/posts/:id", (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json(err));
});

app.listen(3000, () => {
  console.log(`Blog app server listening on port ${3000}!`);
});
