const React = require('react')
const Welcome = require('./welcome')
const Login = require('./login')
const NewUser = require('./users/new')


module.exports = (props) => (
  <div className="welcome">
    <Welcome />
    <Login router={props.router} />
    <div className='homePageButton'>
      <NewUser {...props} />
    </div>
  </div>
)
