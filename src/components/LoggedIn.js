const React = require('react')
const Welcome = require('./welcome')
const UsersProfile = require ('./users/profile')

module.exports = function(props) {
  return (
    <div className="welcome">
      <Welcome />
      <UsersProfile />
    </div>
  )
}
