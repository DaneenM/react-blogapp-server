const express = require("express");
const router = express.Router();

//Create a post
router.post("/posts", (req, res) => {
  Post.create(req.body)
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json(err));
});

//Get all posts
router.get("/posts", (req, res) => {
  Post.findAll()
    .then((post) => res.json(posts))
    .catch((err) => res.status(400).json(err));
});

//Get a single post
router.get("/posts/:id", (req, res) => {
  Post.findByPk(req.params.id)
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json(err));
});

//Update a post
router.put("/posts/:id", (req, res) => {
  Post.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json(err));
});

//Delete a post
router.delete("/posts/:id", (req, res) => {
  Post.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((post) => res.json(post))
    .catch((err) => res.status(400).json(err));
});
