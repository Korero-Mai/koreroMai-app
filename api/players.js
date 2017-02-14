const express = require("express");
const route = express.Router();


module.exports = function(db) {

  route.get('/player', getPlayer)
  route.get('/score-data', getScoreData)
  route.post('/login',postLoginToken)
  route.post('/scores',postNewScore)

  function getPlayer(req, res, next) {
    db.findPlayerByToken(req.query.token)
    .then((player) => {
      res.json(player)
    })
  }

  function getScoreData(req, res, next) {
    db.getScoreData(req.query.playerId)
    .then((scoreData) => {
      res.json(scoreData)
    })
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
