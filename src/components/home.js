const React = require('react')
const { connect } = require('react-redux')

const NotLoggedIn = require('./NotLoggedIn')
const LoggedIn = require('./LoggedIn')

function Home(props) {
  return props.userName
    ?<LoggedIn />
    :<NotLoggedIn {...props} router={props.router}/>
}

module.exports = connect((state) => state)(Home)
