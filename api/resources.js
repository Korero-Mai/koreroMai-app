const express = require("express")
const route = express.Router()
const bcrypt = require('bcryptjs')


module.exports = function(db) {

  route.get("/users", getUsers);
  route.get("/nights", getNights);
  route.get("/users_nights", getUsersNights);
  route.post("/", post);
  route.post("/users", postNewUser);
  route.post('/users/login', login)

  function login(req,res, next) {
    const email = req.body.email
  }

  function getUsers(req, res, next) {
    db.findAll('users')
      .then((users) => {
        res.json(users)
      })
  }

  function getNights(req, res, next) {
    db.findAll('nights')
      .then((nights) => {
        res.json(nights)
      })
  }

  function getUsersNights(req, res, next) {
    db.findAll('users_nights')
      .then((users_nights) => {
        res.json(users_nights)
      })
  }

  function postNewUser(req, res, next){
    const password = req.body.newUserData.password
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, function(err, hash) {
        req.body.newUserData.password = hash
        db.addUser('users',req.body.newUserData)
          .then((user)=>{
            console.log('user in resource.js', user);
            res.json(user)
          })
      })
    })

  }

  function post (req, res, next) {}




  return route;
};
