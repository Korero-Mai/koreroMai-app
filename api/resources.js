const express = require("express");
const route = express.Router();
const bcrypt = require('bcryptjs')


module.exports = function(db) {

  // route.get('/users', users); //gets all the users
  route.post('/register', confirmUniqueEmail, postNewUser)
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
          console.log('this is the new user:', user);
          res.json({error: null, user: user})
        })
      })
    })
  }


  function loginUser(req, res, next) {
    db.findUserByEmail('users', req.body.email)
    .then((dbData) => {
      console.log('dbData', dbData);
      // const { name, id, password } = dbData
      if(!dbData) {
        console.log('this is falsy dbData:', dbData);
        return res.json({login: false, error:'This does not exist'})
      } else {
          bcrypt.compare(req.body.password, dbData.password, function(error, match) {
           if (match) {
            req.session.userId = match.id
            console.log('this is the res === true', match);
            res.json({id:match.id, login: true})
              }  else {
                console.log('this is the res === false', match);
                res.json({login: false, error: 'Invalid email or password'})
              }
          })
        }
    })
  }

  function confirmUniqueEmail(req, res, next) {
    db.findUserByEmail('users',req.body.email)
    .then((users) => {
      if(users.length === 0) {
        next()
      } else {
        res.json({error: 'Existing email'})
      }
    })
  }

  return route;
};


    // console.log('resources.js req.body.email', req.body.email)
