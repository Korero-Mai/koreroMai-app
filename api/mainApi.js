const express = require("express");
const route = express.Router();


module.exports = function(db) {

  route.get("/", get);
  route.post("/", post);

  function get(req, res, next) {
    res.json({ data: [ "my", "data" ] });
    // db.get()
  }

  function post(req, res, next) {}

  return route;
};
