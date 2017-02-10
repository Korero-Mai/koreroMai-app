const React = require('react')
const { connect } = require('react-redux')

function PracticeSounds(props) {

  return (
      <div className="playBox">
        <h1>Practice the letters activity</h1>
        <div className="navButtons">
          <button className="button radius">Back</button>
          <button className="button radius">next</button>
        </div>
      </div>
    )
}

module.exports = connect((state) => state)(PracticeSounds)
