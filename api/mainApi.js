const express = require("express");
const route = express.Router();

module.exports = function(db) {

  route.get("/", get);
  route.post("/", post);

  function get(req, res, next) {
    db.findAll('users')
      .then((users) => {
        res.json(users)
      })
    // db.get()
  }

  function post(req, res, next) {}

  return route;
};
