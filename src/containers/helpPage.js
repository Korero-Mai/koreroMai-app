const React = require('react')
const { connect } = require('react-redux')
const { Link } = require('react-router')

function HelpPage(props) {
  return (
    <div className='help-page'>
      <h1 className="h1-home">I am Lost</h1>
        <h2 className="h3-home">I Need Help</h2>
          <h3>Please Help!!!</h3>
      <Link to="/"><button className="play-button">Go Back!</button></Link>
    </div>
  )
}

module.exports = connect((state) => state)(HelpPage)
