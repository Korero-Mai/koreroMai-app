const express = require("express");
const route = express.Router();
const bcrypt = require('bcryptjs')
const session = require('express-session')


module.exports = function(db) {


  route.post('/register', confirmUniqueEmail, postNewUser)
  route.post('/login', loginUser)


  function postNewUser(req, res, next) {
    bcrypt.genSalt(10, function(err, salt) {
      bcrypt.hash(req.body.password, salt, function(err, hash) {
        req.body.password = hash
        db.addUser('users', req.body)
        .then((user) => {
          console.log('this is the new user:', user);
          res.json({isUser:true, error: null, user: user[0]})
        })
      })
    })
  }


  function loginUser(req, res, next) {
    db.findUserByEmail('users', req.body.email)
    .then((dbData) => {
        if(!dbData[0]) {
          return res.json({isUser: false, error:'This does not exist'})
        } else {
            bcrypt.compare(req.body.password, dbData[0].password, function(error, match) {
              if (match) {
                console.log('this is the match', match);
                req.session.isAuthenticated = true
                delete dbData[0].password
                delete dbData[0].email
                res.json({isUser: true, userData: dbData[0]})
              }  else {
                  console.log('this is the res === false', match);
                  res.json({isUser: false, error: 'Invalid email or password'})
                }
            })
          }
    })
  }

  function isAuthenticated(req, res, next){
    console.log('req.session', req.session);
    if(req.session.isAuthenticated === true){
      alert('You are logged in')
    } else {
        res.redirect('/login-register')
        alert('Please register to use this site')
      }
  }

  function confirmUniqueEmail(req, res, next) {
    db.findUserByEmail('users',req.body.email)
    .then((user) => {
        console.log('user:', user);
      if(!user[0]) {
        next()
      } else {
        res.json({isUser: false, error: 'Email already exists'})
      }
    })
  }

  return route;
};


    // console.log('resources.js req.body.email', req.body.email)
