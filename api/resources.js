// const bcrypt = require('bcryptjs') //for auth and password hash
const express = require("express");
const route = express.Router();
const bcrypt = require('bcryptjs')


module.exports = function(db) {

  // route.get('/users', users); //gets all the users
  route.post('/register', postNewUser)

  function users(req, res, next) {
    db.findAll('users')
      .then((users) => {
        res.json(users)
      })
  }

  function postNewUser(req, res, next) {
    console.log(req.body);
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
        req.body.password = hash
        db.addUser('users', req.body)
        .then((user) => {
          console.log('this is the console', users);
          res.json(user)
        })
      });
    });
  }

  return route;
};
