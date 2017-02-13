const express = require("express");
const route = express.Router();


module.exports = function(db) {

  route.get('/', get)
  route.post('/login',postLoginToken)
  route.post('/scores',postNewScore)

  function get(req, res, next) {
    res.json({users: []})
  }

  function postLoginToken(req, res, next) {
    db.checkIfPlayerExists('players', req.body )
    .then((data) => {
      res.json({'login':data})
    })
  }

  function postNewScore(req, res, next) {
    console.log('req.body', req.body);
    db.addScore(req.body)
  }
  return route;
};
