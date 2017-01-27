const express = require("express");
const route = express.Router();

module.exports = function(db) {

  route.get("/users", getUsers);
  route.post("/users", postNewUser);
  route.get("/nights", getNights);
  route.get("/users_nights", getUsersNights);
  route.post("/", post);

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
    console.log('post req.body: ',req.body.newUserData)
    db.addUser('users',req.body.newUserData)

  }

  function post(req, res, next) {}

  return route;
};
