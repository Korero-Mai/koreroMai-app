const express = require('express')
const route = express.Router()
const bcrypt = require('bcryptjs')


module.exports = function(db) {

  route.get('/users', users); //gets all the users
  route.get('/users/:id/profile', userProfile) //display a specific user
  route.get('/nights', nights); //display all of the nights info
  route.get('/users/:id/nights', userNight); //get a users nights
  route.post('/', post);   //what does this do?
  route.post('/users/new', userNew);   //post a new user
  route.post('/users/login', login) //login a user

  function login(req, res, next) {
    const email = req.body.email
    const entered_password = req.body.password
    db.findUserByEmail(email)
      .then(user => {
        if (!user) {
          res.json({error: 'user not found'})
        } else {
          bcrypt.compare(entered_password, user.password, function(err, response) {
            if (response) {
              res.json({id: user.id, login: true})
            } else {
              res.json({login: false})
            }
          });
        }
      })
  }

  function users(req, res, next) {
    db.findAll('users')
      .then((users) => {
        res.json(users)
      })
  }

  function nights(req, res, next) {
    db.findAll('nights')
      .then((nights) => {
        res.json(nights)
      })
  }

  function userNight(req, res, next) {
    db.findAll('users_nights')
      .then((users_nights) => {
        res.json(users_nights)
      })
  }

  function userNew(req, res, next){
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
