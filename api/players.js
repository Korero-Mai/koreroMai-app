const express = require("express");
const route = express.Router();


module.exports = function(db) {

  route.get('/player', getPlayer)
  route.get('/score-data', getScoreData)
  route.post('/login',postLoginToken)
  route.post('/scores',postNewScore)
  route.post('/editPlayer',postEditedPlayer)
  route.post('/addPlayer',postNewPlayer)

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
    if (!req.body.player_token.length) return
    db.addScore(req.body)
  }

  function postEditedPlayer(req,res,next){
    console.log('req.body', req.body);
    const formattedData=req.body
    const id =req.body.id_player
    delete formattedData.id_player

    db.changePlayerInfo(id,formattedData)
    .then(data=>{
      res.json(data)
    })
  }

  function postNewPlayer(req,res,next){
    db.addPlayer('players',req.body)
    .then((playerData)=>{
      console.log('playerData', playerData);
      db.findPlayersByUser('users',playerData.user.id)
      .then(data=>{
        console.log('data', data);
        res.json(data)
      })
    })

    return {data:'success'}
  }

  return route;
};
