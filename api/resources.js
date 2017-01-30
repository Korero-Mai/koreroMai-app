const bcrypt = require('bcryptjs')
const express = require("express");
const route = express.Router();

module.exports = function(db) {

  route.get("/users", getUsers);
  route.get("/nights", getNights);
  route.get("/users_nights", getUsersNights);
  route.post("/", post);
  route.post("/users", postNewUser);
  route.post("/login", login);
  route.post("/register", confirmUniqueUserName)

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
    const { name, password } = req.body.newUserData
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        const formattedData = { name, hash }
        db.addUser('users', formattedData)
        .then((users)=>{
          res.json(users)
        })
      })
    })
  }

  function login(req, res, next){
    db.findWhereNameIs('users', req.body.name)
      .then(users => {
        if(users.length){
          bcrypt.compare(req.body.password, users[0].hash, (err, response) => {
            if(err) throw(err)
            if(response === true){
              res.json(users[0])
            }else{
              res.json(false)
            }
          })
        }
      })
  }

  function confirmUniqueUserName(req, res, next){
    console.log('req.body', req.body);
    db.findWhereNameIs('users', req.body.name)
      .then(users => {
        console.log('users and stuff', users);
        const isUserNameUnique = users.length
          ? true
          : false
        console.log(isUserNameUnique);
        res.json(isUserNameUnique)
      })
  }

  function post(req, res, next) {}

  return route;
};
