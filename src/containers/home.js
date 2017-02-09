const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const Navbar = require('./navbar')
function Home(props) {
  return (
    <div>
      <Navbar />
      <h1>Korero Mai!</h1>
      <p>Learn Te Reo!</p>
      <Link to="adventure"><button onClick={() => props.dispatch({type: 'UPDATE_SITUATION', situation: 11})}>Start!</button></Link>
    </div>
  )
}

module.exports = connect((state) => state)(Home)
