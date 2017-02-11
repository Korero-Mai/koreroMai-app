const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

function Home(props) {
  return (
    <div className="homeDiv">
      <h1>Kōrero Mai</h1>
      <h3>Learn Te Reo!</h3>
      <br />
      <Link to="activity"><button className="play" onClick={() => props.dispatch({type: 'UPDATE_SITUATION', situation: 11})}>PLAY!</button></Link>
    </div>
  )
}

module.exports = connect((state) => state)(Home)
