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
          console.log('this are the users:', user[0]);
          res.json(user)
        })
      })
    })
  }


  function loginUser(req, res, next) {
    db.findUserByEmail('users', req.body.email)
    .then((dbData) => {
      if(!dbData[0]) {
        console.log('this is db[0]:', dbData[0]);
        return res.json({login: false, error:'This does not exist'})
      } else {
          new Promise(function(resolve, reject){
            bcrypt.compare(req.body.password, dbData[0].password, function(err, res) {
              if (res) {
                console.log('this is the res === true', res);
                resolve ({valid: true, user: dbData[0]})
              } else {
                console.log('this is the res === false', res);
                resolve ({valid: false})
              }
            });
          })
          .then(function(match) {
            if (match.valid) {
              res.json(match.user.id)
            }
          })
        }
    })
  }

  return route;
};
