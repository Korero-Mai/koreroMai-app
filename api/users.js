const express = require('express')
const route = express.Router()

module.exports = function(db) {
  route.get('/:id/profile', getProfileData)

  function getProfileData(req, res, next) {
    db.findPlayersByUser('users', req.params.id)
    .then((data) => res.json(data))
  }
  return route;
}


    // console.log('resources.js req.body.email', req.body.email)
