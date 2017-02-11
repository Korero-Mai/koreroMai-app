const express = require("express");
const route = express.Router();


module.exports = function(db) {

  route.get('/', get)

  function get(req, res, next) {
    res.json({users: []})
  }

  return route;
};
