const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const _ = require('lodash')
const NewUser = require('./users/new')
const { RaisedButton } = require('material-ui')
const Welcome = require('./welcome')
const Login = require('./login')
const UsersProfile = require ('./users/profile')


const Home = (props) => {
  const notLoggedIn = (
    <div className="welcome">
      <Welcome />
        <Login router={props.router} />
        <div className='homePageButton'>
          <NewUser {...props} />
        </div>
    </div>
  )
  const loggedIn = (
    <div className="welcome">
      <Welcome />
      <UsersProfile />
    </div>
  )

  return props.userName
    ?loggedIn
    :notLoggedIn

}

module.exports = connect((state) => state)(Home)
