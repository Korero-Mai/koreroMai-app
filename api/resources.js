const bcrypt = require('bcryptjs')
const express = require("express");
const route = express.Router();


module.exports = function(db) {

  route.get("/users", getUsers);
  route.post("/users", postNewUser);
  route.get("/nights", getNights);
  route.get("/users_nights", getUsersNights);
  route.post("/", post);
  route.get("/admin", getAdmin)
  route.post("/users", postNewUser);
  route.post("/users/register", confirmUniqueEmail)
  route.post('/users/login', login)


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

  function getAdmin(req, res, next) {
    db.countNightsByUser()
      .then((count) => {
        res.json(count)
      })
  }

  function postNewUser(req, res, next){

    const password = req.body.newUserData.password
    bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(password, salt, function(err, hash) {
        req.body.newUserData.password = hash
        db.addUser('users',req.body.newUserData)
          .then((user)=>{
            res.json(user)
          })
      })
    })
  }

  function login(req, res, next) {
    const email = req.body.email
    const entered_password = req.body.password
    db.findUserByEmail(email)
    .then(user => {
      const { name, id, password } = user[0]
      if (!user[0]) {
        res.json({error: 'Invalid Email/password'})
      } else {
        bcrypt.compare(entered_password, password, function(err, response) {
          if (response) {
            req.session.userId = id
            req.session.userName = name
            res.json({id: id, login: true})
          } else {
            res.json({login: false, error: 'Invalid email/Password'})
          }
        });
      }
    })
  }

  function confirmUniqueEmail(req, res, next){
    db.findUserByEmail(req.body.email)
      .then(users => {
        const isEmailUnique = users.length
          ? true
          : false
        res.json(isEmailUnique)
      })
  }

  function post (req, res, next) {}




  return route;
};
