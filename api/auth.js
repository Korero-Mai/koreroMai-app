const express = require('express')
const route = express.Router()
const bcrypt = require('bcryptjs')
const session = require('express-session')

module.exports = (db) => {
  route.post('/register', confirmUniqueEmail, postNewUser)
  route.post('/login', loginUser)
  route.get('/logout', logoutUser)
  route.get('/logged-in', serializeUser, getAuthenticatedUser)

  function getAuthenticatedUser(req, res, next) {
    if (req.session.isAuthenticated) {
      return res.json({authenticated: true, user: req.session.user})
    }
    res.json({authenticated: false, user: null})
  }

  function serializeUser(req,res, next) {
    if (req.session.isAuthenticated){
      db.findUserByEmail(req.session.userEmail)
        .then(users => {
          delete users[0].password
          req.session.user = users[0]
          next()
        })
    } else {
      req.session.user = null
      next()
    }
  }

  function postNewUser(req, res, next) {
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(req.body.password, salt, (err, hash) => {
        req.body.password = hash
        db.addUser('users', req.body)
        .then((user) => {
          res.json({ isUser:true, error: null, user: user[0]})
        })
      })
    })
  }

  function loginUser(req, res, next) {
    db.findUserByEmail(req.body.email)
    .then((dbData) => {
        if(!dbData[0]) {
          return res.json({isUser: false, error:'This does not exist'})
        } else {
            bcrypt.compare(req.body.password, dbData[0].password, (error, match) => {
              if (match) {
                req.session.isAuthenticated = true
                req.session.userId = dbData[0].id
                req.session.userEmail = dbData[0].email
                delete dbData[0].password
                delete dbData[0].email
                res.json({isUser: true, userData: dbData[0]})
              }  else {
                  res.json({isUser: false, error: 'Invalid email or password'})
                }
            })
          }
    })
  }

  function logoutUser(req, res, next) {
    req.session.destroy()
    res.json({session: 'destroyed'})
  }

  function isAuthenticated(req, res, next) {
    if(req.session.isAuthenticated === true) {
      alert('You are logged in')
    } else {
        res.redirect('/login-register')
        alert('Please register to use this site')
      }
  }

  function confirmUniqueEmail(req, res, next) {
    db.findUserByEmail(req.body.email)
    .then((user) => {
      if(!user[0]) {
        next()
      } else {
        res.json({isUser: false, error: 'Email already exists'})
      }
    })
  }
  return route
}
