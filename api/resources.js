// const bcrypt = require('bcryptjs') //for auth and password hash
const express = require("express");
const route = express.Router();


module.exports = function(db) {

  route.get('/users', users); //gets all the users

  function users(req, res, next) {
    db.findAll('users')
      .then((users) => {
        res.json(users)
      })
  }

  return route;
};
