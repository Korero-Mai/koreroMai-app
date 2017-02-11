const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

function Home(props) {
  return (
    <div className='row'>
      <div className='colums large-centered small-12 medium-6 large-4'>
        <div className="homeDiv">
          <h1 className="h1-home">Kōrero Mai</h1>
          <h3 className="h3-home">Learn Te Reo!</h3>
          <br />
          <Link to="activity"><button className="play-button" onClick={() => props.dispatch({type: 'UPDATE_SITUATION', situation: 11})}>PLAY!</button></Link>
        </div>
      </div>
    </div>
  )
}

module.exports = connect((state) => state)(Home)
