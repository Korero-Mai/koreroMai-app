const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')
const Navbar = require('./navbar')
function Home(props) {
  return (
    <div>
      <Navbar />
      <h1>Korero Mai!</h1>
      <h1>Home Page</h1>
      <p>Learn Te Reo!</p>
      <Link to="activities"><button className="button radius" onClick={() => props.dispatch({type: 'UPDATE_SITUATION', situation: 11})}>Play</button></Link>
    </div>
  )
}

module.exports = connect((state) => state)(Home)
