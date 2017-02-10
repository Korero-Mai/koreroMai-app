// const bcrypt = require('bcryptjs') //for auth and password hash
const express = require("express");
const route = express.Router();
const bcrypt = require('bcryptjs')


module.exports = function(db) {

  // route.get('/users', users); //gets all the users
  route.post('/register', postNewUser)
  route.post('/login', loginUser)

  function users(req, res, next) {
    db.findAll('users')
      .then((users) => {
        res.json(users)
      })
  }

  function postNewUser(req, res, next) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
        req.body.password = hash
        db.addUser('users', req.body)
        .then((user) => {
          res.json(user)
        })
      })
    })
  }

  function loginUser(req, res, next) {
    console.log('this is the req.body:',req.body.email);
    db.findUserByEmail('users', req.body.email)
    .then((dbData) => {
      console.log('this is the dbData fucntion:', dbData);
      if(!dbData) {
        return ('This does not exist')
      }
    })
  }

  return route;
};
